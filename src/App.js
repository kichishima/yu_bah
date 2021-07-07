import './App.css';
// import Hoge from './component/Hoge'
import Form from './component/Form'
// import BtnSubmit from './component/BtnSubmit'

function App() {
  return (
    <div className="App">
      {/* <Hoge /> */}
      <Form />
      {/* <BtnSubmit /> */}
    </div>
  );
}

// 入力フォーム　input:text
// 入力があるか ？ 
// - 「入力をしてください」
// - 次のステップへ

// １、
// 入力に漢字が含まれているか？ ：どう判別するか
// - 「漢字を含んでください」
// - 次のステップへ
// 漢字はいくつあるか
// - 1
// - 2以上
  //　2以上の場合、どの漢字を抜き出すか


// ２、
// 入力文字を１文字ずつ配列へ
// 漢字の条件に当てはまる要素を取り出す　＝＞新しい配列
// 新しい配列の文字数（要素数）をチェック
// ０〜要素数　の間でランダム関数（n）
// array[n] の１文字を取り出す


        // 漢字のUnicode範囲の特定が困難（数が多い、番号が飛んでいる、中国語も混じっているっぽい）
        // 　正規表現：unicodeスクリプト \p{Han}　で検索できる言語もあるらしい（JSできず）
        // 　公式のようなものは見当たらず
        // 　個人ではまとめている人もいる：https://tama-san.com/kanji-regex/
        // ＝＞　３バイト以上　＆＆　平仮名・カタカナ以外　の条件
        // ＝＞　全角記号・アルファベットもあるので　ダメ！
        
        // ＝＞　unicode範囲の指定　＊範囲は以下参照



// 選んだ漢字を表示


export default App;

// ＊漢字のunicode範囲　(hex)
// 参考：　unicode　http://www.asahi-net.or.jp/~ax2s-kmtn/ref/unicode/index_u.html
// 　　　　東アジア　http://www.asahi-net.or.jp/~ax2s-kmtn/ref/unicode/e_asia.html
// ===　４ケタ
// 3005	々	IDEOGRAPHIC ITERATION MARK	→206A4(𠚤) →16FE0(𖿠)		繰返し記号
// 3006	〆	IDEOGRAPHIC CLOSING MARK	→4E44(乄)		しめ
// 3007	〇	IDEOGRAPHIC NUMBER ZERO	→20DD(◌⃝) →25CB(○) →25EF(◯)		漢数字ゼロ（レイ）
// ===　以下も漢字。ただし、ブラウザ画面に表示されていない文字もある（多数）ので、日本語で使用されていない漢字も含まれた範囲と思われる。
// F900 ~ FAFF CJK互換漢字
// 4E00～9FFC　CJK Unified Ideographs	CJK統合漢字
// 3400～4DB5　	CJK Unified Ideographs Extension A	CJK統合漢字拡張A
// ===　5ケタ
// 20000～2A6DD	CJK Unified Ideographs Extension B	CJK統合漢字拡張B	漢字
// 2A700～2B734	CJK Unified Ideographs Extension C	CJK統合漢字拡張C	
// 2B740～2B81D	CJK Unified Ideographs Extension D	CJK統合漢字拡張D	
// 2B820～2CEA1	CJK Unified Ideographs Extension E	CJK統合漢字拡張E	
// 2CEB0～2EBE0	CJK Unified Ideographs Extension F	CJK統合漢字拡張F	
// 2F800～2FA1F	CJK Compatibility Ideographs Supplement	CJK互換漢字補助
// ===　以下はブラウザ画面に文字が表示されないが、今後追加になるかもしれないので範囲に含める
// 30000～3134A	CJK Unified Ideographs Extension G	CJK統合漢字拡張G

// codePointAt(), charCodeAt()
// 2F85c => D87E(55422)+DC5C(56412) に変換される

// テスト結果（各範囲から３文字を無作為に抽出して漢字と判断されるか?）：
// Unicode4ケタ：true
// Unicode5ケタ：false

// ＝＞　５ケタは漢字として扱われない仕様
