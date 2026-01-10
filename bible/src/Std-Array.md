# xen::array

Provides utilities for working with [arrays](Arrays.md). All of the available functions in this namespace are also available as member functions to array objects.

```makefile
include array;
```

## Public Functions

### len
```ts
len (arr: array) -> number
```
Returns the number of values in the array.

### push
```ts
push (arr: array, value: any) -> number | null
```
Pushes a new value to the array. Returns the new number elements or `null` if failed.

### pop
```ts
pop (arr: array) -> any
```
Pops the most recent value from the array and returns it. This removes the value from the array.

### first
```ts
first (arr: array) -> any
```
Returns the first element in the array.

### last
```ts
last (arr: array) -> any
```
Returns the last element in the array.

### clear
```ts
clear (arr: array) -> null
```
Empties the given array, removing all previous values.

### contains
```ts
contains (arr: array, value: any) -> bool | null
```
Returns whether the given value exists in the array.

### index_of
```ts
index_of (arr: array, value: any) -> number | null
```
Gets the index of the given value in the array.

### reverse
```ts
reverse (arr: array) -> array | null
```
Reverse the insertion order of the elements in the array.

### join
```ts
join (arr: array, delim: string) -> string | null
```
Joins each element in the array with the given delimeter and returns a string.