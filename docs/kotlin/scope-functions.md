---
sidebar_position: 2
title: Scope Functions
---

let, run, with, apply and also

本文筆記了 Kotlin Scope Functions 的常見用法。

> 簡單來說，這些函數都是用來針對某個物件執行某一個範圍(scope/或叫做code block)的程式碼。  
> 在這個範圍內，可以不需要用物件名稱來存取該物件。  
>
> Scope Functions 主要目的是用來幫助 **簡化程式碼** 跟 **提升閱讀性** 。

底下提供一個簡單的範例，分別是有無使用 Scope Functions 的情形。

```kotlin title="使用 Scope Functions: let"
Person("Alice", 20, "Amsterdam").let {
    println(it)
    it.moveTo("London")
    it.incrementAge()
    println(it)
}
```

```kotlin title="不使用 Scope Functions"
val alice = Person("Alice", 20, "Amsterdam")
println(alice)
alice.moveTo("London")
alice.incrementAge()
println(alice)
```

可以看到不使用 Scope Functions 就需要宣告一個變數，並在每一行使用時都重複寫出那個變數名稱。

## Function 選擇整理

以下表格簡單的總結各種 Scope Functions 的差異：

| Func | 物件參考 | 回傳 | 是否為 extension function |
| ---- | ---- | ---- | ---- |
| let | it | 函數最後一行的結果 | Yes |
| run | this | 函數最後一行的結果 | Yes |
| 直接呼叫 run  | - | 函數最後一行的結果 | No: 無參數 |
| with | this | 函數最後一行的結果 | No: 將物件當作參數呼叫 |
| apply | this | 該物件本身 | Yes |
| also | it | 該物件本身 | Yes |

&nbsp;

這邊整理了依照不同目的，建議使用的 Scope Function:
* 針對 nullable 物件為 non-null 的時候再執行： let
* 宣告變數時增加閱讀性： let
* 對物件的 member 賦值： apply
* 對物件初始化跟做一些運算： run
* 執行一些描述性質可增加閱讀性的內容並賦值：run 直接呼叫
* 增加額外效果： also
* 把要對物件執行的一些 code 包在函數中： with


## 差別整理

這些函數主要的差異在於：

1. Context object 也就是 scope/code block 內主要情境物件的參考用法
2. 函數的回傳是什麼

### Context object: this or it

在 scope/code block 內，物件可以用簡化的方式來參考物件，而不是用物件名稱，以達到簡化程式碼的目的。  
每個 scope function 皆用了其中一種方式來參考物件：

* `this` (lambda receiver)
* `it` (lambda argument)

```kotlin title="針對不同 Context object 的範例："
fun main() {
    val str = "Hello"
    // this
    str.run {
        println("The string's length: $length")
        //println("The string's length: ${this.length}") // does the same
    }

    // it
    str.let {
        println("The string's length is ${it.length}")
    }
}
```

#### this

run, with 跟 apply 用 `this` (也就是 lambda receiver) 的方式來參考物件。  
而大部分的情況下 `this` 都可以省略。  
也因為 `this` 在被省略的情況下不容易分辨 scope 內的參數是屬於物件還是外部，   
所以一般來說這類的 scope functions 會用來針對參考物件的 member 賦值，   
或是對參考物件的成員函數做呼叫，在 scope 內不會參考外部的變數或函數。

```kotlin
val adam = Person("Adam").apply { 
    age = 20                       // same as this.age = 20
    city = "London"
}
println(adam)
```

#### it

turn, let 跟 also 用 `it` (也就是 lambda argument) 的方式來參考物件。  
it 為函數的預設引數名稱，也就是說程式碼可以額外指定函數引數名稱而不用`it`。   
因為在 scope 內要參考物件要額外寫引數名，因此較適合混合內部與外部的函數或變數(因為較好分辨)。

```kotlin title="使用預設引數名稱 it："
fun getRandomInt(): Int {
    return Random.nextInt(100).also {
        writeToLog("getRandomInt() generated value $it")
    }
}

val i = getRandomInt()
println(i)
```

```kotlin title="額外指定引數名稱為 value 的用法："
fun getRandomInt(): Int {
    return Random.nextInt(100).also { value ->
        writeToLog("getRandomInt() generated value $value")
    }
}

val i = getRandomInt()
println(i)
```


## let
* 物件在 scope 內的參考為：it
* 回傳為 lambda result

let 常用來在 function call 結束後，調用一個或多個函數：

```kotlin title="沒使用 let"
val numbers = mutableListOf("one", "two", "three", "four", "five")
val resultList = numbers.map { it.length }.filter { it > 3 }
println(resultList) 
```

```kotlin title="使用 let, 不需要再宣告跟使用 resultList 這個變數"
val numbers = mutableListOf("one", "two", "three", "four", "five")
numbers.map { it.length }.filter { it > 3 }.let { 
    println(it)
    // and more function calls if needed
} 
```

&nbsp;

若 let function scope 內只有一個函數，並且傳入的參數為 it ，可以再用 method reference (`::`) 簡寫：
```kotlin
val numbers = mutableListOf("one", "two", "three", "four", "five")
numbers.map { it.length }.filter { it > 3 }.let(::println)
```

&nbsp;

let 一個常用情境為在物件不為 null 的情況下才執行它，  
通常會搭配 safe call operator `?.`

```kotlin
val str: String? = "Hello"   
//processNonNullString(str)       // compilation error: str can be null
val length = str?.let { 
    println("let() called on $it")        
    processNonNullString(it)      // OK: 'it' is not null inside '?.let { }'
    it.length
}
```

&nbsp;

另一個常用情境為利用 let 宣告一個新的變數，透過 let 內的邏輯來增加閱讀性。  
例如以下範例的 modifiedFirstItem 變數。

```kotlin
val numbers = listOf("one", "two", "three", "four")
val modifiedFirstItem = numbers.first().let { firstItem ->
    println("The first item of the list is '$firstItem'")
    if (firstItem.length >= 5) firstItem else "!" + firstItem + "!"
}.uppercase()
println("First item after modifications: '$modifiedFirstItem'")
```

## with
* 物件在 scope 內的參考為：this
* 回傳為 lambda result

with 不是一個 extension function，所以寫法為一般 function call。  
with scope function 要將物件當參數傳入，同時在 code block 內用 this 來參考。

建議用來執行一些不需要回傳結果的函數或邏輯，  
閱讀上可以看成 "***with this object, do the following.***"
```kotlin
val numbers = mutableListOf("one", "two", "three")
with(numbers) {
    println("'with' is called with argument $this")
    println("It contains $size elements")
}
```

&nbsp;

也常用來對一個 helper 物件賦值，也是一個增加閱讀性的用法：
```kotlin
val numbers = mutableListOf("one", "two", "three")
val firstAndLast = with(numbers) {
    "The first element is ${first()}," +
    " the last element is ${last()}"
}
println(firstAndLast)
```

## run
* 物件在 scope 內的參考為：this
* 回傳為 lambda result

run 基本上與 with 一樣，唯一差異為 run 是一個 extension function，所以可以用點`.`來呼叫。

run 常用來對該物件同時做初始化跟運算：
```kotlin
val service = MultiportService("https://example.kotlinlang.org", 80)

val result = service.run {
    port = 8080
    query(prepareRequest() + " to port $port")
}

// the same code written with let() function:
val letResult = service.let {
    it.port = 8080
    it.query(it.prepareRequest() + " to port ${it.port}")
}
```

&nbsp;

也可以將 run 直接拿來呼叫，此時 run function 不帶任何參數，仍然回傳最後一行的結果。
也是一種增加閱讀性的用法，可看成 "***run the code block and compute the result.***"

```kotlin
val hexNumberRegex = run {
    val digits = "0-9"
    val hexDigits = "A-Fa-f"
    val sign = "+-"

    Regex("[$sign]?[$digits$hexDigits]+")
}

for (match in hexNumberRegex.findAll("+123 -FFFF !%*& 88 XYZ")) {
    println(match.value)
}
```

## apply
* 物件在 scope 內的參考為：this
* 回傳為該物件本身

建議主要用來對物件的 member 賦值，  
可看成 "***apply the following assignments to the object.***"

```kotlin
val adam = Person("Adam").apply {
    age = 32
    city = "London"        
}
println(adam)
```

## also
* 物件在 scope 內的參考為：it
* 回傳為該物件本身

常用來在 code chain 中增加對該物件執行某些函數，  
可看成 "***and also do the following with the object.***"

```kotlin
val numbers = mutableListOf("one", "two", "three")
numbers
    .also { println("The list elements before adding new one: $it") }
    .add("four") 
```

## takeIf and takeUnless

kotlin 標準函式庫中還提供了兩種 extension function，  
照字面上直觀可以得知 takeIf 會在物件符合 lambda 內條件時回傳該物件，否則回傳 `null`，
而 takeUnless 則相反，會在物件符合條件時回傳 `null`，否則回傳該物件。

```kotlin
val number = Random.nextInt(100)

val evenOrNull = number.takeIf { it % 2 == 0 }
val oddOrNull = number.takeUnless { it % 2 == 0 }
println("even: $evenOrNull, odd: $oddOrNull")
```

在 code chain 中使用這兩個 function 時，特別需要注意因為它們有可能回傳 `null`，
在後面需要加上 safe call (?)。

```kotlin title="使用 takeIf："
fun displaySubstringPosition(input: String, sub: String) {
    input.indexOf(sub).takeIf { it >= 0 }?.let {
        println("The substring $sub is found in $input.")
        println("Its start position is $it.")
    }
}

displaySubstringPosition("010000011", "11")
displaySubstringPosition("010000011", "12")
```

```kotlin title="不使用 takeIf："
fun displaySubstringPosition(input: String, sub: String) {
    val index = input.indexOf(sub)
    if (index >= 0) {
        println("The substring $sub is found in $input.")
        println("Its start position is $index.")
    }
}

displaySubstringPosition("010000011", "11")
displaySubstringPosition("010000011", "12")
```

&nbsp;

參考：
[Scope Functions](https://kotlinlang.org/docs/scope-functions.html)