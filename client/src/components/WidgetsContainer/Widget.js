import React, { Component } from 'react';
import {Card} from 'react-materialize';

class Widget extends Component {
  render() {
    return (
      <div className="Widget">
        <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
          <h3>{props.note.title}</h3>
          <p>
            {props.note.textBody}
          </p>
          {/* <p>Tag: #{props.note.tag}</p> */}
        </Card>
      </div>
    );
  }
}

export default Widget;
