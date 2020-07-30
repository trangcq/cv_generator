import React, { Component } from "react";
import './App.css';
import FormCV from './components/FormCV';
import Template from './components/Template';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    onSubmit = (data) => {
        var { users } = this.state;
        users.pop();
        users.push(data);
        this.setState({
            users: users
        });
    }

    render() {
        return (
            <div className="container mt-30">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <FormCV onSubmit={this.onSubmit} />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Template users={this.state.users}  />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
