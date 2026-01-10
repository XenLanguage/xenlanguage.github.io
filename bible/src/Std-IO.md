# xen::io

Provides utilities for input and output.

```makefile
include io;
```

## Public Functions


### print
```ts
print (value: any, ...) -> null
```
Prints text to the console.

### println
```ts
println (value: any, ...) -> null
```
Prints text to the console, adding a newline at the end.

### input
```ts
input (prefix: string) -> string | null
```
Receives input from the console, submitted when the enter key is pressed.

### clear
```ts
clear () -> null
```
Clears the console screen.

### pause
```ts
pause () -> null
```
Waits for the user the press the enter key.