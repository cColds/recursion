# Recursion Assignments

Recursive solutions to [Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number) and [Merge Sort](https://en.wikipedia.org/wiki/Merge_sort).

# Assignment 1: Fibonacci

## Implementation Notes

1. I added both an iterative and a recursive solution.
2. Must input an integer 1 or greater.
3. I use a default parameter array for fibonacci to prevent it from resetting the array to `[0, 1]`.

# Assignment 2: Merge Sort

## Implementation Notes

1. Only designed for sorting numbers in ascending order.
2. Uses `shift()` to get the first item in the array, while removing it, which helps with brevity; however, it's sluggish.
3. Utilise `concat` to append array of items to `mergeArray`, if low or high has no items.
4. Use `Math.floor(1 + (array.length - 1) / 2)` to prevent arithmetic overflow.
