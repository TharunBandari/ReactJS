import React, { Component } from "react";

class ProjectForm extends Component {
    constructor() {
        super();
        this.state = {
            projectName: '',
            managerName: '',
            startDate: '',
            validationError: '',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { projectName, managerName } = this.state;

        // Validation for Manager name (only spaces and alphabets)
        const managerNamePattern = /^[a-zA-Z\s]*$/;
        if (!managerName.match(managerNamePattern)) {
            this.setState({ validationError: "Update Manager Name" });
            return;
        }

        // Here, you can perform further actions with the captured data
        console.log("Project Name:", projectName);
        console.log("Manager Name:", managerName);
        console.log("Start Date:", this.state.startDate);

        // Reset the form and clear validation error
        this.setState({
            projectName: '',
            managerName: '',
            startDate: '',
            validationError: '',
        });
    };

    handleReset = () => {
        // Reset the form and clear validation error
        this.setState({
            projectName: '',
            managerName: '',
            startDate: '',
            validationError: '',
        });
    };

    render() {
        const { projectName, managerName, startDate, validationError } = this.state;

        return (
            <div className="formclass">
                <center>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="projectName">Project Name:</label>
                            <input
                                type="text"
                                id="projectName"
                                name="projectName"
                                value={projectName}
                                onChange={this.handleInputChange}
                                pattern="[a-zA-Z\s]+"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="managerName">Manager Name:</label>
                            <input
                                type="text"
                                id="managerName"
                                name="managerName"
                                value={managerName}
                                onChange={this.handleInputChange}
                                pattern="[a-zA-Z\s]+"
                                required
                            />
                            {validationError && <p className="error">{validationError}</p>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="startDate">Starting Date:</label>
                            <input
                                type="date"
                                id="startDate"
                                name="startDate"
                                value={startDate}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>

                        <div className="button-group">
                            <button type="submit">Save</button>
                            <button type="button" onClick={this.handleReset}>Reset</button>
                        </div>
                    </form>

                    <b>Your Full Name: Mr/Ms {managerName}</b>
                </center>
            </div>
        )
    }
}

export default ProjectForm;
