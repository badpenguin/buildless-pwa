It is possibile to create builless preact web application with the right libraries.

Here you will find a skeleton of a working application that already includes:
- preact with hooks
- signals for preact https://github.com/preactjs/signals
- htm (template library) https://github.com/developit/htm
- preact-router

It all started when I was reading this:
https://preactjs.com/guide/v10/getting-started/#no-build-tools-route

So I discovered this project:
https://github.com/mujahidfa/preact-htm-signals-standalone

Then I created a complete PWA with those tools!

Of course here you will find a simple skeleton to make you familiar with those libraries.

The crucial stuff is the "importmap" in index.html.
Here you can also specify remote repositories if you wish.

As examples I've included:
- a simple splash-screen example;
- a classical up/down counter;
- a simple router example.

Have fun,
Antonio