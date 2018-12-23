import React from 'react';
import PropTypes from 'prop-types';
import marioImg from '../img/mario.png';
import mshImg from '../img/mushroom.png';

const style = {
  gridCell: {
    backgroundColor: '#fff',
    height: 40
  }
};

const GridCell = ({ mushroom, mario }) => {
  const src = (mario && marioImg) || (mushroom && mshImg);
  return (
    <div style={style.gridCell}>
      {src && (
        <img
          style={{ marginTop: mario ? 0 : 5 }}
          width={30}
          height={mario ? 40 : 30}
          alt="mushroom"
          src={src}
        />
      )}
    </div>
  );
};

GridCell.propTypes = {
  mario: PropTypes.bool.isRequired,
  mushroom: PropTypes.bool.isRequired
};

export default GridCell;
