import React from 'react';

import 'jstree/dist/themes/default/style.css';
import ReactJstree from 'react-jstree';

class TreeDemo extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="core-bootstrapreact">11</div>
        <div className="m1-support">11</div>
        <div className="m1-colors">11</div>
        <div>
          <ReactJstree>MyComponent</ReactJstree>
        </div>
      </div>
    );
  }
}

export default TreeDemo;
