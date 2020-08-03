import React, { Component } from "react";

class FormCV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            address: '',
            phone: '',
            avatar: '',
            email: '',
            career: '',
            education: '',
            experience: '',
            hobby: '',
            other: '',
            template: '0',
            errors: {}
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

    handleValidation = () => {
        let fields = this.state;
        let errors = {};
        let formIsValid = true;
        if (!fields.name) {
            formIsValid = false;
            errors['name'] = "Cannot be empty";
        }

        if (!fields.email) {
            formIsValid = false;
            errors['email'] = "Cannot be empty";
        } else if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(fields['phone'])) {
            formIsValid = false;
            errors['phone'] = 'Please enter only number';
        } else if (fields['phone'].length !== 10) {
            formIsValid = false;
            errors['phone'] = 'Please enter valid phone number';
        }

        if (!fields.career) {
            formIsValid = false;
            errors['career'] = "Cannot be empty";
        }

        if (!fields.education) {
            formIsValid = false;
            errors['education'] = "Cannot be empty";
        }

        if (!fields.experience) {
            formIsValid = false;
            errors['experience'] = "Cannot be empty";
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    onHandleSubmit = (e) => {
        e.preventDefault();
        if (this.handleValidation()) {
            const url = "https://thawing-hollows-05070.herokuapp.com/users/1";
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
                .catch(function (err) {
                    console.info(err + " url: " + url);
                });
            this.props.onSubmit(this.state);
        }
    }

    onReset = (e) => {
        e.preventDefault();
        this.setState({
            name: '',
            age: '',
            address: '',
            phone: '',
            avatar: '',
            email: '',
            career: '',
            education: '',
            experience: '',
            hobby: '',
            other: '',
            template: '0',
            errors: {}
        });
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
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label className="col-sm-3 col-form-label">Họ tên <em>*</em></label>
                                <div className="col-sm-9 required">
                                    <input type="text"
                                           className="form-control"
                                           name="name"
                                           value={this.state.name}
                                           onChange={ this.onHandleChange }
                                        />
                                    <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                                </div>
                            </div>
                            <div className="form-group col-sm-6">
                                <label className="col-sm-3 col-form-label">Tuổi</label>
                                <div className="col-sm-9">
                                    <input type="text"
                                           className="form-control"
                                           name="age"
                                           value={this.state.age}
                                           onChange={ this.onHandleChange }
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                                <div className="col-sm-9">
                                    <input type="text"
                                           className="form-control"
                                           name="address"
                                           value={this.state.address}
                                           onChange={ this.onHandleChange }
                                        />
                                </div>
                            </div>
                            <div className="form-group col-sm-6">
                                <label className="col-sm-3 col-form-label">Email <em>*</em></label>
                                <div className="col-sm-9">
                                    <input type="text"
                                           className="form-control"
                                           name="email"
                                           value={this.state.email}
                                           onChange={ this.onHandleChange }
                                        />
                                    <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <label className="col-sm-3 col-form-label">Phone <em>*</em></label>
                                <div className="col-sm-9">
                                    <input type="text"
                                           className="form-control"
                                           name="phone"
                                           value={this.state.phone}
                                           onChange={ this.onHandleChange }
                                        />
                                    <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                                </div>
                            </div>
                            <div className="form-group col-sm-6">
                                <label className="col-sm-3 col-form-label">Avatar</label>
                                <div className="col-sm-9">
                                    <input type="text"
                                           className="form-control"
                                           name="avatar"
                                           value={this.state.avatar}
                                           onChange={ this.onHandleChange }
                                        />
                                </div>
                            </div>
                        </div>
                        <legend>Mục tiêu nghề nghiệp <em>*</em></legend>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <textarea type="text"
                                          className="form-control"
                                          rows="3"
                                          name="career"
                                          value={this.state.career}
                                          onChange={ this.onHandleChange }
                                    >
                                </textarea>
                                <span style={{color: "red"}}>{this.state.errors["career"]}</span>
                            </div>
                        </div>
                        <legend>Học vấn <em>*</em></legend>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <textarea type="text"
                                          className="form-control"
                                          rows="3"
                                          name="education"
                                          value={this.state.education}
                                          onChange={ this.onHandleChange }
                                    >
                                </textarea>
                                <span style={{color: "red"}}>{this.state.errors["education"]}</span>
                            </div>
                        </div>
                        <legend>Kinh nghiệm làm việc <em>*</em></legend>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <textarea type="text"
                                          className="form-control"
                                          rows="3"
                                          name="experience"
                                          value={this.state.experience}
                                          onChange={ this.onHandleChange }
                                    >
                                </textarea>
                                <span style={{color: "red"}}>{this.state.errors["experience"]}</span>
                            </div>
                        </div>
                        <br/>
                        <legend>Sở thích</legend>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <textarea type="text"
                                          className="form-control"
                                          rows="3"
                                          name="hobby"
                                          value={this.state.hobby}
                                          onChange={ this.onHandleChange }
                                    >
                                </textarea>
                            </div>
                        </div>
                        <br/>
                        <legend>Thông tin khác</legend>
                        <div className="form-group row">
                            <div className="col-sm-12">
                                <textarea type="text"
                                          className="form-control"
                                          rows="3"
                                          name="other"
                                          value={this.state.other}
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
                                            checked={this.state.template === '0'}
                                            />
                                        Mẫu 1
                                    </label>
                                    <label className="col-sm-2 col-form-label">
                                        <input
                                            type="radio"
                                            name="template"
                                            value={1}
                                            onChange={ this.onHandleChange }
                                            checked={this.state.template === '1'}
                                            />
                                        Mẫu 2
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                        <button type="reset" className="btn btn-default" onClick={this.onReset}>Reset</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormCV;
