import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../toolbar/toolbar';

const CheckinPage = props => {
  return (
    <div>
      <Toolbar />
      <div style = {{marginTop: '64px'}}>
                This is Check in Form, is a public route
            </div>
    </div>
  );
};

CheckinPage.propTypes = {
  
};

export default CheckinPage;