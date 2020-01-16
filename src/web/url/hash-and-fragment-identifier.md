
# Hash and fragment identifier

A URL can have a fragment identifier.

The fragment identifier (hereafter called fragment) of a url
is a group of characters at the end of it that start with the `#` character.

When present in any url, it is always the last part of it.

When referring to its value, we exclude the `#` character.
Eg: if the url is `example.com/index.html#asd` the fragment value is `asd`.

## Behaviour in modern browsers

Browsers autoscroll when the following happens:

* The route of a browser changes
* That new route value has a fragment
* The resulting page has at least one element with attribue `id` whose value is identical to the fragment

Browsers typically scroll to the top of that element
so it's aligned with the top of the [viewport](/software-terms/viewport/).

## In browser javascript

It is accessed and updatable via `window.location.hash`
