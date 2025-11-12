# Nuxt3 学習メモ: プロジェクト作成

## 1. プロジェクト作成

npx nuxi init nuxt-youtube-demo : next プロジェクトの作成
npm install : package.json に書かれた依存パッケージをインストール

## 2. next の初期ディレクトリおよびファイル説明

.next/ : ビルドや開発中に自動生成されるフォルダ。ビルド済みのページやアセットを保持。git 管理は不要。
app/ : App Router 用ディレクトリ。ページ(page.tsx), レイアウト(layout.tsx), API ルート(route.ts)
node_modules/ : プロジェクト依存パッケージを管理。git 管理は不要。
public/ : 静的ファイル用フォルダ。
next-env.d.ts : TypeScript 用の型定義補助ファイル。
next.config.ts : Next.js の設定ファイル。必要に応じてカスタマイズ。

## 3. Google Cloud で Oauth の設定

プロジェクトを作成し、左のバーから”APi とサービス”→”OAuth 同意画面”を選択し、必要な情報を入力する。
同じく左のバーから”APi とサービス”→”認証情報”を選択し、左上の認証情報を作成から、必要な設定を入力すれば clinet_id と clinet_secret が発行される。

## . supabase の導入

プロジェクトを作成し、Authentication→Sign In/Providers を選択し、Google の項目に必要な情報を入力する
