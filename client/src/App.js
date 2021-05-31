import Axios from "axios";
import { useState } from "react";

function App() {
  const [employeeList, setEmployeeList] = useState([]);

  const getEmployee = () => {
    Axios.get("http://localhost:3001/employee").then((response) => {
      setEmployeeList(response.data);
    });
  };

  return (
    <div className="container">
      <h1>Employee Information</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label html="text" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-3">
            <label html="text" className="form-label">
              Age:
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Age"
            />
          </div>
          <div className="mb-3">
            <label html="text" className="form-label">
              Country:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Country"
            />
          </div>
          <div className="mb-3">
            <label html="text" className="form-label">
              Position:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Position"
            />
          </div>
          <div className="mb-3">
            <label html="text" className="form-label">
              Wage:
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Wage"
            />
          </div>
          <button className="btn btn-success">Add Employee</button>
        </form>
      </div>
      <hr />
      <div className="employee">
        <button className="btn btn-primary" onClick={getEmployee}>
          Show Empolyee
        </button>
        <br/><br/>
        {employeeList.map((val, key) => {
          return (
            <div className="employee card">
              <div className="card-body text-left">
                <p className="card-text">Name: {val.name}</p>
                <p className="card-text">Age: {val.age}</p>
                <p className="card-text">Country: {val.country}</p>
                <p className="card-text">Position: {val.position}</p>
                <p className="card-text">Wage: {val.wage}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
