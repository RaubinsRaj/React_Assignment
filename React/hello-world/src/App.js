

import React, { Component } from 'react'
import Employee from './Employee';
import DeleteEmpl from './DeleteEmpl'

export class App extends Component {
  state = {
    employees: [
      { name: 'Raubins', job:'Software Engineer',id: 1 },
      { name: 'Raj',  job: 'FSd',id: 2  },
      { name: 'Raushan',job: 'Analyst',id: 3  }
    ]
  }

  addEmployee = (employee) => {
    employee.id = Math.random();
    let employees = [...this.state.employees, employee];
    this.setState({
      employees: employees
    });
  }

  deleteEmployee = (id) => {
    // console.log(id);
    let employees = this.state.employees.filter(employee => {
      return employee.id !== id
    });
    this.setState({
      employees:employees
    });
  }


  render() {
    return (
        <div className="App">
        <h1>Employee Details:</h1>
        <DeleteEmpl employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
        <Employee addEmployee={this.addEmployee} />
        
      </div>
    )
  }
}



export default App;
