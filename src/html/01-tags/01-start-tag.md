
# Start tag

It has the form of (in order):
* A `<` character
* The name of the tag
* A `>` character.

Eg: `<dog>` (not valid HTML)

When we [declare](/software-terms/declare/) a start tag in a document,
everything that comes after it is considered its descendent,
until (and except) an [end tag](./1-end-tag/) with the same name.

In this example, the declared `<puppy>` tag is a descendent of the `<dog>` tag:
```html
<dog>
  <puppy>Pip</puppy>
</dog>
```
