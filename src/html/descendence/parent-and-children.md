
# Parent and children

When an element's descendant is directly "below" it, it's called a **child**.  
And when an element's ancestor is directly "above" it, it's called a **parent**.

Let's take the previous example and add `<section>` tag between `<div>` and `<span>`
and also describe in HTML comments the relationships between them:
```html
<div>       <!-- ancestor of <section> and <span>, parent of <section> -->
  <section> <!-- ancestor and parent of <span>, descendant and parent of <section> -->
    <span></span>  <!-- descendant of <section> and <div>, child of <section> -->
  </section>
</div>
```

## Things to notice

* Not every descendant of an element is also a child of it
* Not every ancestor of an element is also a parent of it
* Void elements cannot have any descendants
* Every element can only have one parent at a time
* Normal elements can have more than one child  
Eg: 
```html
<div> <!-- has two children. -->
  <section></section>
  <span></span>
</div>
```
