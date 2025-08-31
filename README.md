# TakoNix 🐙  
**輕量化 CDN 靜態前端專案生成器**  

## 📖 專案介紹  
TakoNix 是一個以 **CDN 為核心** 的靜態前端開發架構。  
它能幫助你 **快速生成新專案的骨架**，適合需要輕量級、無需後端伺服器的前端專案，例如活動頁、Landing Page、簡易 SPA。  

市面上已有許多完整框架（如 Vite、Vue CLI、Nuxt），但大多數都偏向 **打包工具 + NPM 生態**。  
TakoNix 則專注於 **純 CDN 引入的場景**，提供最基本卻實用的前端開發基礎。  

---

**TakoNix** 是一個前端開發基底，專注於以下幾個核心概念：
- **容器模式 (store system)**：簡潔且統一的資料管理方式
- **模組化結構**：清楚劃分專案與元件的邏輯邊界
- **多專案管理**：在同一平台中快速建立並管理多個獨立專案

透過統一的目錄結構與腳本，你可以快速 scaffold 新專案、生成元件，並維持整體架構的一致性與可維護性。

---

## ✨ 功能特色
- 🟢 **容器模式**：統一的 store 工廠與工具，方便在專案中維護狀態
- 🏗 **模板系統**：專案與元件皆有固定模板，支援快速 scaffold  
- 📦 **多專案管理**：每個專案擁有獨立的 `package.json` 與打包設定  
- 🔌 **可擴展**：目前支援 Rollup / Vite，未來可加入 React / Vue / Vanilla JS 模板
- ⚡ **工作區整合**：建議使用 pnpm workspace 管理依賴（亦可使用 npm / yarn 視需求而定）

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
