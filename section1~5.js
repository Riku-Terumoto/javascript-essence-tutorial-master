// JavaScriptとECMAScript(エクマスクリプト)
// JavaScriptが出来た経緯
// 1990年代（インターネット黎明期）にブラウザNetscape Navigatorが考え出したのがJavaScript、その後に出てきたいのはMicrosoft社が開発したInternet ExploreはJavaScriptを使いたかったがライセンスの影響で使えなかったので、新たに考え出したのがJScriptである
// 二つのプログラミング言語には互換性がなかった為、そこで考え出されたのがECMASciptである
// JavaScript言語のコアの部分を仕様策定したもの
// ECMASciptはJSのコアの部分の仕様と思ってもらってよい
// この仕様によってブラウザ間での使用を統一できるようになった
// JavaScriptはECMAScriptの使用を組み込んだプログラミング言語になる
// ただ、ECMAScriptを組み込んだプログラミング言語は今のところ、JS以外ない

// JSをブラウザ環境で使用する場合にECMAScriptの他にWebAPIsが使用できる
// JSでブラウザ機能を使用するAPIであり、例えば画面の更新にはDOMAPIが使われる

// JSをNoje.js環境で使用する場合はECMAScript以外にCommonJSというモジュールを管理するものが使える

// JavaScriptは実行する環境で使えるものが変わってくるということ

// ECMAScriptのES
// 通称・・・年・・・バージョン
// ES5・・・2009・・・5版
// ES6(ES2015)・・・2015・・・5版
// ES7(ES2016)・・・2016・・・6版
// ES8(ES2017)・・・2017・・・7版
// ES9(ES2018)・・・2018・・・8版

// ECMAScriptは「Living Standard」という方法で更新されている
// これは機能ごとに使用を策定し、使用が決まったものから、最新版の仕様書に順次追加していく

// 実行環境
// ブラウザとJSエンジン
// ブラウザの機能は以下。
// UserInterface
// BrowserEnjine
// DataStorage
// RendaeringEnjine
// JavaScriptEnjinne・・・画面描写を司る、JavaScriptが実行される環境のことを指す、Chromの場合はV8と呼ばれる(オープンソース)
// ⇨JSエンジンの中でECMAScriptとWebAPIsが提供されている
// ⇨WebAPIsはDOM APIやFetch API、XHR API等が提供されている
// ⇨V8環境を組み込むことで様々な環境でJSが利用できる（バックエンドでV8を組み込んだのがnode.js）
// ⇨このことをUniversal JavaScriptと呼ぶ
// Networking
// UiBackend

// JSエンジン
// ブラウザごとにJSエンジンを持っている
// Chrom⇨V8
// Safari⇨JavaScriptCore
// Firefox⇨SpiderMonkey
// Edge⇨Chakra / V8
// Opera⇨V8

// まとめ
// JSはJSエンジンで実行される
// 一番シェアがあるJSエンジンはV8
// JSからWebAPIsを通してブラウザを操作する

//  JSエンジンで実行されるもの
// ・自分で書いたコード
// ・グローバルオブジェクト・・・Windowオブジェクトのことでもあり、その中にWebAPIsが含まれている
// ⇨JSエンジンによって生成されるコード内のどこからでもアクセスできるオブジェクト
// ・this・・・オブジェクトへの参照を意味する コンテキストというものによって取得できる値が変わってくる

// 上記はブラウザのコンソール画面でwindowまたはthisと入力すれば確認できる
// windowは様々なWebAPIsの機能が備わっていて、メソッド等を呼び出せる

// JS実行前はグローバルオブジェクトとthisが準備される
// ブラウザのグローバルオブジェクトはWindowオブジェクトとなる

// コンテキスト・・・文脈、前後関係（ぶん‐みゃく【文脈】 ... ① 文のすじみち。文章の流れの中にある意味内容の続きぐあい。）
// 実行コンテキスト・・・プログラミングでの意味、コードを実行する際の文脈・状況
// ⇨コードが実行されている時にどのような状況で実行されているのかという意味
// 三つの種類がある
// ・グローバルコンテキスト・・・実行中のコンテキスト内の変数、関数｜グローバルオブジェクト｜thisが使用可能
// ⇨HTMLで読み込んでいるJSファイル内の直下のコードがグローバルコンテキスト（関数とかに囲われていないもの）
// ・関数コンテキスト・・・実行中のコンテキスト内の変数、関数｜arguments｜super｜this｜外部変数(関数外で宣言された変数)が使用可能
// ⇨関数が実行された時に生み出されるのが関数コンテキスト（関数宣言内に書いたコードのこと）
// ・evalコンテキスト（いーばる）・・・非推奨の為、ほぼ使われない

// コールスタック・・・実行中のコードが辿ってきたコンテキストの積み重ね

// ホイスティング・・・コンテキスト内で宣言した変数や関数の定義をコード実行前にメモリーに配置すること（宣言の巻き上げとも言う）

// ブラウザによって（JSエンジンによって）挙動が変わることがある

// スコープ・・・実行中のコードから値と式が参照できる範囲
// ５種類のスコープが存在する
// グローバルスコープ
// スクリプトスコープ
// 関数スコープ
// ブロックスコープ
// モジュールスコープ

// レキシカルスコープ・・・コードを書く場所によって参照できる変数が変わるスコープのことを指す
// ⇨コードを記述した時点で決定するため『静的スコープ』とも言う
// ⇨実行中のコードから見た外部スコープのこと（これの意味がでかい）
// レキシカル・・・語彙の、辞書（編集）の、辞書的な。。。
// ⇨ITの意味だとプログラムの文脈ではソースコードのどこに何を書いているかと言う意味
//    なので、コードが記載されている場所がレキシカルとなる

// スコープチェーン・・・スコープが複数階層で、連なっている状態
// ⇨あるスコープが他のスコープを含んでいる状態

// クロージャー・・・レキシカルスコープの変数を関数が使用している状態
// ⇨関数がスコープチェーンとなっている場合、レキシカルスコープとなる外部スコープの変数を参照している関数のこと
// これを利用して「プライベート変数」の定義、「動的な関数」の生成ができる
// プライベート変数・・・関数の外部からアクセスできない変数
// 動的な変数・・・状況に応じて変化する関数

// 即時関数(IIFE)・・・関数定義と同時に一度だけ実行される関数
// 関数を丸括弧で囲って、処理を記述し、宣言の隣に丸括弧を用意して即時実行する
// 結果はresultに格納される
// let result = (function(仮引数) {
//   return 戻り値;
// })(実引数);
