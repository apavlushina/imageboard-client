import React from "react";
import { getImages } from "../actions/actions";
import { login } from "../actions/login";
import { connect } from "react-redux";
import List from "./List";

class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }

  render() {
    return (
      <div>
        <List images={this.props.images} user={this.props.user} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { images: state.images, user: state.user };
}

const mapDispatchToProps = { getImages, login };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
