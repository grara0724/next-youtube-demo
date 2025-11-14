# Nuxt3 学習メモ: プロジェクト作成

## 1. プロジェクト作成

npx nuxi init nuxt-youtube-demo : next プロジェクトの作成
npm install : package.json に書かれた依存パッケージをインストール

## 2. 開発環境設定

コードの品質と整形ルールを統一するためにESLint + Prettier + prettier-plugin-tailwindcss を導入する。

### Ⅰ. パッケージのインストール

```bash
$ npm install -D eslint prettier eslint-config-next eslint-config-prettier prettier-plugin-tailwindcss
```

### Ⅱ. .prettierrc の作成

```json
{
  "semi": true, //行末にセミコロン
  "singleQuote": false, //ダブルクウォートで統一
  "tabWidth": 2, //インデントの幅
  "trailingComma": "es5", //ES5で許可されている場所で末尾カンマをつける
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Ⅲ. .eslintrc.json の作成

```json
{
  // TypeScript の構文を理解させるためのパーサー指定
  "parser": "@typescript-eslint/parser",

  // コードが実行される環境を定義
  "env": {
    "browser": true, // ブラウザ上で動作するコード（window, document など）を許可
    "node": true, // Node.js のグローバル変数（process, __dirname など）を許可
    "es2021": true // 最新の ECMAScript 2021 構文を使えるようにする
  },

  // パーサーの追加設定
  "parserOptions": {
    "ecmaVersion": "latest", // 最新の ECMAScript 構文を解釈可能にする
    "sourceType": "module", // import / export 構文を使えるようにする
    "ecmaFeatures": {
      "jsx": true // JSX 構文をパース可能にする（React 用）
    }
  },

  // React のバージョンを自動検出（手動で指定する必要なし）
  "settings": {
    "react": {
      "version": "detect"
    }
  },

  // 複数の設定プリセット（ルールセット）をまとめて適用
  "extends": [
    "next/core-web-vitals", //  Next.js チーム提供の公式 ESLint 設定（パフォーマンス・アクセシビリティ・ベストプラクティスなど）
    "eslint:recommended", //  ESLint が公式に推奨する基本ルール群（構文エラー、未使用変数、危険なコードなど）
    "plugin:react/recommended", //  React 用の推奨ルールセット（JSX の構文ミスや props の扱いなど）
    "plugin:react-hooks/recommended", //  React Hooks 専用ルール（useEffect, useState, useCallback の正しい使い方を強制）
    "plugin:jsx-a11y/recommended", //  JSX アクセシビリティチェック（alt 属性、role、キーボード操作対応など）
    "prettier" //  Prettier と ESLint の競合を防ぐ（フォーマット系ルールを無効化）
  ],

  // 使用するプラグインを明示（extends や rules で利用）
  "plugins": [
    "@typescript-eslint", // TypeScript 用ルールセット（型に関するチェックなど）
    "react", // React 用の ESLint 拡張
    "react-hooks", // Hooks 用の ESLint 拡張
    "jsx-a11y" // JSX のアクセシビリティチェック用プラグイン
  ],

  // 独自に上書き・追加するルールを指定
  "rules": {
    "react/react-in-jsx-scope": "off", // Next.js では import React が不要なためオフ
    "react/no-unescaped-entities": "off", // JSX 内で ' や " を使うと警告が出るのを抑制
    "@typescript-eslint/explicit-module-boundary-types": "off" // 関数の戻り値型を省略可能に（利便性重視）
  }
}
```

### Ⅳ. VSCode の設定

.vscode/setting.jsonに以下を記述することでチームで同じ環境で開発できる。

```json
{
  // ファイル保存時に自動でフォーマットを実行する
  "editor.formatOnSave": true,

  // 使用するデフォルトフォーマッターを指定（Prettierを使用）
  // PrettierのVS Code拡張機能（esbenp.prettier-vscode）がインストールされている必要あり
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // ESLint が自動検証・修正を行う対象言語を指定
  // JavaScript / TypeScript / JSX / TSX ファイルを対象にする
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact"
  ],

  // 保存時に自動でESLintのルールに基づいた修正を適用
  // "source.fixAll" → すべての自動修正可能な問題を修正
  // "source.fixAll.eslint" → ESLint関連の問題を自動修正
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  }
}
```

## 3. next の初期ディレクトリおよびファイル説明

.next/ : ビルドや開発中に自動生成されるフォルダ。ビルド済みのページやアセットを保持。git 管理は不要。
app/ : App Router 用ディレクトリ。ページ(page.tsx), レイアウト(layout.tsx), API ルート(route.ts)
node_modules/ : プロジェクト依存パッケージを管理。git 管理は不要。
public/ : 静的ファイル用フォルダ。
next-env.d.ts : TypeScript 用の型定義補助ファイル。
next.config.ts : Next.js の設定ファイル。必要に応じてカスタマイズ。

## 4. Google Cloud で Oauth の設定

プロジェクトを作成し、左のバーから”APi とサービス”→”OAuth 同意画面”を選択し、必要な情報を入力する。
同じく左のバーから”APi とサービス”→”認証情報”を選択し、左上の認証情報を作成から、必要な設定を入力すれば clinet_id と clinet_secret が発行される。

## 5. supabase の導入

プロジェクトを作成し、Authentication→Sign In/Providers を選択し、Google の項目に必要な情報を入力する
