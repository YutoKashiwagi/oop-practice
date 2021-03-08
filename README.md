# oop-practice
オブジェクト指向プログラミングの練習用

[参考: オブジェクト指向設計実践ガイド](https://www.amazon.co.jp/%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E8%A8%AD%E8%A8%88%E5%AE%9F%E8%B7%B5%E3%82%AC%E3%82%A4%E3%83%89-Ruby%E3%81%A7%E3%82%8F%E3%81%8B%E3%82%8B-%E9%80%B2%E5%8C%96%E3%81%97%E3%81%A4%E3%81%A5%E3%81%91%E3%82%8B%E6%9F%94%E8%BB%9F%E3%81%AA%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E8%82%B2%E3%81%A6%E6%96%B9-Sandi-Metz/dp/477418361X/ref=sr_1_1?adgrpid=106986913322&dchild=1&gclid=Cj0KCQiAst2BBhDJARIsAGo2ldWSOcL0QKe1gHtxRoPWy_sYEYUVOEmSci8CE9oBIHdP8RzOLTGEuR0aAmEjEALw_wcB&hvadid=451939247025&hvdev=c&hvlocphy=1009717&hvnetw=g&hvqmt=e&hvrand=7354510994248029259&hvtargid=kwd-536214242527&hydadcr=27266_11561146&jp-ad-ap=0&keywords=%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91%E5%AE%9F%E8%B7%B5%E3%82%AC%E3%82%A4%E3%83%89&qid=1614320692&sr=8-1)

## メモ

### 単一責任

- クラスを一文で説明できるか？
  - できなければ、責務を持ちすぎている可能性が高い
  - 「それと」「または」は危険信号

- インスタンス変数は直接参照しない

- 単一責任のリファクタリングは最終的な設計がわかってない段階でもやるべき
  - むしろ、わかってないからこそやるべき

- コードにコメントが必要なら、そのコードを別のメソッドに抽出する合図

### 依存関係

- 依存関係のサイン: オブジェクトが以下のものを知っている
  - 他クラスの名前
    - 他クラスへの依存は隠さない。いつでも取り出せるようにわかりやすくしておく
  - self以外へのメッセージ
  - メッセージが要求する引数
    - その順番

- テストはコードに依存する
  - テストコードがコードに過度に依存しすぎていると、リファクタの度にテストが壊れる

- 依存性注入
  - [ダックタイピングで依存性注入サンプル](https://github.com/YutoKashiwagi/oop-practice/commit/6934b577977ba87a7155f109373ad456335f3122)

- 依存の方向
  - より変更の少ない方へ依存させる
  - 具体→抽象

### インターフェース

- ドメインオブジェクト
  - データと振る舞いを兼ね備えた名詞
  - オブジェクトではなく、オブジェクト間で交わされるメッセージに目を向ける

- シーケンス図
  - ドメインオブジェクトの関係を示すのに役立つ
  - オブジェクト間のメッセージが適切かどうか判断するのに役立つ
  - 検証するためのもので、破棄するもの。破棄されるという性質もシーケンス図の機能の一部

- クラスではなく、メッセージに基づく設計にする
  - メッセージを送るためにオブジェクトは存在する

- コンテキストは単純にしておく
  - 複雑なコンテキストを持つオブジェクトは再利用性が低く、テストもしづらい
