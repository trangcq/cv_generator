import React, { Component } from "react";
import '../assets/Template2.css';

class Template2 extends Component {

    render() {
        const { users } = this.props;
        return (
            <div id="cvo-document" className="cvo-document">
                <div className="cvo-page">
                    <div className="cvo-subpage">
                        <div id="cvo-body">
                            <div id="group-header">
                                <div id="cvo-profile" className="cvo-block">
                                    <div className="header-top">
                                        <div id="cvo-header-top-left">
                                            <span id="cvo-profile-fullname" className="color-highlight default_min_width">{users ? users.name : ''}</span>
                                        </div>
                                        <div id="cvo-header-top-right">
                                            <div id="cvo-profile-avatar-wraper">
                                                <img id="cvo-profile-avatar" src={ users && users.avatar !== '' ? users.avatar : "https://www.kkmm.gov.my/images/sub_bahagian/icon.png"} value="" alt="avatar" />
                                            </div>
                                        </div>
                                    </div>
                                    <div id="cvo-header-bottom">
                                        <i className={users && users.email ? "fa fa-envelope-square" : ''}></i> <span id="cvo-profile-email" className="default_min_width">{users ? users.email : ''}</span>
                                        <i className={users && users.age ? "fa fa-calendar" : ''}></i> <span id="cvo-profile-phone" className="default_min_width">{users ? users.age : ''}</span>
                                        <i className={users && users.address ? "fa fa-map-marker" : ''}></i> <span id="cvo-profile-address" className="default_min_width">{users ? users.address : ''}</span>
                                        <i className={users && users.phone ? "fa fa-phone" : ''}></i> <span id="cvo-profile-phone" className="default_min_width">{users ? users.phone : ''}</span>
                                    </div>
                                </div>
                            </div>
                            <div id="cvo-main">
                                <div id="group-middle"><div id="cvo-objective" className="cvo-block">
                                    <div className="cvo-block-title"><span id="cvo-objective-blocktitle" className="default_min_width">MỤC TIÊU NGHỀ NGHIỆP</span></div>
                                    <div id="cvo-objective-objective" className="default_min_width">{users ? users.career : ''}</div>
                                </div>
                                    <div id="cvo-education" className="cvo-block">
                                        <div className="cvo-block-title"><span id="cvo-education-blocktitle" className="default_min_width">HỌC VẤN</span></div>
                                        <div id="cvo-objective-objective" className="default_min_width">{users ? users.education : ''}</div>
                                    </div>
                                </div>
                                <div id="cvo-education" className="cvo-block">
                                    <div className="cvo-block-title"><span id="cvo-education-blocktitle" className="default_min_width">KINH NGHIỆM LÀM VIỆC</span></div>
                                    <div id="cvo-objective-objective" className="default_min_width">{users ? users.experience : ''}</div>
                                </div>
                                <div id="cvo-education" className="cvo-block">
                                    <div className="cvo-block-title"><span id="cvo-education-blocktitle" className="default_min_width">SỞ THÍCH</span></div>
                                    <div id="cvo-objective-objective" className="default_min_width">{users ? users.hobby : ''}</div>
                                </div>
                                <div id="cvo-education" className="cvo-block">
                                    <div className="cvo-block-title"><span id="cvo-education-blocktitle" className="default_min_width">THÔNG TIN KHÁC</span></div>
                                    <div id="cvo-objective-objective" className="default_min_width">{users ? users.other : ''}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Template2;
