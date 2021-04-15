import React, {Component} from 'react';
import InfoSection from './Infosec';
import homeObj from './Data';

class Intropage extends Component {
  render () {
    return (
      <div>
        <InfoSection {...homeObj} />
      </div>
    );
  }
}

export default Intropage;
