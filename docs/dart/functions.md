---
sidebar_position: 2
title: Functions 函式
draft: true
---

函數本身是一種對象 (因為 Dart 是一個純粹的物件導向語言)，屬於 Function 類型。因此，函數既可以被賦值給變數，也可以作為參數傳遞給其他函數。你甚至可以像調用函數一樣調用 Dart 類的實例。更多詳情請參閱 Callable objects。

以下是一個函數實現的範例：

```dart
bool isNoble(int atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}
```

儘管 Effective Dart 建議為公開的 API 標註類型，但即使省略了這些類型註解，函數依然可以正常運作：

```dart
isNoble(atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}
```

對於只包含單一表達式的函數，你可以採用更簡潔的寫法：

```dart
bool isNoble(int atomicNumber) => _nobleGases[atomicNumber] != null;
```

這裡的 `=> expr` 是 `{ return expr; }` 的簡化形式，這種 `=>` 符號有時被稱作箭頭語法。

:::note
要注意的是，在箭頭 (=>) 與分號 (;) 之間只能使用表達式，而非完整的語句。舉例來說，你不能放入一個 if 語句，但可以使用條件表達式。
:::

## 參數 Parameters

一個函數可以設定任意多的必須位置參數。這些參數之後可以是命名參數或是選擇性的位置參數，但這兩種參數不可同時使用。

需要注意的是，有些 API —— 尤其是 Flutter 中的小部件建構函數 —— 僅使用命名參數，即便這些參數是必要的。關於這點的更多細節，請見下一部分。

無論是在傳遞參數給函數時，還是在定義函數參數時，都可以使用結尾逗號來增加代碼的可讀性。