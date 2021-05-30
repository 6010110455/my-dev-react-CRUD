function App() {
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
      <hr/>
      <dir className="employee">
        <button className="btn btn-primary">Show Empolyee</button>
      </dir>
    </div>
  );
}

export default App;
