import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import CardActions from '@material-ui/core/CardActions';

import Func  from './Func';
import Output from './Output';

// スタイルが効いていない?
const useStyles = withStyles({
    root: {
      minWidth: 275,
      maxWidth: "60%",
    },
    input: {
      width: '500px',
    },
})
        
// コンポーネントクラスは constructor() render()
class Form extends Component {
    classes = useStyles;

    constructor(props){
        super(props)
        this.state = {
            input: '',
            result: '',
            namedFlg: false,
        }
        this.updateInput = this.updateInput.bind(this)
        this.changeFlg = this.changeFlg.bind(this)
        this.yu_bah_bah = this.yu_bah_bah.bind(this)
        this.isInput = this.isInput.bind(this)
        this.selectOne = this.selectOne.bind(this)
    }

    updateInput(e){
        let myName = e.target.value
        this.setState({input:myName})
    }

    changeFlg(){
        this.setState({namedFlg: !this.namedFlg})
    }
    

    // ”湯婆婆”処理の本体
    yu_bah_bah(){
        if(!this.isInput()){
            this.setState({result:'名前を書きな！'})
            return;            
        }
        const yourName = this.selectOne()       
        this.setState({result: '「お前の名前は ' + yourName + '！！！」' })
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
        const kanjiAry = ary.filter(ele => Func.isKanji(ele))
        const numKanji = kanjiAry.length
        
        // 漢字が含まれない場合の処理
        if(numKanji < 1){
            return "作れないよ";
        }
        // どの要素を選ぶかはランダム
        const target = Math.floor(Math.random() * numKanji)

        return '"' + kanjiAry[target] + '" だ'
    }

    // 入力文字列を１文字ずつ要素に入れて配列化
    toArray(str){
        return str.split('')
    }

    render(){
        return <div>
            <Card 
            className={this.classes.root}
            variant="outlined">
                <CardContent>
                    <Typography variant="h3" component="p">
                    油屋
                    </Typography>

                    <TextField
                    label="ここに名前を入力しな！"
                    id="mui-theme-provider-standard-input"
                    onChange={this.updateInput}
                    />

                </CardContent>
                {/* <CardActions> */}
                    <Button 
                    onClick={this.yu_bah_bah}
                    // style="marginLeft:500px"
                    style={{ marginLeft: "auto", marginRight:"auto" }}
                    size="large"
                    color="secondary"
                    variant="contained"
                    >
                        湯婆婆
                    </Button>
                {/* </CardActions> */}
            </Card>

            {/* <p>{this.state.namedFlg ? "true": "false"}</p> */}
            
            
            {/* もっとすっきりした書き方がありそうだが、実装まで至らず */}
            <Output input={this.state.input} result={this.state.result} flg={this.state.namedFlg} />
        </div>  
    }   
}

export default Form