import React, { Component } from "react";
import { render } from "react-dom";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            address: '',
            email: '',
            career: '',
            education: '',
            experience: ''
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
           [name]: value
        });
    }

    onHandleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container mt-30">
                <div className="row">
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
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
                                                    <input type="radio" />
                                                    Mẫu 1
                                                </label>
                                                <label className="col-sm-2 col-form-label">
                                                    <input type="radio" />
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
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
