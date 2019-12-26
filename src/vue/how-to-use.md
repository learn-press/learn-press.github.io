
# How to use

There are several ways to use vue.

## vue-cli

vue-cli is an official tool that lets you [scaffold](/software-terms/scaffold/) vue projects.

The upside is that it comes with excellent tools out of the box.
The downside is that it's not as trivial to integrate with existing projects and that
it maybe be less simple than the manual method.

I will do an entire article on vue-cli

Said tools benefits include (thanks to webpack):
* Compression of multiple resources (images, fonts, js/css code) in a single file
* Development server that autoreloads your browser
* Support for `.vue` files

## manually

The upsides and downsides to these methods are opposite to the vue-cli ones.

There are two ways to use vue manually.

### manually via script in your html page

You can use the cool service unpkg to reference vue directly via a `script` tag.

### manually via your own bundler

If you are using webpack, rollup, grunt, gulp, you can `require` or `import`.
