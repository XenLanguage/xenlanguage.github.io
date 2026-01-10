# xen::dictionary

Provides utilities for working with [dictionaries](Dictionaries.md). All of the available functions in this namespace are also available as member functions to dictionary objects.

```makefile
include dictionary;
```

## Public Functions

### len
```ts
len (dict: dictionary) -> number
```
Returns the number of entries in the dictionary.

### keys
```ts
keys (dict: dictionary) -> [string]
```
Returns all keys as a list.

### values
```ts
values (dict: dictionary) -> [any]
```
Returns all values as a list.

### has
```ts
has (dict: dictionary, value: any) -> bool
```
Returns whether the given dictionary contains an entry with the given value.

### remove
```ts
remove (dict: dictionary, value: any) -> bool
```
Remove entry with given value from dictionary.

### clear
```ts
clear (dict: dictionary) -> null
```
Empties the given dictionary, removing all items.