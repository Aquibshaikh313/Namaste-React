import UserContext from "../utils/userContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component {
  constructor(props) {
    super(props); // ✅ use "props" consistently
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }

  render() {
    // console.log("Parent Render");

    return (
      <div className="m-4 p-4 ">
        <h1 className="py-2 text-4xl font-bold">About</h1>
        <h3 className="py-2 text-3xl">This is Namaste React series</h3>

        {/* <User name={"Akshay saini"} location={"India"} /> */}
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={""} location={""} />
      </div>
    );
  }
}

export default About;
