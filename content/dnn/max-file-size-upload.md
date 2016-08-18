/*
Title: DNN - Change max file size for upload
Sort: 5
*/

## DNN - Change max file size for upload

- To increase max file size for upload in DNN you can do it in 4 possible places.
- Examples below show how to increase file size to 30 MB.

**1. web.config – requestLimits maxAllowedContentLength**
```
    <security>
      <requestFiltering>
        <!-- 30 megabytes -->
        <requestLimits maxAllowedContentLength="31457280" />
      </requestFiltering>
    </security>    
```
![web.config](%image_url%/web.config.png)

**2. web.config – httpRuntime maxRequestLength requestLengthDiskThreshold**
```
    <!-- allow large file uploads 30 megabytes -->
    <httpRuntime … executionTimeout="900" … 
                                               maxRequestLength="30720" 
                                               requestLengthDiskThreshold="30720" 

```
![web.config2](%image_url%/web.config2.png)

**3. RadEditor – configfile.xml**
```
/DesktopModules/Admin/RadEditorProvider/ConfigFile/configfile.xml

Find this keys and set size in bytes

<property name="MaxDocumentSize"> 31457280</property> 
<property name="MaxImageSize"> 31457280</property> 
<property name="MaxFlashSize"> 31457280</property> 
<property name="MaxMediaSize"> 31457280</property> 
<property name="MaxSilverlightSize"> 31457280</property> 
<property name="MaxTemplateSize"> 31457280</property>

```
![radeditor](%image_url%/radeditor.png)

**4. DNN / Host / Host settings / Other Settings - Max Upload Size**  
![dnnhost](%image_url%/dnnhost.png)
