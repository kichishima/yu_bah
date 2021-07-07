import React, { Component } from 'react';

// コンポーネントクラスは constructor() render()
class BtnSubmit extends Component {
    constructor(props){
        super()
    }

    render(){
        return <div>
            <p>this is btn comp</p>
            <button type="submit">湯婆婆</button>
        </div>  
    }   
}

export default BtnSubmit