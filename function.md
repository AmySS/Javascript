# Usage of Function #
* function: difference between a function expression vs declaration
* function*
* async function

---

## 1. difference between a function expression vs declaration

### Function Declaration
```javascript
function foo() {...}
// Because of function hoisting, 
//the function declared this way can be called both after and before the definition.
```

### Function Expression
1. Named Function Expression
```javascript
var foo = function bar() {...}
```

2. Anoymous Function Expression
```javascript
var foo = function() {...}
//foo() can be called only after creation.
```

### Immediately-Invoked Function Expression (IIFE)
```javascript
(function() { ... }());
(function() { ... })();
```

## 2. function*
function* 这种声明方式会定义一个生成器函数，返回一个Generator对象。

### Usage Description

* -**生成器函数**在执行时能中途退出，后面又能重新进入继续执行，函数内定义的变量的状态都会保留。
* -调用一个生成器函数并不会立即执行函数体，而是返回一个 **迭代对象** 。当这个迭代对象的next()方法被调用时，函数体会执行到第一个（后续）出现yield表达式的位置为止，yield表达式定义了迭代器要返回的值。



### features
* next()

    返回的对象格式为{value: _value, done: true|false}

* yield & yield*

    yield定义迭代器要返回的值，yield* 将值委派给另一个生成器。

* 显式return

    会导致生成器立即变成完成状态，即next()方法返回的对象done为true.如果 return 了一个值，那么这个值会作为下次调用 next() 方法返回的 value 值。

* 生成器函数不能当构造函数使用

### example

```javascript
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

## 3. async function
