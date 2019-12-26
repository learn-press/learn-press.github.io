
# HTTP server component

Every server side web framework has an http server as a component.

These http server components are usually (and inaccurately) referred to as web servers,
even though they are almost always just an http server.

They are sometimes also referred to as app/application servers.

These components are either:
* Written in the same language as the "mother" framework, or
* Have language bindings to the language of the "mother" framework

## Examples

RubyOnRails by default uses the [puma](https://github.com/puma/puma) gem as HTTP server, which is wwritten in ruby, the same language as RubyOnRails (duh).

express uses the [native nodejs HTTP server](https://nodejs.org/api/http.html) written in C (in libuv), which has javascript bindings because it is part of the standard node library.
