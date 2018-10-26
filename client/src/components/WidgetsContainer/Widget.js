import React from 'react';
import {Card} from 'react-materialize';

function Widget(props) {
  return (
    <div className="Widget">
      <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
        <h3>{props.widget.title}</h3>
        <p>
          {props.widget.textBody}
        </p>
        {/* <p>Tag: #{props.widget.tag}</p> */}
      </Card>
    </div>
  );
}

export default Widget;
