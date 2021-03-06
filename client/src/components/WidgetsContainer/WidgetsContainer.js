import React, { Component } from 'react';
import {Button} from 'react-materialize';
import Widget from './Widget';
import { connect } from "react-redux";
import { getData } from "../../actions";

class WidgetsContainer extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="WidgetsContainer">
        
          {this.props.widgets.map(widget => (
              <Widget widget={widget} />
          ))}

        <Button floating large className='blue addButton' waves='light' icon='add' />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    widgets: state.widgets
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(WidgetsContainer);
