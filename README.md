# Next.js MUI Template

Next.js (App Router) + React + TypeScript + MUI (Material UI) の GitHub Codespaces 用テンプレート。ESLint / Prettier 設定済み。フォーム・データグリッド・認証など業務系アプリ向けの構成。

## 使い方

1. このリポジトリで **Code → Codespaces → Create codespace on main** を選択
2. コンテナ作成後、`postCreateCommand` で自動的に `npm install` が実行される
3. ターミナルで開発サーバーを起動

   ```bash
   npm run dev
   ```

4. ポート 3000 が自動でフォワードされ、プレビューが開く

## スクリプト

| コマンド               | 内容                                |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | 開発サーバー起動                    |
| `npm run build`        | 本番ビルド                          |
| `npm run start`        | 本番サーバー起動                    |
| `npm run lint`         | ESLint チェック                     |
| `npm run lint:fix`     | ESLint 自動修正                     |
| `npm run format`       | Prettier で全ファイル整形           |
| `npm run format:check` | Prettier 整形チェックのみ（CI向け） |
| `npm run typecheck`    | TypeScript の型チェックのみ実行     |

## 構成

- **Next.js 15**（App Router）/ **React 19** / **TypeScript**
- **MUI v7**（`@mui/material` + `@mui/icons-material` + `@mui/x-date-pickers`）
  - `app/ThemeRegistry.tsx` で `@mui/material-nextjs` の `AppRouterCacheProvider` を使い、App Routerでのemotion SSR/スタイル注入順序を正しく処理
  - `app/theme.ts` にテーマ定義（`createTheme`）
- **フォーム**: `react-hook-form` + `@hookform/resolvers`
- **データグリッド**: `ag-grid-community` / `ag-grid-react`
- **認証**: `next-auth`（v5 beta）
- **その他**: `axios`（HTTP）、`chart.js`（グラフ）、`luxon`（日付）、`class-transformer` / `ajv`系（データ変換・バリデーション）、`dompurify`（サニタイズ）、`localforage`（クライアント永続化）
- **ESLint 9**（Flat Config, `eslint.config.mjs`）+ `eslint-config-next` + `eslint-config-prettier`
- **Prettier**（Tailwind非使用のため`prettier-plugin-tailwindcss`は含まない）
- **.devcontainer**: VS Code拡張（ESLint / Prettier等）を自動インストールし、保存時フォーマット・保存時ESLint自動修正を有効化済み

## カスタマイズ

- テーマ（色・タイポグラフィ等）: `app/theme.ts`
- next-authの設定は用途に応じて `app/api/auth/[...nextauth]/route.ts` 等を追加してください（このテンプレートには含まれていません）
- ESLintのルール調整: `eslint.config.mjs`
- Prettierのスタイル調整: `.prettierrc.json`
