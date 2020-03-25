import React from 'react';
import { uriBase, api } from '../consts';

class AddListForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            due: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const list = {
            name: this.state.name,
            description: this.state.description,
            due: this.state.due
        };
console.log(list)
        fetch(`${uriBase}${api}/lists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(list)
        })
        .then(result => {
            if (!result.ok) {
                throw new Error('failed to create a list')
            }
            else {
                return result.json()
            }
        })
        .then(newList => {

            this.setState({
                name: "",
                description: "",
                due: ""
              });
              this.props.refresh()
        })
        .catch(error => {
            console.log(error)
        })
    }

    onChangeHandler(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                <form className="formatListForm" onSubmit={this.handleSubmit}>
                    <h3>Create a new to do list</h3>
                    <label className="formLabel">Name of to do list: </label>
                    <input 
                        type="text" 
                        className="itemInput"
                        required
                        value={this.state.name}
                        onChange={this.onChangeHandler}
                        name='name'
                    />
                    <br/>
                    <label className="formLabel">Brief description: </label>
                    <input 
                        type="text" 
                        className="itemInput"
                        required
                        value={this.state.description}
                        onChange={this.onChangeHandler}
                        name='description'
                    />
                    <br/>
                    <label className="formLabel">Due date: </label>
                    <input 
                        type="text" 
                        className="itemInput"
                        required
                        value={this.state.due}
                        onChange={this.onChangeHandler}
                        name='due'
                    />
                    <br/>
                    <button className="createButton">
                        Create
                    </button>
                </form>
            </div>
        )
    }
}

export default AddListForm;