import React from 'react';
import '../Responsive.css';

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDone: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    // handleClick(event) {
    //     const checked = event.target.checked;

    //     this.setState({
    //         isDone: checked
    //     });
    // }

    handleClick(event) {
        this.setState({isDone: !this.state.isDone})
        // this.setState({isDone: true});
    }

    render() {
        return(
            <div className="task">
                <li className="individualToDo" id={this.state.isDone ? 'done' : 'notCompleted' }>{this.props.task.specificTask}</li>
                <h4 className="individualToDoDescription" id={this.state.isDone ? 'done' : 'notCompleted' }>Description: {this.props.task.description}</h4>
                <h4 className="individualToDoStatus" id={this.state.isDone ? 'done' : 'notCompleted' }>Status: {this.props.task.status}</h4>
                {/* <label className="statusLabel">Status:</label>
                <button>{this.props.task.status}</button>
                <button value="pending" name="pending" onClick={this.onChangeHandler}>pending</button>
                <button value="completed" name="completed" onClick={this.onChangeHandler}>completed</button> */}
                {/* <select>
                    <option value="blank" name="blank">{this.props.task.status}</option>
                    <option value="pending" name="pending" onClick={this.onChangeHandler}>pending</option>
                    <option value="completed" name="completed" onClick={this.onChangeHandler}>completed</option>
                </select> */}
                <button className={this.state.isDone ? "notCompleted" : "completedButton"} onClick={this.handleClick}> 
                    {this.state.isDone == true ? "Undo" : "Completed"}
                </button>
            </div>
        );
    }
}

export default ToDoItem;