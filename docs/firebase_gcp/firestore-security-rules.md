---
title: Firestore Security Rules 安全規則
---

本篇紀錄 Firestore Security Rules 安全規則的一些寫法。

Cloud Firestore 的安全規則非常重要，因為它們確保了您的數據庫安全性和數據訪問的正確性。下面介紹了一些常見的設定場景和對應的範例規則。

### 允許所有用戶讀取，但只有認證用戶可以寫入

```javascript
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```
這個規則允許任何人讀取數據，但只有登入的用戶可以進行寫入操作。

### 完全私有數據庫

```javascript
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```
這個規則不允許任何讀寫操作，完全封鎖數據庫。

### 基於用戶ID的數據訪問

```javascript
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```
這個規則允許用戶只讀取和寫入與他們的用戶ID相對應的文檔。

### 允許用戶讀取但限制寫入

```javascript
service cloud.firestore {
  match /databases/{database}/documents {
    match /someCollection/{documentId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == someSpecificUserId;
    }
  }
}
```
任何人都可以讀取 someCollection 中的文檔，但只有特定ID的用戶可以寫入。

### 使用自定義函數來控制訪問

```javascript
service cloud.firestore {
  match /databases/{database}/documents {
    function isOwner(userId) {
      return request.auth != null && request.auth.uid == userId;
    }

    match /items/{itemId} {
      allow read: if true;
      allow write: if isOwner(resource.data.ownerId);
    }
  }
}
```
這裡定義了一個 isOwner 函數，用來檢查當前登入的用戶是否是某個項目的擁有者。

### 複合條件

```javascript
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read: if request.time < timestamp.date(2024, 12, 31);
      allow write: if request.auth != null && request.auth.token.email_verified;
    }
  }
}
```
這個規則允許在指定日期之前讀取 posts 集合中的文檔，並且只有那些已經驗證了電子郵件的用戶才能寫入。

### 根據文檔內容限制訪問

```javascript
service cloud.firestore {
  match /databases/{database}/documents {
    match /orders/{orderId} {
      allow read, write: if request.auth != null && resource.data.userId == request.auth.uid;
    }
  }
}
```
此規則可確保使用者只能讀取或寫入其 userId 欄位與其 auth.uid 相符的 orders 文件。

這裡的 resource 為所請求的文檔，resource.data 是儲存在文檔中的所有欄位和值的對應。所以這裡檢查了該文檔內的 userId 要與 auth.uid 一樣才可以讀寫。

### 管理員角色的訪問控制
假設應用程式有一個管理員角色，想要允許管理員存取所有資料：

```javascript
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.token.admin == true;
    }
  }
}
```
這裡，我們假設身份驗證令牌（JWT）包含一個 admin 字段，表示使用者是否為管理員。

### 限制文檔內容只有部分能更新

只想允許使用者更新他們的某些信息，但不允許更改其他字段，例如 email 或 userId 不允許修改：

```javascript
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow update: if request.auth.uid == userId
                     && !("email" in request.resource.data)
                     && !("userId" in request.resource.data);
    }
  }
}
```
這個規則允許使用者更新他們自己的信息，但阻止更改 email 或 userId 欄位。