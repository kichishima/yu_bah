// グローバル関数

const Func = {
    // 漢字か？（漢字として判別される文字はApp.jsのメモ参照）
    isKanji : (char) => {
        const charCode = char.codePointAt(0)　// eleのUnicode(10進数)
        // ＊eleがUnicode5ケタの場合：char = "\ud87e"であっても、対応する10進数に変換して返す 
        
        let result = true
        if(0x3005 <= charCode && charCode <= 0x3007){}
        else if(0x3400 <= charCode && charCode <= 0x4DB5){}
        else if(0xF900 <= charCode && charCode <= 0xFAFF){}
        else if(0x4E00 <= charCode && charCode <= 0x9FFC){}
        else if(0x20000 <= charCode && charCode <= 0x2A6DD){}
        else if(0x2A700 <= charCode && charCode <= 0x2B734){}
        else if(0x2B740 <= charCode && charCode <= 0x2B81D){}
        else if(0x2B820 <= charCode && charCode <= 0x2CEA1){}
        else if(0x2CEB0 <= charCode && charCode <= 0x2EBE0){}
        else if(0x2F800 <= charCode && charCode <= 0x2FA1F){}
        else if(0x30000 <= charCode && charCode <= 0x3134A){}
        else {
            // 漢字のUnicodeに合致しない場合は、false
            result = false
        }
        return result  
    }
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
    
    // ＊isKanjiメソッドで区別できる漢字　＝　上記unicode範囲の4ケタの漢字
    // 　5ケタの漢字は、codePointAt(), charCodeAt()を通すと、２種類のunicodeに分けて変換される為、そこからの再変換方法はとりあえず模索しないこととした。
    // 　ex. 2F85c => D87E(55422)+DC5C(56412) 
    // 　テスト結果（各範囲から３文字を無作為に抽出して漢字と判断されるか?）：
    // 　　Unicode4ケタ：true
    // 　　Unicode5ケタ：false

    // ＊備考：
    // - 日本語の漢字のUnicode範囲を示した公式のようなものは見当たらず
    // 　 個人ではまとめている人もいる：https://tama-san.com/kanji-regex/
    // - 正規表現：unicodeスクリプト \p{Han}　で検索できる言語もあるらしい（JSできず）



}

export default Func



