import React, {Component} from 'react';
// import store from '../../ConfigureStore';
import {connect} from 'react-redux';
class HelloWorld extends Component{
    render(){
        const {tech} = this.props;
        const actionCreatorsFunc = (text) => {
              return {
                  type: "SET_TECHNOLOGY",
                  text: text
              }
        }
       const dispatchBtnAction= (e) =>{
             const tech = e.target.value;
            // store.dispatch(actionCreatorsFunc(tech)); OR 
            this.props.dispatch(actionCreatorsFunc(tech))
        }
    return <div>
        <h1>Hello World {tech}</h1>
        <button onClick={dispatchBtnAction} value="Redux">Redux</button>
        <button onClick={dispatchBtnAction} value="React-Redux">React-Redux</button>
        </div>
    }
}
const mapStateToProps = (state) => {
     return state
}
export default connect(mapStateToProps)(HelloWorld)