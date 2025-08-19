#!/usr/bin/env node
/**
 * new-project.js
 * CommonJS 版，透過 CLI 參數生成新專案或頁面
 */

const fs = require('fs')
const path = require('path')
const process = require('process')

// 讀取命令列參數
const rawName = process.argv[2]

if (!rawName) {
  console.error('❌ 請輸入頁面名稱，例如：about')
  process.exit(1)
}

const projectName = rawName.trim()
if (!projectName.match(/^[a-zA-Z0-9-_]+$/)) {
  console.error('❌ 專案名稱只能包含英文、數字、- 或 _')
  process.exit(1)
}

const templateDir = path.join(__dirname, '../core/templates')
const targetDir = path.join(__dirname, `../projects/${projectName}`)

// 檢查目標資料夾是否存在
// if (fs.existsSync(targetDir)) {
//   console.error(`❌ 專案 ${projectName} 已存在`)
//   process.exit(1)
// }


// 遞迴複製資料夾
function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true })

  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item)
    const destPath = path.join(dest, item)
    const stat = fs.statSync(srcPath)

    if (stat.isDirectory()) {
      copyRecursive(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

// 執行複製
copyRecursive(templateDir, targetDir)

// 修改 package.json
const pkgPath = path.join(targetDir, 'package.json')
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
  pkg.name = projectName
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
}

console.log(`✅ 已建立新專案: projects/${projectName}`)
