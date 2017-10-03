/*
Title: Extend Cart Overview with remove buttons instead of checkbox
*/


Copy and paste the "OrderSummary.cshtml" file to the "Themes/DefaultClean/Views/ShoppingCart" folder
Open this copied file, and then find following block of code

```html
  <td class="remove-from-cart">
    <span class="td-title">@T("ShoppingCart.Remove"):</span>
    <input type="checkbox" name="removefromcart" value="@(item.Id)" />
  </td>
```

replace with following code

```html
<td class="remove-from-cart">
  <span class="td-title">@T("ShoppingCart.Remove"):</span>
  <input type="checkbox" class="remove-from-cart__checkbox" id="remove-from-cart-@item.Id" name="removefromcart" value="@(item.Id)" />
  <span data-checkbox-id="remove-from-cart-@item.Id" class="remove-from-cart__btn-action ico ico-delete"></span>
</td>
```

And then, add following javascript block at the bottom of this file

```html
<script type="text/javascript">
    $(document).ready(function () {
        var container = '.order-summary-content';
        $('.remove-from-cart span.remove-from-cart__btn-action', container).on('click', function () {
            $('#' + $(this).data('checkbox-id'), container).prop('checked', true);
            $('.update-cart-button', container).click();
        });
    });
</script>
```

Finally, add following line of codes to the "styles.css" file (inside the "Themes/DefaultClean/Content" folder)

```css
/* Custom remove icon button for each item in the shopping-cart */
.order-summary-content .order-summary-content .remove-from-cart__checkbox {
    display: none;
}
.order-summary-content .ico {
    display: inline-block;
    height: 16px;
    width: 16px;
}
.order-summary-content .remove-from-cart .ico-delete {
    background: url(images/ico-delete.gif) center center no-repeat;
}
```
