# Data Types in JavaScript
* 数据类型
    - 原始值数据类型
    - 引用值数据类型
    - 原始值与引用值的区分
    - 类型转换
* 数据结构

---
## 数据类型
最新的 ECMAScript 标准定义了 7 种数据类型，其中有6种为原始类型。
## 1. 原始值数据类型
* Boolean
* Null
* Undefined
* Number
* String
* Symbol (ECMAScript 6 新定义)

### typeof 运算符
对变量或值调用 typeof 运算符将返回下列值之一：
* undefined - 如果变量是 Undefined 类型的
* boolean - 如果变量是 Boolean 类型的
* number - 如果变量是 Number 类型的
* string - 如果变量是 String 类型的
* symbol - 如果值为Symbol类型(ES6新增)
* object - 如果变量是一种引用类型或 Null 类型的
* function - 函数对象

**注释：**您也许会问，为什么 typeof 运算符对于 null 值会返回 "Object"。

这实际上是 JavaScript最初实现中的一个错误，然后被 ECMAScript 沿用了。现在，null 被认为是对象的占位符，从而解释了这一矛盾，但从技术上来说，它仍然是原始值。

### usage examples

```javascript
// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // 尽管NaN是"Not-A-Number"的缩写
typeof Number(1) === 'number'; // 但不要使用这种形式!

// Strings
typeof "" === 'string';
typeof "bla" === 'string';
typeof (typeof 1) === 'string'; // typeof总是返回一个字符串
typeof String("abc") === 'string'; // 但不要使用这种形式!

// Booleans
typeof true === 'boolean';
typeof false === 'boolean';
typeof Boolean(true) === 'boolean'; // 但不要使用这种形式!

// Symbols
typeof Symbol() === 'symbol';
typeof Symbol('foo') === 'symbol';
typeof Symbol.iterator === 'symbol';

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined'; 

// Objects
typeof {a:1} === 'object';

// 使用Array.isArray 或者 Object.prototype.toString.call
// 区分数组,普通对象
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';

// 下面的容易令人迷惑，不要使用！
typeof new Boolean(true) === 'object';
typeof new Number(1) ==== 'object';
typeof new String("abc") === 'object';

// 函数
typeof function(){} === 'function';
typeof Math.sin === 'function';

//NaN

typeof 1/0 === 'NaN';
```

## 2. 引用值数据类型

* Object

### instanceof 运算符

在使用 typeof 运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，它都返回 "object"。ECMAScript 引入了另一个 Java 运算符 instanceof 来解决这个问题。
instanceof 运算符与 typeof 运算符相似，用于识别正在处理的对象的类型。与 typeof 方法不同的是，instanceof 方法要求开发者明确地确认对象为某特定类型。

### usage examples

```javascript
var simpleStr = "This is a simple string"; 
var myString  = new String();
var newStr    = new String("String created with constructor");
var myDate    = new Date();
var myObj     = {};

simpleStr instanceof String; // returns false, 检查原型链会找到 undefined
myString  instanceof String; // returns true
newStr    instanceof String; // returns true
myString  instanceof Object; // returns true

myObj instanceof Object;    // returns true, despite an undefined prototype
({})  instanceof Object;    // returns true, 同上

myString instanceof Date;   // returns false

myDate instanceof Date;     // returns true
myDate instanceof Object;   // returns true
myDate instanceof String;   // returns false
```

## 3. 原始值与引用值的区分
区别两种类型的直接特征是：**存储位置**。

### 原始值
存储在栈（stack）中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。
### 引用值
存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的内存处。

为变量赋值时，ECMAScript的解释程序必须判断该值是原始类型，还是引用类型。要实现这一点，解释程序则需尝试判断该值是否为 ECMAScript 的原始类型之一，即 Undefined、Null、Boolean、Number 和 String 型。
由于这些原始类型占据的空间是固定的，所以可将他们存储在较小的内存区域 - 栈中。这样存储便于迅速查寻变量的值。

**在许多语言中，字符串都被看作引用类型，而非原始类型，因为字符串的长度是可变的。ECMAScript 打破了这一传统。**

如果一个值是引用类型的，那么它的存储空间将从堆中分配。由于引用值的大小会改变，所以不能把它放在栈中，否则会降低变量查寻的速度。相反，放在变量的栈空间中的值是该对象存储在堆中的地址。地址的大小是固定的，所以把它存储在栈中对变量性能无任何负面影响。如下图所示：

![Alt text](./resources/stack_heap.gif)

## 4. 类型转换

* 转换成字符串: toString()
    - arrayObject.toString()
    - booleanObject.toString()
    - dateObject.toString()
    - NumberObject.toString()
    - stringObject.toString()

* 转换成数字
    - parseInt()
    - parseFloat()
    - usage examples

    1. parseInt()

    ```javascript
    var iNum1 = parseInt("12345red");   //返回 12345
    var iNum1 = parseInt("0xA");    //返回 10
    var iNum1 = parseInt("56.9");   //返回 56
    var iNum1 = parseInt("red");    //返回 NaN
    //parseInt()方法还有基模式，可以把二进制、八进制、十六进制或其他任何进制的字符串转换成整数。
    //基是由parseInt() 方法的第二个参数指定的，所以要解析十六进制的值，需如下调用 parseInt() 方法：
    var iNum1 = parseInt("AF", 16); //返回 175
    //当然，对二进制、八进制甚至十进制（默认模式），都可以这样调用 parseInt() 方法：
    var iNum1 = parseInt("10", 2);  //返回 2
    var iNum2 = parseInt("10", 8);  //返回 8
    var iNum3 = parseInt("10", 10); //返回 10
    //如果十进制数包含前导 0，那么最好采用基数 10，这样才不会意外地得到八进制的值。例如：
    var iNum1 = parseInt("010");    //返回 8
    var iNum2 = parseInt("010", 8); //返回 8
    var iNum3 = parseInt("010", 10);    //返回 10

    ```

    2. parseFloat()

    使用 parseFloat()方法的另一不同之处在于，字符串必须以十进制形式表示浮点数，而不是用八进制或十六进制。
    该方法会忽略前导 0，所以八进制数 0102 将被解析为 102。对于十六进制数 0xA，该方法将返回NaN，因为在浮点数中，x 不是有效字符。
    （注释：经测试，具体的浏览器实现会返回 0，而不是 NaN。）

    ```javascript
    var fNum1 = parseFloat("12345red"); //返回 12345
    var fNum2 = parseFloat("0xA");  //返回 NaN
    var fNum3 = parseFloat("11.2"); //返回 11.2
    var fNum4 = parseFloat("11.22.33"); //返回 11.22
    var fNum5 = parseFloat("0102"); //返回 102
    var fNum1 = parseFloat("red");  //返回 NaN
    ```

* 强制转换
ECMAScript 中可用的 3 种强制类型转换如下：
    - Boolean(value) - 把给定的值转换成 Boolean 型；
    - Number(value) - 把给定的值转换成数字（可以是整数或浮点数）；
    - String(value) - 把给定的值转换成字符串；
用这三个函数之一转换值，将创建一个新值，存放由原始值直接转换成的值。这会造成意想不到的后果。

    - usage examples

    1. Boolean() 函数
```javascript
var b1 = Boolean("");       //false - 空字符串
var b2 = Boolean("hello");      //true - 非空字符串
var b1 = Boolean(50);       //true - 非零数字
var b1 = Boolean(null);     //false - null
var b1 = Boolean(0);        //false - 零
var b1 = Boolean(new object()); //true - 对象
```

    2. Number() 函数
    |        用法      |    结果    |
    |      --------   |  --------  |
    |  Number(false) |  0  |
    |  Number(true)  |  1 |
    |  Number(undefined)  |  NaN |
    |  Number(null)  |  0 |
    |  Number("1.2")  | 1.2  |
    |  Number("12")  |  12 |
    |  Number("1.2.3")  | NaN |
    |  Number(new object())  | NaN |
    |  Number(50)     | 50 |


    3. String() 函数
强制转换成字符串和调用 toString() 方法的唯一不同之处在于，对 null 和 undefined 值强制类型转换可以生成字符串而不引发错误：

```javascript
var s1 = String(null);  //"null"
var oNull = null;
var s2 = oNull.toString();  //会引发错误
```

