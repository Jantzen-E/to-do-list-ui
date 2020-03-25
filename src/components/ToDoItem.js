import React from 'react';

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return(
            <div className="task">
                <li className="individualToDo">{this.props.task.specificTask}</li>
                <h4 className="individualToDoDescription">Description: {this.props.task.description}</h4>
                <h4 className="individualToDoStatus">Status:{this.props.task.status}</h4>
                {/* <label className="statusLabel">Status:</label>
                <button>{this.props.task.status}</button>
                <button value="pending" name="pending" onClick={this.onChangeHandler}>pending</button>
                <button value="completed" name="completed" onClick={this.onChangeHandler}>completed</button> */}
                {/* <select>
                    <option value="blank" name="blank">{this.props.task.status}</option>
                    <option value="pending" name="pending" onClick={this.onChangeHandler}>pending</option>
                    <option value="completed" name="completed" onClick={this.onChangeHandler}>completed</option>
                </select> */}
            </div>
        );
    }
}

export default ToDoItem;