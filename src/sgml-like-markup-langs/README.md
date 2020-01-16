
# SGML-like markup languages

This section will teach the basics of SGML-like markup languages,
such as HTML and XML which are the most ubiquitous.

As an example, let's say we have a famous quote.

```
Have no fear of perfection, you'll never reach it.

Salvador Dali
```

If we wanted to invent our own markup language for quotes,
we could markup the quote like this:

```html
<quote>
  <content>
    Have no fear of perfection, you'll never reach it.
  </content>
  <author>Salvador Dali</author>
</quote>
```

In the example, we are enclosing existing content with so-called tags.
We have the `<quote>` tag, the `<content>` and the `<author>` tag.
