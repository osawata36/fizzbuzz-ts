# TDDの練習としてFizzBuzz問題をTypescriptでやってみる

参考にしたサイト：https://typescript-jp.gitbook.io/deep-dive/intro-1/jest

# ついでにリリースノート自動作成のデモも実装しています

- release-drafterというGitHub Actionを使用している
- デフォルトで、`.github/release-drafter.yml`というファイルを設定ファイルとして読み込んで動作します

## CI/CDの説明

以下の処理を実装しています

- テスト実行
- リリースノート自動作成

### テスト実行

`.github/workflows/ci.yml`  

mainブランチへの

### リリースノート自動作成


## リポジトリの設定

デフォルトブランチはdevelopブランチ。
mainブランチはプッシュ禁止。プルリク必須。

<img src="images/2022-01-18-17-24-52.png" border="1" width="60%">
