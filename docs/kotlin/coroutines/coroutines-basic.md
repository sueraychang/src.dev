---
sidebar_position: 1
title: Coroutines Basics
---

此篇筆記主要介紹最基本的 Coroutines 內容。

Coroutine (協程) 是一個可以被暫停 (suspendable) 的一段任務程式，概念有點類似 Thread 可以將不同的程式碼同步的執行。然而 Coroutine 並不會被固定在 Thread 中，而是可以在 A Thread 暫停， B Thread 恢復繼續執行。

Coroutine 可以視為輕量化的 Thread，**但他其實與 Thread 不同**。

以下範例是一個 coroutine：

```kotlin
fun main() = runBlocking { // this: CoroutineScope
    launch { // launch a new coroutine and continue
        delay(1000L) // non-blocking delay for 1 second (default time unit is ms)
        println("World!") // print after delay
    }
    println("Hello") // main coroutine continues while a previous one is delayed
}
```

```powershell title="執行結果"
Hello
World!
```

#### runBlocking

runBlocking 是一個 coroutine builder，它建立了一個 coroutine 並且會阻塞 (block) 它當下執行的 Thread (以這個範例就是 main thread)。它是被設計來橋接一般非 coroutine 程式碼到可以被暫停風格 (suspending style) 的程式碼，通常僅用在 main function 或測試目的。

所以 runBlocking 會 block main thread 直到其內部的所有 coroutines 都執行完畢。

#### launch

launch 也是一個 coroutine builder，它產生了一個新的 coroutine，其內部的程式碼將會被同步的執行。

#### delay

delay 是一個特殊的暫停的函數 (suspending function)，它會暫停目前的 coroutine 一些時間。當 coroutine 被暫停後，這個 Thread 並不會被卡住，而是其他使用這個 Thread 的 coroutine 會繼續執行。

## Structured Concurrency

Coroutine 遵守 Structured Concurrency 原則，簡單來說就是 Coroutine 綁定了 scope 當作生命週期的概念。每個 coroutine 都必須在某個 CoroutineScope 內才能執行。以第一個範例來說，runBlocking 建立了一個 CoroutineScope，而 launch 建立了一個 coroutine 在 runBlocking 的 CoroutineScope 裏。

在實際的應用，CoroutineScope 避免讓其中的 coroutine 遺失或造成 memory leak。

## Suspending Function

將之前的範例程式碼重構成 suspending function:

```kotlin
fun main() = runBlocking { // this: CoroutineScope
    launch { doWorld() }
    println("Hello")
}

// this is your first suspending function
suspend fun doWorld() {
    delay(1000L)
    println("World!")
}
```

當一般 fun 前面加了 suspend 修飾符後，代表這個 function 除了可以用在 coroutine 裡面以外，函數內部還可以使用其他 suspending function (如 delay()) 來暫停當下的 coroutine。

## Scope builder

可以用 coroutineScope 來建立一個 scope，它與 runBlocking 類似，但 coroutineScope 是一個 suspend function，也就是它不會阻塞 Thread，相反的 runBlocking 是一個一般的 function 並且它會阻塞目前的 Thread。

```kotlin title="Scope builder 用法範例，將原本 runBlocking 的內容包在一個 coroutineScope 內"
fun main() = runBlocking {
    doWorld()
}

suspend fun doWorld() = coroutineScope {  // this: CoroutineScope
    launch {
        delay(1000L)
        println("World!")
    }
    println("Hello")
}
```

```powershell title="執行結果一樣"
Hello
World!
```

coroutineScope 可以用在任何 suspend fun 內，並且其內部可以有多個 coroutine 同時進行：

```kotlin
// Sequentially executes doWorld followed by "Done"
fun main() = runBlocking {
    doWorld()
    println("Done")
}

// Concurrently executes both sections
suspend fun doWorld() = coroutineScope { // this: CoroutineScope
    launch {
        delay(2000L)
        println("World 2")
    }
    launch {
        delay(1000L)
        println("World 1")
    }
    println("Hello")
}
```

coroutineScope 內的兩個 launch 會 ***同時*** 執行。  
此時因為 doWorld() 是 suspend fun，runBlocking 的內容會等到 doWorld 結束後才繼續進行下去，所以最後輸出為：

```powershell
Hello
World 1
World 2
Done
```

## Job

`launch` 會回傳一個 job 物件，若有宣告變數去接它的回傳的話，就可以利用這個變數去強制等待 launch 的 coroutine 完成。  

利用 `job.join()` ，會 suspend 目前的 coroutine 直到 launch 的內容完成。

```kotlin title="使用 job.join()"
val job = launch { // launch a new coroutine and keep a reference to its Job
    delay(1000L)
    println("World!")
}
println("Hello")
job.join() // wait until child coroutine completes
println("Done") 
```

```powershell title="執行結果"
Hello
World!
Done
```

參考：
[Coroutines Basics](https://kotlinlang.org/docs/coroutines-basics.html)