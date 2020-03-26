import React from 'react';
import ToDoList from './ToDoList';
import AddListForm from './AddListForm';
import { uriBase, api } from '../consts'

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state= {lists: []}

        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        fetch(`${uriBase}${api}/lists`)
            .then((res) => { 
                console.log(res)
                return res.json()
            })
            .then((data) => {
                console.log(data)
                if (data.length) {
                    // this.setState({
                    //     lists: data.map((list) => {
                    //         return <ToDoList {...list}/>
                    //     })
                    // })
                    this.setState({lists: data})
                }
            })
    }

    refresh() {
        this.setState({lists: []})
        console.log('refresh')
        fetch(`${uriBase}${api}/lists/`)
            .then((res) => {
                console.log(res)
                return res.json()
            })
            .then((data) => {
                console.log(data)
                if (data.length) {
                    this.setState({lists: data})
                }
            })
    }

    render() {
        return(
            <div className="centerPage">
                <h1 className="pageTitle">Multiple To Do Lists</h1>
                {/* {this.state.lists} */}
                {
                    this.state.lists.map((list) => {
                        return (
                            <ToDoList list={list}/>
                        )
                    })
                }
                <AddListForm refresh={this.refresh}/>
            </div>
        )
    }
}

export default Page;