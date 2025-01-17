# Halushkina_JavaScript



## Get started

Before testing please install dependencies:
```shell
npm i
```

Run tests:
```shell
npm run test
```

## Tasks

1.1. If the entered number is greater than 7, then print “Hello”

Ref. is [tests](./src/task1.spec.js).

1.2. If the entered name matches “John”, then output “Hello, John”, if not, then output "There is no such name"

Ref. is [tests](./src/task2.spec.js).

1.3. There is a numeric array at the input, it is necessary to output array elements that are multiples of 3
Ref. is [tests](./src/task3.spec.js).

2. Bracket sequence

> Can this sequence be considered correct? `[((())()(())]]`

- The sequence is not correct. Please take a look at the [tests](./src/sequence.spec.js).

> If the answer to the previous question is “no”, then what needs to be changed in it to make it correct?

- It needs to change the second from the end character `]` to the `)`
- The sequence should look like `[((())()(()))]`

The sequence validated in [tests](./src/sequence.spec.js).