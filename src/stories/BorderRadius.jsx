import React from 'react';

import '../../build/css/variables.css';
import './borderRadius.css';

export const BorderRadius = ({}) => (
  <div className='row'>
    <div className="box none">none</div>
    <div className="box extra-small">extra-small</div>
    <div className="box small">small</div>
    <div className="box medium">medium</div>
    <div className="box large">large</div>
    <div className="box extra-large">extra-large</div>
    <div className="box full">full</div>
  </div>
);

BorderRadius.propTypes = {};

BorderRadius.defaultProps = {};
