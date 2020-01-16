
# Indentation

For SGML-like markup languages, there is no difference between this:
```xml
<animals>
  <dog>I am a dog</dog>
</animals>
```

And this:
```xml
<animals>
  <dog>
    I am a dog
  </dog>
</animals>
```

In fact, it could all be in a single line:
```xml
<animals><dog>I am a dog</dog></animals>
```

While indentation is significative in some programming languages (like Ruby or Python)
it is not in SGML-like markup languages.
