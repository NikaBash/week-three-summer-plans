import { Component } from "react";
import imageTwo from './checklist.png';

export class Plans extends Component {
    state = {
    userInput: "",
    plans: []
    }

    onChangeEvent(e) {
        this.setState({userInput:e})
    }

    addItem(input) {
        if(input === "") {
        alert("Plase enter an item")
        } else {
            let listArray = this.state.plans;
            listArray.push(input);
            this.setState({plans: listArray, userInput: ''})
        }
    }

    deleteItem() {
        let ListArray = this.state.plans;
        ListArray = [];
        this.setState({plans: ListArray})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" 
                placeholder="What are your plans for the summer?" 
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value = {this.setState.userInput} />
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>
            <ul>
                {this.state.plans.map((item, index) => (
                    <li key={ index } onClick={this.crossedWord}> <img src={ imageTwo } alt="list" width="40px" />{ item }</li>
                ))}
            </ul>
            <div className="container">
                <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
            </div>
            </form>
            </div>
        )
    }
}