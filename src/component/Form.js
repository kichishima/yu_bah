import React, { Component } from 'react';

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
            return this.isKanji(ele) 
        })
        const numKanji = kanjiAry.length
        // どの要素を選ぶかはランダム
        const target = Math.floor(Math.random() * numKanji)

        return kanjiAry[target]
    }

    // 入力文字列を１文字ずつ要素に入れて配列化
    toArray(str){
        return str.split('')
    }

    // 漢字か？（漢字として判別される文字はApp.jsのメモ参照）
    isKanji(char){
        const charCode = char.codePointAt(0)　// eleのUnicode(10進数)
        // eleがUnicode5ケタの場合：char = "\ud87e"であっても、対応する10進数に変換して返す 
        
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