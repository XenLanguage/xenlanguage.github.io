# xen::os

Provides utilities for interacting with the operating system.

```makefile
include os;
```

## Public Functions

### readtxt
```ts
readtxt (filename: string) -> string | null
```
Reads a file to a string.

### readlines
```ts
readlines (filename: string) -> [string] | null
```
Read a file's lines into an array.

### readbytes
```ts
readbytes (filename: string) -> UInt8Array | null
```
Read a file into a byte array.

### exit
```ts
exit (exit_code?: number) -> null
```
Exit the current process.

### exec
```ts
exec (cmd: string, args?: [string]) -> null
```
Execute the specified command.

### mkdir
```ts
mkdir (dir: string, overwrite?: bool) -> bool
```
Create a new directory. If `overwrite` is true and the directory already exists, it will be overwritten with the new, empty directory.

### rmdir
```ts
rmdir (dir: string) -> bool
```
Deletes the specified directory. For files, use `rm`.

### rm
```ts
rm (file: string) -> bool
```
Deletes the specified file. For directories, use `rmdir`.

### exists
```ts
exists (path: string) -> bool
```
Returns whether the given directory or file exists.

### sleep
```ts
sleep (duration: number) -> number
```
Sleeps the current process for `duration` seconds.