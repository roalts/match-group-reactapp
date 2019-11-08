import React from 'react';

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.firstName = null;
        this.lastName = null;
        this.userName = null;
        this.password = null;
        this.age = null;
    }

    handleSubmit = () => {


    };


    render() {
        return (
            <form>
                <label>
                    FirstName:
                    <input type="text" value={this.firstName} onChange={(e) => {
                        this.firstName = e.target.value
                    }}/>
                </label>
                <br/>
                <label>
                    LastName:
                    <input type="text" ref={(input) => this.lastName}/>
                </label>
                <br/>
                <label>
                    Username:
                    <input type="text" ref={(input) => this.userName}/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" ref={(input) => this.password}/>
                </label>
                <br/>
                <label>
                    Age:
                    <input type="text" ref={(input) => this.age}/>
                </label>
                <br/>
                <input type="button" value="Submit" onClick={e => this.handleSubmit()}/>
            </form>
        );
    }
}
