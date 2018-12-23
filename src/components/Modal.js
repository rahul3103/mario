import React from 'react';
import PropTypes from 'prop-types';
import { DialogTitle, Dialog, Fab, Icon } from '@material-ui/core';

const Modal = ({ open, travelledCells, changeStatus }) => {
  return (
    <Dialog open={open} aria-labelledby="simple-dialog-title">
      <DialogTitle id="simple-dialog-title">Game Finished</DialogTitle>
      <div style={{ width: 250, textAlign: 'center' }}>
        <p>Total move to save Princess: {travelledCells}</p>
        <Fab
          style={{ margin: 15 }}
          variant="extended"
          onClick={() => changeStatus(1)}
          aria-label="Restart"
        >
          <Icon>refresh</Icon> Restart
        </Fab>
      </div>
    </Dialog>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  travelledCells: PropTypes.number.isRequired
};

export default Modal;
