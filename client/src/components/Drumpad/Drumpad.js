import React from 'react';
import './Drumpad.css';

class Previewer extends React.Component {


  render() {
    return (
      <div className="drum-pad" id="drum-pad">
        <p>X</p>
         <source className="clip" src="horse.ogg" type="audio/ogg" id="Q" />
      </div>
    );
  }
}

export default Previewer;
