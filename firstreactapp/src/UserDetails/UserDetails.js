import React, { Component } from "react";

class UserDetails extends Component {
    constructor() {
        super();
        this.state = { firstName: 'Unknown', lastName: 'Unknown' };
        this.updateFirstName = this.updateFirstName.bind(this);
        this.updateLastName = this.updateLastName.bind(this);
    }

    updateFirstName(event) {
        // Store the value of the firstName textbox into 
        // the firstName field in the State.
        this.setState({ firstName: event.target.value });
    }

    updateLastName(event) {
        // Store the value of the lastName textbox into 
        // the lastName field in the State.
        this.setState({ lastName: event.target.value });
    }

    render() {
        return (
            <div className="formclass">
                <center>
                    <form>
                        <label>First Name</label>
                        <input type="text" name="firstName" onChange={this.updateFirstName} /><br />
                        <label>Last Name</label>
                        <input type="text" name="lastName" onChange={this.updateLastName} /><br />
                        <input type="submit" value="Save" />
                        <b>Your Full Name. Mr/Ms </b>&nbsp;&nbsp;
                        <label>{this.state.firstName}&nbsp;&nbsp;{this.state.lastName}</label>
                    </form>
                </center>
            </div>
        )
    }
}

export default UserDetails;
