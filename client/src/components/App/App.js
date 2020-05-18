import React from 'react';
import './App.css';
import Display from '../Display/Display.js'
import Drumpad from '../Drumpad/Drumpad.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (<div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

      <div className="drum-machine container" id="drum-machine">
        <div className="row mb-2">
          <div className=".col-6 .col-sm-4 mr-2">
            <button type="button" class="btn btn-outline-primary">Q</button>
          </div>
          <div className=".col-6 .col-sm-4 mr-2">
            <button type="button" class="btn btn-outline-primary">W</button>
          </div>
          <div className=".col-6 .col-sm-4">
            <button type="button" class="btn btn-outline-primary">E</button>
          </div>
        </div>
        <div className="row mb-2">
          <div className=".col-6 .col-sm-4 mr-2">
            <button type="button" class="btn btn-outline-primary">A</button>
          </div>
          <div className=".col-6 .col-sm-4 mr-2">
            <button type="button" class="btn btn-outline-primary">S</button>
          </div>
          <div className=".col-6 .col-sm-4">
            <button type="button" class="btn btn-outline-primary">D</button>
          </div>
          </div>
          <div className="row mb-2">
            <div className=".col-6 .col-sm-4 mr-2">
              <button type="button" class="btn btn-outline-primary">Z</button>
            </div>
            <div className=".col-6 .col-sm-4 mr-2">
              <button type="button" class="btn btn-outline-primary">X</button>
            </div>
            <div className=".col-6 .col-sm-4">
              <button type="button" class="btn btn-outline-primary">C</button>
            </div>
            </div>
            <div className="row mb-2">
            <div className="card">
              <div className="card-body">
                Volume
              </div>
            </div>
            </div>
            <div className="row mb-2">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-secondary active">
                <input type="radio" name="options" id="option1" autocomplete="off" checked />Off
              </label>
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="option2" autocomplete="off" /> On
              </label>
            </div>
            </div>
            <div className="row mb-2">
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-secondary active">
                <input type="radio" name="options" id="option1" autocomplete="off" checked />Off
              </label>
              <label className="btn btn-secondary">
                <input type="radio" name="options" id="option2" autocomplete="off" /> On
              </label>
            </div>
            </div>
            <div className="row">
            <div className=".col-6 .col-sm-4">
            <label for="customRange1">Volume</label>
            <input type="range" class="custom-range" id="customRange1" />
            </div>
            </div>
      </div>
      </div>
    );
  }
}

export default App;
