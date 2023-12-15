---
sidebar_position: 1
---

# 從0到1將 Docusaurus 署到 GitHub Pages


本篇文章介紹如何從零開始架設一個 Docusaurus 靜態網站，並部署到 GitHub Pages 的所有流程。

本文使用的環境為 `macos`，而 Docusaurus 版本為 `3.0.1`。

必要條件：
* 大致了解 Git 版本控管是什麼，以及 branch 是什麼
* 知道 GitHub 的用途，以及 GitHub Actions/Pages 提供什麼功能
  
執行步驟：
* 安裝 [Node.js](https://nodejs.org/en) 版本 18.0 以上
* 安裝 Docusaurus
* 設定 docusaurus.config.js
* GitHub 創建帳號並將 Docusaurus 上傳至 GitHub repo
* GitHub Actions workflow 自動完成部署至 GitHub Pages

## 安裝 Node.js

macos 推薦用 [Homebrew](https://brew.sh/) 安裝

在 Terminal 內輸入以下指令以安裝 homebrew：

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

完成後在 Terminal 輸入以下指令以[透過 homebrew 安裝 node](https://formulae.brew.sh/formula/node)：

```
brew install node
```

檢查 node 版本，需大於 18.0：
```
node -v
```

## 安裝 Docusaurus

官方建議用 `classic` 模板來快速建置。

在要放置部落格文檔的資料夾內執行以下指令：

```
npx create-docusaurus@latest my-website classic
```

這個指令會建立一個叫 `my-website` 的新資料夾，並把所需的專案檔放在該資料夾內。

此時一個叫做 my-website 的 docusaurus 專案就建立起來了。

要預覽這個專案的內容，可以透過 docusaurus 提供的 local server：

```
cd my-website
npm run start
```

此時沒問題的話，瀏覽器就會開啟 `http://localhost:3000` ，就可以看到實際的畫面了。

## 設定 docusaurus.config.js

需要在 `docusaurus.config.js` 內做對應的修改。

1. url: 改成 `https://<你的 GitHub name>.github.io`
2. baseUrl: 改成 `/<你的專案名稱>/`
3. organizationName: `<你的 GitHub name>`
4. projectName: 改成 `/<你的專案名稱>/`
5. deploymentBranch: 'gh-pages', 之後部署就會放在這個 branch 

以下為範例：

```js
//...
// Set the production url of your site here
url: 'https://a12345678.github.io',
// Set the /<baseUrl>/ pathname under which your site is served
// For GitHub pages deployment, it is often '/<projectName>/'
baseUrl: '/my-website/',

// GitHub pages deployment config.
// If you aren't using GitHub pages, you don't need these.
organizationName: 'a12345678', // Usually your GitHub org/user name.
projectName: 'my-website', // Usually your repo name.
deploymentBranch: 'gh-pages',
//...
```

## GitHub 創建帳號並將 Docusaurus 上傳至 GitHub repo

依照[官方文件](https://docs.github.com/en/get-started/quickstart/creating-an-account-on-github)建立你的帳號。

再依照[官方文件](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories)建立你要放 docusaurus 的 repository (簡稱 repo)。

在專案的根目錄位址，輸入以下指令：

```
echo "# my-website" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:a12345678/my-website.git
git push -u origin main
```

如此就把所有專案資料放上遠端 repo 了。

## GitHub Actions workflow 自動完成部署至 GitHub Pages

最後透過 [GitHub Actions](https://github.com/features/actions) 將專案部署至 `gh-pages` branch。

直接使用官網提供的 [GitHub Action workflow files](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions):

```yml title=".github/workflows/deploy.yml"
name: Deploy to GitHub Pages

on:
  workflow_dispatch:
  push:
    branches:
      - main
    # Review gh actions docs if you want to further define triggers, paths, etc
    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

permissions:
  contents: write

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm ci
      - name: Build website
        run: npm run build

      # Popular action to deploy to GitHub Pages:
      # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          # Build output to publish to the `gh-pages` branch:
          publish_dir: ./build
          # The following lines assign commit authorship to the official
          # GH-Actions bot for deploys to `gh-pages` branch:
          # https://github.com/actions/checkout/issues/13#issuecomment-724415212
          # The GH actions bot is used by default if you didn't specify the two fields.
          # You can swap them out with your own user credentials.
          user_name: github-actions[bot]
          user_email: 41898282+github-actions[bot]@users.noreply.github.com
```

```yml title=".github/workflows/test-deploy.yml"
name: Test deployment

on:
  workflow_dispatch:
  pull_request:
    branches:
      - main
    # Review gh actions docs if you want to further define triggers, paths, etc
    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

jobs:
  test-deploy:
    name: Test deployment
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm

      - name: Install dependencies
        run: npm ci
      - name: Test build website
        run: npm run build
```

加入這兩個檔案並 push 到 remote 後，GitHub 就會自動執行部署流程了。

待 GitHub Action 執行完後，就完成部署了，恭喜！！