import React, { Component } from 'react'

 class Employee extends Component {
    state = {
        name: null,
        job: null
      }
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        });
      }
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.addEmployee(this.state);
      }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="job">job:</label>
          <input type="text" id="job" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
                
            </div>
        )
    }
}

export default Employee
