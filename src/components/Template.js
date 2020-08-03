import React, { Component } from "react";
import Template1 from './Template1';
import Template2 from './Template2';

class Template extends Component {
    render() {
        const { users } = this.props;
        const isTemplate = users ? (users.template === '1' ? true : false) : false;
        if (isTemplate) {
            return <Template2 users={users} />;
        }
        return <Template1 users={users}/>;
    }
}

export default Template;
