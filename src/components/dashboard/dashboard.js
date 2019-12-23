import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../toolbar/toolbar';

dashboard.propTypes = {
    
};

function dashboard(props) {
    return (
        <div>
            <Toolbar />
            <div style = {{marginTop: '64px'}}>
                This is dashboard
            </div>
            
        </div>
    );
}

export default dashboard;