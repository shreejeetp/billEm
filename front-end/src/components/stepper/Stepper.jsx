import React from 'react';
import './Stepper.css';

function Stepper(props) {
  return (
    <div>
      <div className='stepper'>
        <div
          className='stepper__step'
          style={{ width: '40px', height: '40px' }}
        >
          1
        </div>
        <div className='stepper__step'></div>
      </div>
    </div>
  );
}

export default Stepper;
