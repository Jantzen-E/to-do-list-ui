import React from 'react';
import ToDoItem from './ToDoItem';
import AddTaskForm from './AddTaskForm';
import { uriBase, api } from '../consts';
import '../Responsive.css';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state= {tasks: []}

        this.refresh = this.refresh.bind(this);
    }

    refresh() {
        this.setState({tasks: []})
        console.log('refresh')
        fetch(`${uriBase}${api}/tasks/${this.props.list._id}`)
            .then((res) => {
                console.log(res)
                return res.json()
            })
            .then((data) => {
                console.log(data)
                if (data.length) {
                    this.setState({tasks: data})
                }
            })
    }

    componentDidMount() {
        this.refresh()
    }

    render() {
        return(
            <div>
                <div className="list">
                    <h2 className="listTitle">{this.props.list.name}</h2>
                    <h3 className="listDescription">Description: {this.props.list.description} </h3>
                    <h3 className="listCompletionGoal">Completion goal: {this.props.list.due}</h3>
                    <ul>
                        {
                            this.state.tasks.map((task) => {
                                return (
                                    <ToDoItem task={task} />
                                )
                            })
                        }
                    </ul>
                    <AddTaskForm listID={this.props.list._id} refresh={this.refresh}/>
                </div>
            </div>
        )
    }
}

export default ToDoList;