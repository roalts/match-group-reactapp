import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.firstName = "";
        this.lastName = "";
        this.userName = "";
        this.password = "";
        this.age = "";
    }

    handleSubmit = () => {

        console.log(this.firstName, this.lastName, this.userName, this.password, this.age);
        alert("Welcome to Codeminators Dating App");
    };


    render() {
        return (
            <form>
                <label>
                    Username:
                    <input type="text" onChange={(e) => {
                        this.userName = e.target.value
                    }}/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" onChange={(e) => {
                        this.password = e.target.value
                    }}/>
                </label>
                <br/>
                <input type="button" value="Submit" onClick={e => this.handleSubmit()}/>
            </form>
        );
    }
}
