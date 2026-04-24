# 永興鐵器裝修工程 — 公司介紹網站

以 **React + TypeScript + Vite** 製作的靜態公司介紹網站，包含：
- 公司資料（電話 / WhatsApp / 電郵 / 地址）
- 地圖嵌入（公司 + 貨倉）
- 精選工程相片輪播（可點擊進入詳情頁）
- 工程相片列表 + 詳情頁（描述 / 標籤）

## 開發

### 1) Node 版本
建議使用 **Node 22 LTS**。如果你有 `nvm`：

```bash
nvm install 22
nvm use 22
```

### 2) 安裝與啟動

```bash
npm install
npm run dev
```

### 3) Build

```bash
npm run build
npm run preview
```

## GitHub Pages 部署（Development）

本專案已包含 GitHub Actions workflow：`.github/workflows/deploy.yml`。\n
在 GitHub repo 設定：\n
- Settings → Pages\n
- Source 選擇 **GitHub Actions**\n
\n
之後只要 push 到 `main`，就會自動 build 並部署到 GitHub Pages。\n
\n
注意：Vite `base` 已設定為 `./`，以確保在 GitHub Pages 的子路徑下資源可以正常載入。
