import React, { Component } from 'react';
import  Func  from './Func';


// コンポーネントクラスは constructor() render()
class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: '',
            result: ''
        }

        this.updateInput = this.updateInput.bind(this)
        this.yu_bah_bah = this.yu_bah_bah.bind(this)
        this.isInput = this.isInput.bind(this)
    }

    updateInput(e){
        let myName = e.target.value
        this.setState({input:myName})
    }

    // ”湯婆婆”処理の本体
    yu_bah_bah(){
        if(!this.isInput()){
            this.setState({result:'名無しさん！'})
            return;            
        }
        const yourName = this.selectOne()
        this.setState({result: yourName })
        this.render()
    }
    
    // フォームに入力があるか？
    isInput(){
        if(this.state.input === ''){
            return false;
        }else{
            return true;
        }
    }

    // 入力から漢字を1文字選ぶ
    selectOne(){
        var ary = this.toArray(this.state.input)
        // aryの要素 = toArray()メソッドを通すと、下記の通りになる
        // Unicode5ケタの場合：unicode表記（ex. "\ud87e"）
        //        4ケタの場合：実際の文字（ex. "山"）

        // aryから漢字の要素だけを選び出す
        const kanjiAry = ary.filter(ele => {              
            return Func.isKanji(ele) 
        })
        const numKanji = kanjiAry.length

        // 漢字が含まれない場合の処理
        if(numKanji < 1){
            this.setState({result: '名前が作れないよ' })
            console.log("漢字なし")
            return;
        }

        // どの要素を選ぶかはランダム
        const target = Math.floor(Math.random() * numKanji)

        return kanjiAry[target]
    }

    // 入力文字列を１文字ずつ要素に入れて配列化
    toArray(str){
        return str.split('')
    }

    render(){
        return <div>
            <label htmlFor="name">your name</label>
            <br />

            <input type="text" name="name" id="myName" onChange={this.updateInput} />
            <br />
            <button onClick={this.yu_bah_bah}>湯婆婆</button>

            <p>input: {this.state.input}</p>
            <p>result: {this.state.result}</p>


        </div>  
    }   
}

export default Form