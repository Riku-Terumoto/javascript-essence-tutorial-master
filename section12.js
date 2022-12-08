// ブラウザ上で使用できる様々なオブジェクト

// Proxy・・・プロパティーの操作に独自の処理を追加するためのオブジェクト

// Reflect・・・JSエンジンの内部の汎用的な関数を呼び出すメソッドが格納されているオブジェクト
// JSエンジンは内部でのみ使用されるメソッドを保持している
// Reflectを使用してそのメソッドを間接的に呼び出すことができる

// 内部メソッド・・・[[Get]],[[Set]],[[Delete]],[[Construct]]
// Reflect・・・get,set,deleteProperty,construct
// Proxy・・・get,set,deleteProperty,construct
// →Proxyも同じようなメソッドをトラップとして用意できるため、Reflectと相性が良い

// Reflectを使用する目的
// ①内部メソッドを呼び出す関数の格納場所
// ②Proxyと合わせて使用するため

// WeakMap・・・弱い参照でオブジェクトを保持するコレクション
// →キーは必ずオブジェクトを設定しなければならない

// JSON
// JSON.parseを呼ぶとJSONからObjectを生成し、
// JSON.stringifyを呼ぶとObjectからJSONを生成する

// Storage・・・ブラウザの保存領域にデータを格納するためのオブジェクト
