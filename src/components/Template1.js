import React, { Component } from "react";
import '../assets/Template1.css';

class Template1 extends Component {

    render() {
        const { users } = this.props;
        return (
            <div id="document" className="document">
                <div className="page">
                    <div className="subpage">
                        <div id="body">
                            <div id="group-header-1">
                                <div id="profile" className="block">
                                    <div id="profile-wraper">
                                        <div id="profile-avatar-wraper" className="profile-item-1">
                                            <img id="profile-avatar" src={ users && users.avatar !== '' ? users.avatar : "https://www.kkmm.gov.my/images/sub_bahagian/icon.png"} alt="avatar" />
                                        </div>
                                        <div id="profile-info" className="profile-item">
                                            <div className="info">
                                                <span id="profile-fullname" className="default_min_width_1">{users ? users.name : ''}</span>
                                            </div>
                                            <div className="contact">
                                                <div className="contact-item">
                                                    <i className={users && users.age ? "fa fa-calendar" : ''}></i>
                                                    <span id="profile-dob" className="default_min_width_1">{users ? users.age : ''}</span>
                                                </div>
                                            </div>
                                            <div className="contact">
                                                <div className="contact-item">
                                                    <i className={users && users.address ? "fa fa-map-marker" : ''}></i>
                                                    <span id="profile-address" className="default_min_width_1">{users ? users.address : ''}</span>
                                                </div>
                                            </div>
                                            <div className="contact">
                                                <div className="contact-item">
                                                    <i className={users && users.email ? "fa fa-envelope-square" : ''}></i>
                                                    <span id="profile-email" className="default_min_width_1">{users ? users.email : ''}</span>
                                                </div>
                                            </div>
                                            <div className="contact">
                                                <div className="contact-item">
                                                    <i className={users && users.phone ? "fa fa-phone" : ''}></i>
                                                    <span id="profile-address" className="default_min_width_1">{users ? users.phone : ''}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="group-main">
                                <div id="objective" className="block">
                                    <div className="block-header">
                                        <span id="objective-blocktitle" className="default_min_width_1">Mục tiêu nghề nghiệp</span>
                                    </div>
                                    <div className="cvo-block-body">
                                        <div id="objective-objective" className="default_min_width_1">{users ? users.career : ''}</div>
                                    </div>
                                </div>
                                <div id="objective" className="block">
                                    <div className="block-header">
                                        <span id="objective-blocktitle" className="default_min_width_1">Học vấn</span>
                                    </div>
                                    <div className="block-body">
                                        <div id="objective-objective" className="default_min_width_1">{users ? users.education : ''}</div>
                                    </div>
                                </div>
                                <div id="objective" className="block">
                                    <div className="block-header">
                                        <span id="objective-blocktitle" className="default_min_width_1">Kinh nghiệm làm việc</span>
                                    </div>
                                    <div className="block-body">
                                        <div id="objective-objective" className="default_min_width_1">{users ? users.experience : ''}</div>
                                    </div>
                                </div>
                                <div id="objective" className="block">
                                    <div className="block-header">
                                        <span id="objective-blocktitle" className="default_min_width_1">Sở thích</span>
                                    </div>
                                    <div className="block-body">
                                        <div id="objective-objective" className="default_min_width_1">{users ? users.hobby : ''}</div>
                                    </div>
                                </div>
                                <div id="objective" className="block">
                                    <div className="block-header">
                                        <span id="objective-blocktitle" className="default_min_width_1">Thông tin khác</span>
                                    </div>
                                    <div className="block-body">
                                        <div id="objective-objective" className="default_min_width_1">{users ? users.other : ''}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Template1;
