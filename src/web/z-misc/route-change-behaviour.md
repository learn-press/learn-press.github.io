
# Route change behaviour

The route of a browser can change because of several reasons:

* A user entered a new route is entered in the browser address input
* A user clicked one of the Go Back/Go Forward buttons while they were enabled
* A user clicked an `a` tag that contained a valid `href` value was clicked in a page 
* The code of a page or extension changed the one of the properties in [`window.location`](https://developer.mozilla.org/en-US/docs/Web/API/Location)

## Same url click behaviour

Clicking an `a` tag (or pressing Enter while it is focused) with an `href`
value identical as current url doesn't trigger a page load.

This behaviour lets users quickly go to different sections of a page.

This is also used by client side frameworks as an artificial
client side routing solution.
