/*
Title: How to use import images to EasyGallery !
*/
Successfull import of Images into EasGallery



#### Kreiranje galerije
+ [Kreiranje foldera unutar \Portals\0\EasyDNNNews\\{ArticleID}](#cd-EasyDNNNews)
    - [Kreiranje slika s aspect ratiom](#mk-ImgAspectRatio)  
+ [Stvoriti folder unutar \Portals\0\EasyDNNnews\\{ArticleID}\thumbs\\{ModuleID}](#cd-EasyDNNnews-moduleID)
    - [Kreirati slike u formatima 80x80,100x100,620x400](#mk-Image)
#### Kreiranje slika
+ [Stvoriti folder unutar \Portals\0\EasyGalleryImages\1\\{GalleryID}](#cd-EasyGallery-galleryID)
    - [Kreirati slike u formatu thumb+ime slike](#mk-ImageThumb)

## CD EasyDNNNews
Kod prolazi kroz svaki articleID (u ovom slučaju je to IDVijesti) iz MySql baze koji sadrži sliku te za njega prvo kreira galeriju.
Galerija se kreira unutar foldera \Portals\0\EasyDnnNews\{articleID}\  zatim se slika kopira u taj novo kreirani direktorij.
```cpp
    if (!Directory.Exists(ConstanteZaSlike.CD_EasyDnn+ArticleID)) Directory.CreateDirectory(ConstanteZaSlike.CD_EasyDnn + ArticleID);
            File.Copy(putanjaDoSlike, saveDir);
```
# MK ImgApsectRatio
Novo kopirana slika se zatim oblikuje u 3 različita formata, naziv slike npr. za sliku 150x150 mora sadržavati 150150p10EDNthumbslika1.png
```cpp
  string resizeSaveDir = string.Format(ConstanteZaSlike.EasyDNNNewsImagesPutanja, ArticleID, ("150150p" + position + "EDNthumb") + articleIDAndNazivSlike);
            ResizeImage(Image.FromFile(saveDir), 150, 150, resizeSaveDir,true);
            resizeSaveDir = string.Format(ConstanteZaSlike.EasyDNNNewsImagesPutanja, ArticleID, ("150150p713" + "EDNthumb" + articleIDAndNazivSlike));
            ResizeImage(Image.FromFile(saveDir), 150, 150, resizeSaveDir, true);
            resizeSaveDir = string.Format(ConstanteZaSlike.EasyDNNNewsImagesPutanja, ArticleID, ("600600p713" + "EDNmain" + articleIDAndNazivSlike));
            ResizeImage(Image.FromFile(saveDir), 600, 600, resizeSaveDir, true);
```
**METODA ResizeImage()**
```cpp
 /// <summary>
    /// Resize the image to the specified width and height.
    /// </summary>
    /// <param name="image">The image to resize.</param>
    /// <param name="width">The width to resize to.</param>
    /// <param name="height">The height to resize to.</param>
    /// <returns>The resized image.</returns>
    public void ResizeImage(Image image, int width, int height, string savePath, bool keepRatio)
    {
        Bitmap destImage;
        Rectangle destRect;
        if (keepRatio)
        {
            double ratio = (double)image.Width / (double)image.Height;
            int keepratio = (int)((double)width / ratio);
            destRect = new Rectangle(0, 0, width, keepratio);
            destImage = new Bitmap(width, keepratio);
        }
        else
        {
            destRect = new Rectangle(0, 0, width, height);
            destImage = new Bitmap(width, height);
        }
        destImage.SetResolution(image.HorizontalResolution, image.VerticalResolution);

        using (var graphics = Graphics.FromImage(destImage))
        {
            graphics.CompositingMode = CompositingMode.SourceCopy;
            graphics.CompositingQuality = CompositingQuality.HighQuality;
            graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
            graphics.SmoothingMode = SmoothingMode.HighQuality;
            graphics.PixelOffsetMode = PixelOffsetMode.HighQuality;

            using (var wrapMode = new ImageAttributes())
            {
                wrapMode.SetWrapMode(WrapMode.TileFlipXY);
                graphics.DrawImage(image, destRect, 0, 0, image.Width, image.Height, GraphicsUnit.Pixel, wrapMode);
            }
        }
        //string saveDest = string.Format(ConstanteZaSlike.EasyDNNNewsImagesPutanja, 99999);
        destImage.Save(savePath);
        //return destImage;
    }
    ```
## Cd EasyDNNnews moduleID
Unutar foldera kojeg smo kreirali poviše \Portals\0\EasyDnnNews\articleID kreiramo novi folder 
\Portals\0\EasyDnnNews\{articleID}\thumbs\ nakon toga kreiramo još jedan folder
\Portals\0\EasyDnnNews\{articleID}\thumbs\{moduleID}
## Mk Image
Nakon što smo kreirali foldere stvaramo još 3 slike bez zadržavanja aspect ratio-a. Naziv slike je u formatu heightxwidthcthumbImeslike.png
```cpp
resizeSaveDir = string.Format("{0}{1}", thumbsAndModuleID, ("8080cthumb"+nazivSlike));
                ResizeImage(Image.FromFile(saveDir), 80, 80, resizeSaveDir, false);
                resizeSaveDir = string.Format("{0}{1}", thumbsAndModuleID, ("100100cthumb" + nazivSlike));
                ResizeImage(Image.FromFile(saveDir), 100, 100, resizeSaveDir, false);
                resizeSaveDir = string.Format("{0}{1}", thumbsAndModuleID, ("620400cthumb" + nazivSlike));
                ResizeImage(Image.FromFile(saveDir), 620, 400, resizeSaveDir, false);
```
Ove metode i parametri se proslijeđuju Storanoj proceduri koja zatim sprema podatke u bazu.
## Cd EasyGallery galleryID
Nakon što kreiramo Galeriju i pripadne fajlove, prolazimo kroz sve slike od pojedinog artikla (vijesti) i stvaramo folder 
\Portals\0\EasyGalleryImages\1\{GalleryID} unutar tog foldera kopiramo sliku artikla i resizamo je zadržavajuci aspect ratio
```cpp
string saveDir = string.Format("{0}\\{1}", ednPath, nazivSlike);
                    File.Copy(item.slikeProperties.put, saveDir);

                    string resizeSaveDir = string.Format("{0}\\{1}", ednPath,"thumb"+ nazivSlike);
                    ResizeImage(Image.FromFile(saveDir), 150, 150, resizeSaveDir, true);
```
Zatim ove parametre proslijeđujemo storanoj proceduri koja sprema podatke u bazu.
