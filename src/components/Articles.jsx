import React, { Component } from "react";

class Articles extends Component {
  state = {};
  render() {
    return (
      //   <div className="features"> use in parent component
      <article>
        <span className="icon fa-gem"></span>
        <div className="content">
          <h3>{this.props.title}</h3>
          {/* <p>
            {Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
            Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
            tempus aliquam.}
          </p> */}
        </div>
      </article>
      //   </div>
    );
  }
}

export default Articles;
