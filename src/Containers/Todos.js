import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
export default class Todos extends Component {
    state={
        toDosList :[],
        isLoading : false,
        error: null,
    }
    componentDidMount(){
        this.fetchPost();
    }

    fetchPost=()=>{
        this.state.isLoading = true
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response=>  response.json())
        .then(data => this.setState({
            toDosList: data,
            isLoading: false,
        }))
        .catch(error => this.setState({ isLoading: false,error } ,console.log("consoling error",error))
        )
    }
    render() {
        const {toDosList} = this.state
        return (
            <CssBaseline> 
                <Container>
                <Typography component="div">
                {this.state.isLoading ?  ( <h1>Loading</h1> ) : (
                toDosList.map((val, ind)=>{
                    return(
                         <LazyLoad  height={9} offset={[-110, 0]}>

                            <div key={ind}>{val.title}</div> 
                         </LazyLoad>
                        ) 
                })
                )}
                </Typography>
               </Container> 
            </CssBaseline>
        )
    }
}

