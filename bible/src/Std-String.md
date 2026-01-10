# xen::string

Provides utilities for working with [strings](Strings.md). All of the available functions in this namespace are also available as member functions to string objects.

```makefile
include string;
```

## Public Functions

### len
```ts
len (str: string) -> number
```
Returns the number of characters in the string.

### upper
```ts
upper (str: string) -> string | null
```
Converts the given string to **UPPERCASE**.

### lower
```ts
lower (str: string) -> string | null
```
Converts the given string to **lowercase**.

### substr
```ts
substr (str: string, start: number, end: number) -> string | null
```
Returns a substring taken from the source string at `[ str[start], str[end] ]`.

### find
```ts
find (str: string, needle: string) -> number | null
```
Find the given substring (`needle`) in the source string. Returns the index of the last matched character.

### trim
```ts
trim (str: string) -> string | null
```
Removes whitespace from the given string.

### contains
```ts
contains (str: string, needle: string) -> bool | null
```
Returns whether the given substring (`needle`) exists within the source string.

### starts_with
```ts
starts_with (str: string, prefix: string) -> bool | null
```
Returns whether the given source string starts with the given prefix.

### ends_with
```ts
ends_with (str: string, suffix: string) -> bool | null
```
Returns whether the given source string ends with the given suffix.

### split
```ts
split (str: string, split_on: string) -> [string] | null
```
Splits the source string at the given split token and returns an array of strings.

### replace
```ts
replace (str: string, old_str: string, new_str: string) -> [string] | null
```
Replaces `old_str` in `src` with `new_str`.