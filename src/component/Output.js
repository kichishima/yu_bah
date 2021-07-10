import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    paper: {
        width:"500px", 
        height: "200px", 
        marginLeft:"auto",  
        marginRight:"auto", 
        paddingTop:"100px",
    }
}

// コンポーネントクラスは constructor() render()
class Output extends Component {
    constructor(props){
        super(props)
        this.classes = useStyles;
    }

    render(){
        return (
        <div className={this.classes.root}>
            <Paper 
            elevation={20}
            variant="outlined" 
            style={this.classes.paper}
            >   
            { this.props.input }
            </Paper>
            <Typography 
            variant="h5" 
            component="p"
            style={{marginTop:"70px"}}
            >
            { this.props.result}    
            </Typography>
        </div>
        );
    }   
}

export default Output;