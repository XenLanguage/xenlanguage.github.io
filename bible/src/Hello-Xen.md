# Hello, Xen!

Let's kick things off with the canonical "Hello World" example in Xen. Open a new file and add the following to it:

```ts
include io;

io.println("Hello, Xen!");
```

Save it as `hello_xen.xen` and close it.

Now open a terminal and enter the following:
```
$ xen hello_xen.xen
```

You should see "Hello, Xen!" printed to your console. That's it!