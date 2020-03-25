import React from 'react';
import '../index.css';
import { uriBase, api } from '../consts'

class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            specificTask: "",
            description: "",
            status: ""
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const task = {
            listID: this.props.listID,
            specificTask: this.state.specificTask,
            description: this.state.description,
            status: this.state.status
        };

        fetch(`${uriBase}${api}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(task)
        })
        .then(result => {
            if (!result.ok) {
                throw new Error('failed to create a task')
            }
            else {
                return result.json()
            }
        })
        .then(newTask => {

            this.setState({
                specificTask: "",
                description: "",
                status: ""
              });
              this.props.refresh()
        })
        .catch(error => {
            console.log(error)
        })
        
        // e.target.reset(); //this resets the form back to the original value
    }

    onChangeHandler(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className="addSingleItem">Add a task to this list</label>
                    <input 
                        type="text" 
                        className="itemInput"
                        value={this.state.specificTask}
                        required
                        onChange={this.onChangeHandler}
                        name='specificTask'
                    />
                    <label>Status: </label>
                    <input
                        type="text"
                        value={this.state.status}
                        required
                        className="taskStatus"
                        onChange={this.onChangeHandler}
                        name='status'
                    >
                    </input>
                    <label>Description: </label>
                    <input
                        type="text"
                        value={this.state.description}
                        required
                        onChange={this.onChangeHandler}
                        name='description'
                    />
                    <button className="addTaskButton">Add</button>
                </form>
            </div>
        )
    }
}

export default AddTaskForm;