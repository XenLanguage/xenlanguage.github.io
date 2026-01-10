# xen::datetime

Provides utilities for date and time.

```makefile
include datetime;
```

## Public Functions

### now
```ts
now () -> number
```
Return the current milliseconds elapsed since the UNIX epoch.

### clock
```ts
clock () -> number
```
Return the current CPU clock time.