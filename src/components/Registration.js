import React from 'react';

export default class Registration extends React.Component {
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
    };


    render() {
        return (
            <form>
                <label>
                    FirstName:
                    <input type="text" onChange={(e) => {
                        this.firstName = e.target.value
                    }}/>
                </label>
                <br/>
                <label>
                    LastName:
                    <input type="text" onChange={(e) => {
                        this.lastName = e.target.value
                    }}/>
                </label>
                <br/>
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
                <label>
                    Age:
                    <input type="text" onChange={(e) => {
                        this.age = e.target.value
                    }}/>
                </label>
                <br/>
                <input type="button" value="Submit" onClick={e => this.handleSubmit()}/>
            </form>
        );
    }
}
