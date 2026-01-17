# Building from Source

If you prefer to install Xen by building from source, you'll need a system that support [makefiles](https://en.wikipedia.org/wiki/Make_(software)#Makefile) and GCC (or [Clang](#compiler-support)).

## Cross-Compiling

Xen uses cross-compilation toolchains for Linux like [MinGW](https://www.mingw-w64.org/) and [osxcross](https://github.com/tpoechtrager/osxcross) to provide builds for platforms other than Linux. In order to build all platforms without modification to the makefiles requires having these toolchains installed and in your **PATH**.

If you have all the required toolchains installed, you can run the following command to build targets for all platforms:
```
$ make all-platforms
```

## Compiler Support

By default, Xen uses GCC to build on Linux, MinGW for Windows, and Clang for macOS. MSVC has not been tested in any capacity.

## Building Xen

### 1. Get the source

**Cloning from GitHub:**

GitHub will have the latest changes but typically contains breaking changes. Checkout a tagged release if stability is what you want.

```
$ git clone https://github.com/XenLanguage/Xen
```

**Download source tarball from releases:**

This contains source code from stable releases.

```
$ wget https://github.com/jakerieger/Xen/archive/refs/tags/v0.5.5.tar.gz
```

### 2. Run `make`

```
$ cd Xen
$ make all
```

That's pretty much it. Builds will be located in `build/<platform>-<target>`.