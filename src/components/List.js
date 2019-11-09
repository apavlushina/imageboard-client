import React from "react";
import CreateFormContainer from "./CreateFormContainer";
import LoginFormContainer from "./LoginFormContainer";

export default class List extends React.Component {
  render() {
    const weHaveKey = this.props.user;

    return (
      <div>
        {weHaveKey && <CreateFormContainer />}
        {!weHaveKey && <LoginFormContainer />}
        {this.props.images.map(image => {
          return (
            <li key={image.id}>
              <h3>{image.title}</h3>
              <img width="200px" alt={image.title} src={image.url}></img>
            </li>
          );
        })}
      </div>
    );
  }
}
