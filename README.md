# 🐙 TakoNix Platform

**TakoNix** 是一個前端開發平台基底，專注於 **容器模式 (store system)**、**模組化結構** 與 **多專案管理**。  
透過統一的目錄結構與腳本，你可以快速建立專案、生成元件，並保持所有專案共享核心模組。

---

## ✨ 功能特色
- 🟢 **容器模式**：統一的 store 工廠與工具，跨專案共享  
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
