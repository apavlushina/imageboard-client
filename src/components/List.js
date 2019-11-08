import React from "react";

export default class List extends React.Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        {this.props.images.map(image => {
          return (
            <li key={image.id}>
              <h3>{image.title}</h3>;
              <img width="200px" alt={image.title} src={image.url}></img>
            </li>
          );
        })}
      </div>
    );
  }
}
