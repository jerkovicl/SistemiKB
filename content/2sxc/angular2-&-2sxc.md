/*
Tile: Creating a 2sxc app (2sic web api) combined with angular2 application
*/

I have created a simple calculator using tosic web API, content types and angular 2 application.
The calculator is used to calculate your water consumption price. 


**Table of Contents**

- [Creating Content Types](#content-cretion)
- [Web API ](#web-api)
- [Angular2](#ng2-2sxc)
- [Testing] (#testing)
- [Production](#production)

## Content creation
I used 4 content types:
+ FiksniDio - represents a fixed set of profiles used for calculation
+ Kategorije - represents a list of categories used for calculation
+ Podrucje - represents a list of areas used for calculation
+ VarijabilniDio - represents a list of prices the price of water is calculated 
based on categories area and profile

## Web api
I created two web API-s, one for accesing the FiksniDio, Kategorije and Podrucje. This data is used in
calculator dropdowns and the second for filtering VarijabilniDio, which accepts dropdown data
and finds the appropriate data.
The following code is used in my webApi to get the data from the server.
**ProfiliKategorijePodrucja**
```cpp
    [HttpGet]
    [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.Anonymous)]
    [ValidateAntiForgeryToken]
    public HttpResponseMessage ProfiliKategorijePodrucja()
    {
   
        try
        {
            ProfiliKategorijePodrucja response = new ProfiliKategorijePodrucja();
            List<Profili> listaProfila = new List<Profili>();
            IDictionary<int,IEntity> data = App.Data["FiksniDio"].List;
            IEnumerable<dynamic> ieNumberableData = AsDynamic(data);
             listaProfila = ieNumberableData.Select(s => new Profili
             {
                JedCijena = (double)s.JedCijena,
                Profil = (double)s.Profil
            }).Cast<Profili>().ToList();
            response.Profili = listaProfila;

            List<Kategorije> listaKategorija = new List<Kategorije>();
            data = App.Data["Kategorije"].List;
            ieNumberableData = AsDynamic(data);
            listaKategorija = ieNumberableData.Select(s => new Kategorije(s.NazivKategorije, s.OpisKategorije)).Cast<Kategorije>().ToList();
            response.Kategorije = listaKategorija;

            List<string> listaPodrucja = new List<string>();
            data = App.Data["Podrucje"].List;
            ieNumberableData = AsDynamic(data);
            listaPodrucja = ieNumberableData.Select(s => s.NazivPodrucja).Cast<string>().ToList();
            response.Podrucja = listaPodrucja;

            return Request.CreateResponse(HttpStatusCode.OK, response, new MediaTypeHeaderValue("text/json"));
        }
        catch(Exception ex)
        {
            Exceptions.LogException(ex);
            
            return Request.CreateErrorResponse(HttpStatusCode.OK, ex.Message);
        }
    }
```
**IzlazniParametri**
```cpp
[HttpGet]
    [DnnModuleAuthorize(AccessLevel = SecurityAccessLevel.Anonymous)]
    [ValidateAntiForgeryToken]
    public HttpResponseMessage IzlazniParametri([FromUri] UlazniParametri ulazniParametri)
    {
        try
        {
            KlasaZaSerializaciju izlazniParametri = new KlasaZaSerializaciju();
            //bool odvod = true;
            //odvod = ulazniParametri.Odvodnja.ToUpper() == "DA" ? true:false;          
            IDictionary<int, IEntity> data = App.Data["VarijabilniDio"].List;
            IEnumerable<dynamic> ieNumberableData = AsDynamic(data);
            izlazniParametri = ieNumberableData.Where(w =>
            w.Kategorije[0].NazivKategorije.ToLower() == ulazniParametri.Kategorija.ToLower()
            && w.Podrucje[0].NazivPodrucja.ToLower() == ulazniParametri.Podrucje.ToLower()
            && w.Odvod == ulazniParametri.Odvodnja
            ).Select(s => new KlasaZaSerializaciju
            {
                vodoopskrba = (double)s.Vodoopskrba,
                odvodnje = (double)s.Odvodnje,
                prociscavanjeOtpadnihVoda = (double)s.ProciscavanjeOtpadnihVoda,
                kategorije = new Kategorije(s.Kategorije[0].NazivKategorije, s.Kategorije[0].OpisKategorije),
                naknada = new Naknade((double)s.NaknadaZaRazvoj, (double)s.NaknadaImovinskoPravnih, (double)s.NaknadaEKOProjekta, (double)s.NaknadaZaKoristenjeVoda, (double)s.NaknadaZaZastituVoda)
            }).Cast<KlasaZaSerializaciju>().FirstOrDefault();

            return Request.CreateResponse(HttpStatusCode.OK, izlazniParametri, new MediaTypeHeaderValue("text/json"));
            
        }
        catch (Exception ex)
        {
            Exceptions.LogException(ex);
            return Request.CreateErrorResponse(HttpStatusCode.OK, ex.Message);
        }
    }
```
## Ng2 2sxc
The following code is used in production to get the data from 2sxc. 
It is writen in TypeScript and Angular2.

**IN service**
```js
  getProfiliKategorijePodrucja(moduleID: number): any {
    //return this.http.get('http://vodovod-st.dev.sistemi.hr/DesktopModules/KalkulatorCijeneVode/API/Kalkulator/HelloWorld/').toPromise().then(this.extractData);//(response=>response.json());
    return $2sxc(moduleID).webApi.get('Kalkulator/ProfiliKategorijePodrucja').then(function (result) { console.log(result); return result; },function(error){ console.log("EROR",error)});
    //return $2sxc(moduleID).webApi.get('Kalkulator/ProfiliKategorijePodrucja').then(function(result){console.log("iz 2sxicija",result);return result;});
  }
 getIzlazniParametri(moduleID: number, ulazni: IzlazniParametri): any {
   let toSicObj = {
     Podrucje: ulazni.Podrucje,
     Kategorija: ulazni.Kategorija,
     Odvodnja: ulazni.Odvodnja
   };
  // return this.http.get('http://vodovod-st.dev.sistemi.hr/DesktopModules/KalkulatorCijeneVode/API/Kalkulator/HelloWorld1/').toPromise().then(this.extractData);
  return $2sxc(moduleID).webApi.get('Kalkulator/IzlazniParametri', toSicObj).then(function (result) { console.log(result); return result; },function(error){ console.log("EROR",error)});
 }
extractData(res: Response) {
  return  res.json();
}
```

**IN component**
```js
  ngOnInit(): void {
    this._2sxcApiService.getProfiliKategorijePodrucja(this.moduleID).then(data => {
      this.podrucja.push(this._constants.podrucjaDefault);
      data.Podrucja.forEach((me) => {
        this.podrucja.push(me);
      });

      const praznaKategorija = new Kategorije(this._constants.nazivKategorijeDefault, this._constants.opisKategorijeDefault);
      this.kategorije.push(praznaKategorija);
      data.Kategorije.forEach((me) => {
        this.kategorije.push(me);
      });
      const prazniProfil = new Profili(this._constants.profilDefault, null);
      this.profili.push(prazniProfil);
      data.Profili.forEach((me) => {
        this.profili.push(me);
      });

      // bindam model
      this.izlazniParametri.Podrucje = this.podrucja[0];
      this.izlazniParametri.Kategorija = praznaKategorija.nazivKategorije.toString();
      this.izlazniParametri.Profili = this.profili[0];
      this.izlazniParametri.Odvodnja = null;
    },
      error => this.showObracun = false);
  }
```
## Testing
Since your angular2 application can't communicate with 2sxc web api directly 
from outside of DNN environment. You need to create A DNN web api to send you mock data

## Production
After building your angular2 application you need to copy the code from your dist folder
to your 2sxc application. After you copy the files follow these steps to make sure your 
code works.

+ App selector comes FIRST example. ```<app-root></app-root>```
+ Check for roles and load 2sxc.api.min.js if needed
+ Put angular2 scripts inside of document.ready function

```html
<app-root moduleID="@Dnn.Module.ModuleID">Loading...</app-root>
@{
    if (!Dnn.User.IsInRole(Dnn.Portal.AdministratorRoleName))
    {
        <script type="text/javascript" src="/DesktopModules/ToSIC_SexyContent/js/2sxc.api.min.js" data-EnableOptimizations="100"></script>
    }
}
<script>
    $(document).ready(function () {
        console.log("document je ready");
        $.getScript('/Portals/0/2sxc/KalkulatorCijeneVode/dist/inline.d41d8cd98f00b204e980.bundle.js');
        $.getScript('/Portals/0/2sxc/KalkulatorCijeneVode/dist/styles.b2328beb0372c051d06d.bundle.js');
        $.getScript('/Portals/0/2sxc/KalkulatorCijeneVode/dist/main.6d49114bd2836c9490c8.bundle.js');
    });
   
</script>
```
