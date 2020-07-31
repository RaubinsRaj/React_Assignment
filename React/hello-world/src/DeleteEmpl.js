import React from 'react'

const DeleteEmpl = ({employees, deleteEmployee}) => {
    return (
      <div className="employee-list">
        { 
          employees.map(employee => {
            return (
              <div className="employee" key={employee.id}>
                Name: { employee.name } &nbsp;&nbsp;&nbsp;&nbsp; job: { employee.job } &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => {deleteEmployee(employee.id)}}>Delete</button>
                
                <hr />
              </div>
            )
          })
        }
      </div>
    );
  }

export default DeleteEmpl
