import React, { Component } from "react";
import './App.css';
import FormCV from './components/FormCV';
import Template from './components/Template';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null
        };
    }

    onSubmit = (data) => {
        this.setState({
            users: data
        });
    }

    componentDidMount() {
        const url = 'https://thawing-hollows-05070.herokuapp.com/users/1';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ users : data });
            })
            .catch(function(err) {
                console.info(err + " url: " + url);
            });
    }

    render() {
        const { users } = this.state;
        return (
            <div className="container mt-30">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <FormCV onSubmit={this.onSubmit} />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Template users={users} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
