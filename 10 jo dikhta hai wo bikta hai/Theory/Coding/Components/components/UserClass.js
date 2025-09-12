import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log("Child Constructor");
  }
  async componentDidMount() {
    console.log("Child Component Did Mount")
    const data = await fetch("https://api.github.com/users/aquibshaikh313");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  componentDidUpdate(){
    console.log("Component Did Update");
    
  }
  componentWillUnmount() {
    console.log("Component willUnmount");
  }


  render() {
    console.log("Child Render");

    // const { name, location, contact } = this.props;
    const {name,location,avatar_url} = this.state.userInfo

    return (
      <div className="user-card">
        <img src={avatar_url} alt=""/>
        <h2>{name}</h2>
        <h3>{location}</h3>
        {/* <h4>{contact}</h4> */}
      </div>
    );
  }
}

export default UserClass;
