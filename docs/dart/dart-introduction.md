---
sidebar_position: 1
title: Dart 基本介紹
draft: true
---

簡單透過列出其核心特性與範例來介紹 Dart 語言。

## Hello World

在每款應用程式中，都必須有一個位於最頂層的 main() 函數，作為程式的啟動點。如果函數未明確指定返回值，則其返回類型預設為 void。若想在控制台顯示文字，可以使用頂層的 print() 函數，如下所示：

```dart
void main() {
  print('Hello, World!');
}
```

欲深入了解 Dart 語言中的 main() 函數，包括用於命令列的可選參數，可參閱更多相關資料。

## 變數 Variables

即使在類型安全 (type-safe) 的 Dart 代碼中，您可以透過 var 來宣告絕大多數變數，而無需明確指定它們的數據類型。得益於 Dart 的型態推斷機制 (type inference)，這些變數的類型將根據它們的初始值自動確定：

```dart
var name = 'Voyager I';
var year = 1977;
var antennaDiameter = 3.7;
var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
var image = {
  'tags': ['saturn'],
  'url': '//path/to/saturn.jpg'
};
```

想了解更多關於 Dart 變數的資料，包括它們的預設值、使用 final 和 const 關鍵詞的情況，以及靜態類型等，都可以在相關文獻中找到。

## 控制流程 Control flow

Dart 支援了各類標準的控制流程語句，如下所示：

```dart
if (year >= 2001) {
  print('21st century');
} else if (year >= 1901) {
  print('20th century');
}

for (final object in flybyObjects) {
  print(object);
}

for (int month = 1; month <= 12; month++) {
  print(month);
}

while (year < 2016) {
  year += 1;
}
```

想要深入了解 Dart 中的控制流程語句，包括使用 break 和 continue 進行流程控制、switch 和 case 進行選擇判斷，以及 assert 斷言等，都可以在相關文獻中找到詳細資料。

## 函數 Functions

建議在定義函數時明確指出其參數和返回值的類型：

```dart
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var result = fibonacci(20);
```

當函數僅包含一條語句時，可以使用 =>（箭頭）語法進行簡化。這種語法在將匿名函數作為參數傳遞時尤為實用：

```dart
flybyObjects.where((name) => name.contains('turn')).forEach(print);
```

這段代碼不僅展示了匿名函數的使用（作為 where() 的參數），還顯示了如何將函數作為參數，例如將頂層的 print() 函數作為 forEach() 的參數。

欲了解更多有關 Dart 中函數的相關資訊，包括可選參數、預設參數值以及詞彙作用域等，可查閱相關文獻。

## 註解 Comments

在 Dart 語言中，註解一般以兩個斜線 // 開頭。

```dart
// 這是標準的單行註解。

/// 而這種註解則用於撰寫文檔，對於記錄程式庫、類和它們的元素特別有用。
/// 開發工具如 IDEs 及 dartdoc 都會對這種文件註解進行特別處理。

/* Dart 也支援這種傳統的多行註解。 */
```

想了解更多關於 Dart 中的註解，包括其文檔工具如何工作的細節，可參閱相關文獻。

## 導入 Import

要使用其他程式庫中定義的 API，我們需要透過 import 指令進行導入。

```dart
// Importing core libraries
import 'dart:math';

// Importing libraries from external packages
import 'package:test/test.dart';

// Importing files
import 'path/to/my_other_file.dart';
```

進一步瞭解 Dart 中關於程式庫的運用和可視範圍，包括如何設定程式庫前綴、使用 show 和 hide 控制可見性，以及如何利用 deferred 關鍵字達成延遲載入。

## 類別 Classes

以下是一個類別的例子，它擁有三個屬性、兩種建構方式及一個方法。該類別中有一個屬性不可直接賦值，因此透過getter方法進行定義。該方法利用字串插值功能，在字串字面值中顯示變數的字串形式。

```dart
class Spacecraft {
  String name;
  DateTime? launchDate;

  // Read-only non-final property
  int? get launchYear => launchDate?.year;

  // Constructor, with syntactic sugar for assignment to members.
  Spacecraft(this.name, this.launchDate) {
    // Initialization code goes here.
  }

  // Named constructor that forwards to the default one.
  Spacecraft.unlaunched(String name) : this(name, null);

  // Method.
  void describe() {
    print('Spacecraft: $name');
    // Type promotion doesn't work on getters.
    var launchDate = this.launchDate;
    if (launchDate != null) {
      int years = DateTime.now().difference(launchDate).inDays ~/ 365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}
```

想進一步了解更多關於 Dart 中字串的運用，包括字串插值、字面量、表達式以及 toString() 方法的相關資訊。

再來是 Spacecraft 類別的使用範例：

```dart
var voyager = Spacecraft('Voyager I', DateTime(1977, 9, 5));
voyager.describe();

var voyager3 = Spacecraft.unlaunched('Voyager III');
voyager3.describe();
```

深入了解 Dart 中類別的特性，包括初始化列表、選擇性的 new 和 const 關鍵字、重定向建構子、工廠型建構子、getter、setter 等等。

## 枚舉 Enums

枚舉是一種確保特定類型只有預定義的實例集合，而無法創建其他實例的方式。

這是一個簡單枚舉的例子，用於定義一系列預設的行星類型：

```dart
enum PlanetType { terrestrial, gas, ice }
```

接下來是一個關於描述行星的增強型枚舉聲明，其中包含了我們太陽系中行星的一組常量實例。

```dart
/// Enum that enumerates the different planets in our solar system
/// and some of their properties.
enum Planet {
  mercury(planetType: PlanetType.terrestrial, moons: 0, hasRings: false),
  venus(planetType: PlanetType.terrestrial, moons: 0, hasRings: false),
  // ···
  uranus(planetType: PlanetType.ice, moons: 27, hasRings: true),
  neptune(planetType: PlanetType.ice, moons: 14, hasRings: true);

  /// A constant generating constructor
  const Planet(
      {required this.planetType, required this.moons, required this.hasRings});

  /// All instance variables are final
  final PlanetType planetType;
  final int moons;
  final bool hasRings;

  /// Enhanced enums support getters and other methods
  bool get isGiant =>
      planetType == PlanetType.gas || planetType == PlanetType.ice;
}
```

您可能會這樣使用 Planet 枚舉：

```dart
final yourPlanet = Planet.earth;

if (!yourPlanet.isGiant) {
  print('Your planet is not a "giant planet".');
}
```

閱讀更多關於 Dart 中枚舉的知識，包括增強型枚舉的規則、自動產生的屬性、如何存取枚舉值名稱、switch 語句的支持等等。

## 繼承 Inheritance

在 Dart 中，類別的繼承是單一的。

```dart
class Orbiter extends Spacecraft {
  double altitude;

  Orbiter(super.name, DateTime super.launchDate, this.altitude);
}
```

進一步了解如何擴展類別，包括使用可選的 @override 註解等詳情。

## 混入 Mixins

Mixins 允許在多個類別結構中共用程式碼。以下是一個 mixin 的宣告範例：

```dart
mixin Piloted {
  int astronauts = 1;

  void describeCrew() {
    print('Number of astronauts: $astronauts');
  }
}
```

若要讓某個類別具備 mixin 的功能，只需將該類別與 mixin 結合。

```dart
class PilotedCraft extends Spacecraft with Piloted {
  // ···
}
```

這樣一來，PilotedCraft 就擁有了 astronauts 屬性和 describeCrew() 方法。

深入了解有關 mixins 的更多資訊。

## 介面和抽象類別 Interfaces and abstract classes

在 Dart 中，所有的類別都隱含著一個介面的定義，這意味著你可以實現任何類別。

```dart
class MockSpaceship implements Spacecraft {
  // ···
}
```

深入瞭解隱含介面，以及如何使用顯式介面關鍵字。

你還可以創建一個抽象類別，供其他具體類別去繼承或實現。抽象類別可以包含抽象方法（方法主體為空）。

```dart
abstract class Describable {
  void describe();

  void describeWithEmphasis() {
    print('=========');
    describe();
    print('=========');
  }
}
```

繼承 Describable 的任何類別都會擁有 describeWithEmphasis() 方法，這個方法會調用該類別實現的 describe() 方法。

更多關於抽象類別和方法的資訊，歡迎深入閱讀。

## Async

利用 async 和 await，你可以避免繁瑣的回調結構(callback hell)，讓代碼變得更加清晰易讀。

```dart
const oneSecond = Duration(seconds: 1);
// ···
Future<void> printWithDelay(String message) async {
  await Future.delayed(oneSecond);
  print(message);
}
```

這個方法實際上和以下寫法等效：

```dart
Future<void> printWithDelay(String message) {
  return Future.delayed(oneSecond).then((_) {
    print(message);
  });
}
```

正如下例所示，async 和 await 使得撰寫和理解非同步代碼變得簡單。

```dart
Future<void> createDescriptions(Iterable<String> objects) async {
  for (final object in objects) {
    try {
      var file = File('$object.txt');
      if (await file.exists()) {
        var modified = await file.lastModified();
        print(
            'File for $object already exists. It was modified on $modified.');
        continue;
      }
      await file.create();
      await file.writeAsString('Start describing $object in this file.');
    } on IOException catch (e) {
      print('Cannot create description for $object: $e');
    }
  }
}
```

你還可以使用 async*，這是一種建立串流的有效方法。

```dart
Stream<String> report(Spacecraft craft, Iterable<String> objects) async* {
  for (final object in objects) {
    await Future.delayed(oneSecond);
    yield '${craft.name} flies by $object';
  }
}
```

深入了解 Dart 中非同步的支持，包括 async 函數、Future、Stream 以及非同步迴圈（await for）。

## Exceptions

若要觸發一個異常，可使用 throw 命令：

```dart
if (astronauts == 0) {
  throw StateError('No astronauts.');
}
```

要捕獲異常，可以在 try 語句中使用 on 或 catch（或兩者兼用）：

```dart
Future<void> describeFlybyObjects(List<String> flybyObjects) async {
  try {
    for (final object in flybyObjects) {
      var description = await File('$object.txt').readAsString();
      print(description);
    }
  } on IOException catch (e) {
    print('Could not describe object: $e');
  } finally {
    flybyObjects.clear();
  }
}
```

注意，上面的代碼是異步的，但 try 語句既適用於同步代碼，也適用於 async 函數中的代碼。

進一步了解關於異常處理的詳細信息，包括堆疊追踪、重新拋出異常，以及 Error 和 Exception 的區別。

## 重要觀念

在深入學習 Dart 語言時，以下幾點是基礎核心：

* 在 Dart 中，所有能放入變數的元素都是物件(object)，並且每個物件都是某個類別的實例。這裡的物件包括數字、函式，甚至是 null。除了 null（在 sound null safety 的情況下），所有對象都繼承自 Object 類別。

:::note

版本說明：Dart 在 2.12 版本引入了 Null safety。要使用這個特性，至少需要 Dart 2.12 版本。

:::

* Dart 雖然是強型別語言，但型別註釋是可選的，因為 Dart 能自動推斷型別(type inference)。比如在 var number = 101 這行代碼中，Dart 會自動推斷出 number 是 int 型別。
  
* 如果開啟了 null safety，除非特別指明，變量是不允許包含 null 的。你可以在型別後加上問號（?）來標記一個變數可能是 null。例如，int? 型別的變量可能是一個整數，也可能是 null。如果你確定某個表達式絕不會是 null，但 Dart 卻認為有可能，你可以用 ! 斷言它非 null（如果錯了，則會拋出異常）。例如 int x = nullableButNotNullInt!。
  
* 當你想明確表示接受任何型別時，可以使用 Object?（在開啟 null safety 時）、Object，或者如果你要在執行時才進行型別檢查，可以使用特殊型別 dynamic。

* Dart 支持泛型，比如 `List<int>`（整數列表）或 `List<Object>`（任意型別對象的列表）。

* Dart 支持全域函式（例如 `main()`），以及與類別或對象綁定的函式（靜態和實例函式）。你還可以在函式內創建函式（嵌套或局部函式）。

* 同理，Dart 支持全域變量以及綁定於類別或對象的變量（靜態和實例變量）。實例變量有時也被稱為 fields 或 properties。

* 不同於 Java，Dart 沒有 public、protected 和 private 這些訪問修飾詞。如果一個標識符以底線（_）開頭，那麼它在所屬的庫中是私有的。更多細節請參考庫和導入的相關內容。

* 標識符可以由字母或底線（_）開頭，後接字母、底線或數字的任意組合。

* Dart 中既有表達式（有運行時值）也有語句（無運行時值）。例如，條件表達式 condition ? expr1 : expr2 的值是 expr1 或 expr2。而 if-else 語句則沒有值。一個語句通常包含一個或多個表達式，但表達式本身不能直接包含語句。

* Dart 工具會報告警告和錯誤兩種問題。警告只是提示代碼可能存在問題，但不會阻止程序運行。錯誤則分為編譯時和運行時兩種，編譯時錯誤會阻止代碼運行，而運行時錯誤會在代碼執行過程中引發異常。


參考：[Introduction to Dart](https://dart.dev/language)