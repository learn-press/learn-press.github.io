
# End tag

It has the form of (in order):
* A `<` character
* A `/` character
* The name of the tag
* A `>` character.

As in: `</dog>`

When declared, it needs a pre existing start tag to be declared before it and in the same level.

For example, this is invalid:
```html
  <cat>
  </cat>
</dog>
```

But this is valid:
```html
<dog>
  <cat>
  </cat>
</dog>
```
