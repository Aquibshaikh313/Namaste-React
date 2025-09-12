import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props); // ✅ use "props" consistently
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h3>This is Namaste React series</h3>
        {/* <User name={"Akshay saini"} location={"India"} /> */}
        <UserClass name={""} location={""} />
      </div>
    );
  }
}

export default About;
