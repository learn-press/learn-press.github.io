
# environment

TODO: break down this article into its own directory with subarticles

A concept used to differentiate places one application runs in.

This concept mostly applies to applications that have users
which use the application via some network.

## Development and production

There are at least two environments.

* development (usually stylized as dev)
* production (also known as live)

## Differences between development and production

While applications are developed, it is faster 

Development is oftenly (but not restricted to) running
in the machine of the developer and only exposed locally by hosting in
[localhost](./localhost/).

Development normally doesn't use SSL, while SSL is a must in production.

## Data in environments

Data is usually considered real in production, but usually fake in development.
Dev environment data can be:

* A copy of production data (synchronized periodically)
* Randomly or manually generated data

## Referring to applications or devices

Production and development terms are also used to refer to applications themselves.  
In other words, "the production application" is the same as saying
"the application running in production" refer to the same application.

The same goes for the devices running these environment based applications:  
Eg: "the production machine" is the same as saying "the machine that is running the production application".

## Other environments

The existence of other environments depends on how the developer designs it.

### staging, aka pre-production 

Staging is meant to be identical to production, with the exception of
being meant to be accessed only by developers.

Its purpose is to deal with possible production related errors
or last minute errors without exposing these to users, at least ideally.

### test, aka testing

test is the environment used when running application tests.

If the app has persistent data, it usually has a fixed set of fake data
that is generated and destroyed on each test execuction.
