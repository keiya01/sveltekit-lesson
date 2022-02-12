# services

API の型定義は aspida を使って生成しています。

```sh
$ yarn api:build
```

そのため、`$api.ts`は手動で変更しません。

svelte は type import をつけないと、その値が type なのか値なのか区別できません。
しかし、[aspida はまだ type import に対応していない](https://github.com/aspida/aspida/issues/697)ため、手動で`$api.ts`を type import に書き換える必要があります。
