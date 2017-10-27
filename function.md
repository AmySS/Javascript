# usage of function #
* difference between a function expression vs declaration

---

## 1. difference between a function expression vs declaration

### Function Declaration
```javascript
function foo() {...}
// Because of function hoisting, the function declared this way can be called both after and before the definition.
```
### Function Expression
1.Named Function Expression
```javascript
var foo = function bar() {...}
```
2.Anoymous Function Expression
```javascript
var foo = function() {...}
//foo() can be called only after creation.
```
### Immediately-Invoked Function Expression (IIFE)
```javascript
(function() { ... }());
```