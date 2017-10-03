/*
Title: Adding a new widget zone to NopCommerce
*/

## Add a custom widget zone

Instead of "custom_widget_name" add the name of your custom widget zone

```html
@Html.Widget("custom_widget_name")
```

## Add the custom widget zone to the Nop Anywhere Sliders

To use the custom widget zone in a plugin you need to do the following:

- Open the "SupportedWidgetZones.xml" file located in the folder of the plugin.
- Add a new row like the one shown bellow. Replace the "custom_widget_name" with the name of the widget that you have created.

```xml
<WidgetZone>custom_widget_name</WidgetZone>
```

Save the file and resetart the application

## Set up your plugin to work with the custom widget zone

To add the plugin to your custom widget zone, please follow the steps below:

- Find your plugins settings (for example: Plugins > Html Widgets > Manage Html Widgets)
- Go to an existing item or create a new one.
- Go to the Widgets tab.
- From the Widget Zone drop-down select your custom_widget_zone.
- Click the Add new / Update button.
