import React, { Component } from "react";

class FormCV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            address: '',
            email: '',
            career: '',
            education: '',
            experience: '',
            template: 0
        };
    }

    onHandleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        let url = "http://localhost:3000/users/1";
        fetch(url, {
            method: "PUT",
            mode: "cors",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            console.log(response.json());
        })
        .catch(function(err) {
            console.info(err + " url: " + url);
        });
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Form CV</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={ this.onHandleSubmit }>
                        <legend>Thông tin cá nhân</legend>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Họ tên</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       className="form-control"
                                       name="name"
                                       value={this.state.name}
                                       onChange={ this.onHandleChange }
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Tuổi</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       className="form-control"
                                       name="age"
                                       value={this.state.age}
                                       onChange={ this.onHandleChange }
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Địa chỉ</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       className="form-control"
                                       name="address"
                                       value={this.state.address}
                                       onChange={ this.onHandleChange }
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       className="form-control"
                                       name="email"
                                       value={this.state.email}
                                       onChange={ this.onHandleChange }
                                    />
                            </div>
                        </div>
                        <legend>Mục tiêu nghề nghiệp</legend>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <textarea type="text"
                                          className="form-control"
                                          rows="5"
                                          name="career"
                                          value={this.state.career}
                                          onChange={ this.onHandleChange }
                                    >
                                </textarea>
                            </div>
                        </div>
                        <legend>Học vấn</legend>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <textarea type="text"
                                          className="form-control"
                                          rows="5"
                                          name="education"
                                          value={this.state.education}
                                          onChange={ this.onHandleChange }
                                    >
                                </textarea>
                            </div>
                        </div>
                        <legend>Kinh nghiệm làm việc</legend>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <textarea type="text"
                                          className="form-control"
                                          rows="5"
                                          name="experience"
                                          value={this.state.experience}
                                          onChange={ this.onHandleChange }
                                    >
                                </textarea>
                            </div>
                        </div>
                        <br/>
                        <legend>Chọn mẫu CV</legend>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <div className="radio">
                                    <label className="col-sm-2 col-form-label">
                                        <input
                                            type="radio"
                                            name="template"
                                            value={0}
                                            onChange={ this.onHandleChange }
                                            />
                                        Mẫu 1
                                    </label>
                                    <label className="col-sm-2 col-form-label">
                                        <input
                                            type="radio"
                                            name="template"
                                            value={1}
                                            onChange={ this.onHandleChange }
                                            />
                                        Mẫu 2
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                        <button type="reset" className="btn btn-default">Reset</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormCV;
