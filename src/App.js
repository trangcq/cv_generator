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
    }uid

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
            <div className="container-fl mt-30">
                <div className="row">
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <FormCV onSubmit={this.onSubmit} />
                    </div>
                    <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
                        <Template users={users} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
