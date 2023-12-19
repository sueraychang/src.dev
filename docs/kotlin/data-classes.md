---
sidebar_position: 1
title: Data Classes
---

本篇紀錄 Data Classes 的主要概念與用法。

Data Classes 的主要目的就是持有 Data， 這種 Class 會自動建立一些成員函數例如 toString, compare, copy 等等：

```kotlin title="持有 User Data(name & age) 的 Data Class"
data class User(val name: String, val age: Int)
```

而編譯器對 data class 會自動產生以下的成員函數：
* .equals() / .hashCode()
* .toString() 格式為 "User(name=John, age=42)"
* .componentN() 依照參數順序產生，Kotlin可以以此來將屬性解構(Destructuring)
* .copy()

Data Classes 必須要滿足以下條件：
* 它的 Primary Constructor 必須要有至少一個的參數
* 所有在 primary Constructor 內的參數必須標明 `val` 或 `var`
* 它不能是 abstract, open, sealed, or inner.

另外在自動生成 Data Classes 成員函數時有這些規則：
* 若它已經有實作 .equals(), .hashCode() 或 .toString()，則編譯器就不會在自動建立這些函數。
* 不能自行實作 .componentN() 與 .copy() 函數。 



## 宣告在 Class Body 的變數

另外要注意的是編譯器自動產生的函數只會對 Primary Constructor 內的參數有效。

要把 Data Class 的參數排除在自動生成函數外的話可以這樣做：

```kotlin title="age 這個變數將排除在外"
data class Person(val name: String) {
    var age: Int = 0
}
```

在這個範例裡，只有 `name` 這個變數會包含在 .toString(), .equals(), .hashCode() 跟 .copy() 的實作內，也只會有 .component1()。

如果此時有兩個 `Person` 物件，他們有不一樣的 `age` 但有一樣的 `name` ，他們會被視為 **equal**。因為 .equals() 只會判斷 `name` 這個變數是否一樣。

```kotlin
val person1 = Person("John")
val person2 = Person("John")
person1.age = 10
person2.age = 20

println("person1 == person2: ${person1 == person2}")
// person1 == person2: true

println("person1 with age ${person1.age}: ${person1}")
// person1 with age 10: Person(name=John)

println("person2 with age ${person2.age}: ${person2}")
// person2 with age 20: Person(name=John)
```

## Copying

使用 `.copy()` 這個函數來複製物件，這個函數可以讓你改變某些參數的值，並且其餘不變。

```kotlin title="上面 User Data Class 的 copy() 函數實作"
fun copy(name: String = this.name, age: Int = this.age) = User(name, age)
```

使用上可以這樣用：

```kotlin title="Copy Jack 這個 User, 同時將 age 改成 2"
val jack = User(name = "Jack", age = 1)
val olderJack = jack.copy(age = 2)
```

## Destructuring

透過 Data Classes 的 `component functions` (也就是 .componentN()) 我們就能使用 Destructuring

```kotlin
val jane = User("Jane", 35)
val (name, age) = jane
println("$name, $age years of age")
// Jane, 35 years of age
```

雖然標準函式庫有提供 `Pair` `Triple` 這些類別，但使用 Destructuring 可以將變數命名，將提升可讀性，會是較建議的做法。

參考：
[Data Classes](https://kotlinlang.org/docs/data-classes.html)