import React from 'react';
import PropTypes from 'prop-types';
import GridCell from './GridCell';

const style = {
  grid: {
    display: 'grid',
    gridGap: 2,
    backgroundColor: 'lightgrey',
    padding: 2,
    margin: '0 auto'
  }
};

const Grid = ({ rows, columns, marioPos, mushroomsPos }) => {
  const colArr = Array.from({ length: columns }, (x, i) => i);
  const rowArr = Array.from({ length: rows }, (x, i) => i);
  const width = columns * 40 + 2 * columns + 2;
  const gridTemplateColumns = '40px '.repeat(columns);
  const cells = rowArr.map(x =>
    colArr.map(y => {
      const currentPos = x * columns + y + 1;
      const marioLocation = marioPos[0] * columns + marioPos[1] + 1;
      return (
        <GridCell
          mushroom={mushroomsPos.includes(currentPos)}
          mario={marioLocation === currentPos}
          key={x + ' ' + y}
        />
      );
    })
  );
  return (
    <div
      style={{
        ...style.grid,
        width: width,
        gridTemplateColumns: gridTemplateColumns
      }}
    >
      {cells}
    </div>
  );
};

Grid.propTypes = {
  columns: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  marioPos: PropTypes.array.isRequired,
  mushroomsPos: PropTypes.array.isRequired
};

export default React.memo(Grid);
