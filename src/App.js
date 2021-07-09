import './App.css';
import Form from './component/Form'
// import BtnSubmit from './component/BtnSubmit'

function App() {
  return (
    <div className="App">
      <Form />
      {/* <BtnSubmit /> */}
    </div>
  );
}
export default App;

// 処理プロセス
// １、入力があるか ？ 
// - なし　＝＞　「名無し（入力をしてください）」　＆　処理ストップ
// - あり　＝＞　次の処理へ
// ２、漢字はあるか？
// 入力文字を１文字に分けて、配列へ
// 1文字ずつ、漢字かどうか調べる
// - 1個以上あり　＝＞　新しい配列へ入れる
// - 0個　＝＞　「名前が作れないよ（漢字を入力してください）」
// ３、漢字だけが入っている配列からランダムに１要素を選ぶ
// ４、選んだ漢字を表示
