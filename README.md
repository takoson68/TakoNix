# 🐙 TakoNix Platform

## 前言
- 在結束上一份工作後，積累了一些想法，想自己整理一個簡單可用的工作平台，希望能簡單生成新專案的底層架構。
- 這是一個以CDN主軸的靜態前端開發架構，因為市面上太多完整又好用的開發專案，但是很少有為單純CDN方式做的架構（因為好像也沒啥必要），所以發起我想做這專案的興趣。
- 更快的生成一個具有基礎系統所需的簡便功能，使用 **vue2-3,pug,sass,stylus**(打包時sass會有縮排問題)
- 感覺寫這個比寫實際架構麻煩，寫寫停停，不知道啥時能寫完～
---

**TakoNix** 是一個前端開發基底，專注於 **容器模式 (store system)**、**模組化結構** 與 **多專案管理**。  
透過統一的目錄結構與腳本，你可以快速建立專案、生成元件，並保持所有專案共享核心模組。

---

## ✨ 功能特色
- 🟢 **容器模式**：統一的 store 工廠與工具，可跨專案共享  
- 🏗 **模板系統**：專案與元件都有固定模板，快速 scaffold  
- 📦 **多專案管理**：每個專案獨立 package.json 與打包設定  
- 🔌 **可擴展**：支援 Rollup / Vite，未來可對接 React / Vue / Vanilla JS  
- ⚡ **工作區整合**：建議使用 pnpm workspace 管理依賴  

---

## 📂 目錄結構

```bash
my-platform/
│
├─ core/                            # 平台核心模組 (共用)
│  ├─ templates/                    # 專案 / 元件模板
│  │  ├─ project-template/
│  │  └─ component-template/
│  ├─ container/                    # 容器模式基礎
│  │  ├─ index.js
│  │  ├─ store.js
│  │  └─ utils.js
│  ├─ package.json                  # 核心模組 package
│  └─ README.md
│
├─ projects/                        # 各專案 (獨立開發)
│  ├─ shop-app/                     # 範例：電商專案
│  │  ├─ src/
│  │  │  ├─ main.js
│  │  │  └─ App.vue
│  │  ├─ public/
│  │  ├─ scripts/
│  │  │  ├─ new-component.js
│  │  │  └─ utils/file.js
│  │  ├─ rollup.config.js
│  │  ├─ package.json
│  │  └─ dist/                      # 打包輸出
│  └─ blog-app/                     # 範例：部落格專案
│  │  ├─ src/
│  │  ├─ public/
│  │  ├─ scripts/
│  │  ├─ rollup.config.js
│  │  ├─ package.json
│  │  └─ dist/
│
├─ main-scripts/                    # 平台管理腳本
│  ├─ new-project.js                # 建立新專案
│  └─ utils/fs-helpers.js
│
├─ package.json                     # 平台總管理檔
├─ pnpm-workspace.yaml              # Workspace 管理檔
└─ README.md                        # 平台說明
