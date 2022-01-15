import React from "react";
import "./AddProduct.css";

class AddProduct extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      image: "",
    };
  }

  handleChange(event) {
    console.log("abc");
    let stateName = event.target.getAttribute("data-stateName");
    let dataValue = event.target.value;
    this.setState({ stateName: dataValue });
  }

  render() {
    return (
      <div>
        Add Product1
        <form>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              value={this.state.email}
              data-stateName="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
              value={this.state.password}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Default file input example
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              value={this.state.password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
