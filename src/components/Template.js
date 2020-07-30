import React, { Component } from "react";
import '../assets/Template.css';

class Template extends Component {

    render() {
        const { users } = this.props;
        return (
            <div id="cvo-document" className="cvo-document">
                    {users.map((user, index) =>
                        <div key={index}>
                            <div className="cvo-page">
                                <div className="cvo-subpage">
                                    <div id="cvo-body">
                                        <div id="cvo-main">
                                            <div id="group-header"><div id="cvo-profile" className="cvo-block">
                                                <div id="cvo-header" className="hide-avatar">
                                                    <h1><span id="cvo-profile-fullname">{user.name}</span></h1>
                                                    <p>
                                                        <span id="cvo-profile-address">{user.address}</span>
                                                    </p>
                                                    <p>
                                                        <i className="fa fa-envelope"></i>
                                                        <span id="cvo-profile-email">{user.email}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            </div>
                                            <div id="group-content" className="cvo-block">
                                                <div className="cvo-block-title">
                                                    <h3><span>Mục tiêu nghề nghiệp</span></h3>
                                                </div>
                                                <div className="block-content">
                                                    <div className="cvo-block-body">
                                                        <div id="cvo-objective-objective">{user.career}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="group-content" className="cvo-block">
                                                <div className="cvo-block-title">
                                                    <h3><span>Học vấn</span></h3>
                                                </div>
                                                <div className="block-content">
                                                    <div className="cvo-block-body">
                                                        <div id="cvo-objective-objective">{user.education}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="group-content" className="cvo-block">
                                                <div className="cvo-block-title">
                                                    <h3><span>Kinh nghiệm làm việc</span></h3>
                                                </div>
                                                <div className="block-content">
                                                    <div className="cvo-block-body">
                                                        <div id="cvo-objective-objective">{user.experience}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

export default Template;
