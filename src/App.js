import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from './components/Grid';
import arrow from './img/arrow.png';

const generateRandomNumbers = (rows, columns) => {
  const arr = [];
  while (arr.length < rows) {
    const r = Math.floor(Math.random() * rows * columns) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
};

const initialState = (rows, columns) => ({
  direction: null,
  currentPos: [0, 0],
  mushrooms: generateRandomNumbers(rows, columns),
  timer: false
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState(props.rows, props.columns);
  }

  componentDidMount() {
    this._grid.focus();
  }

  componentDidUpdate(prevprops) {
    const { status, rows, columns } = this.props;
    if (prevprops.status === 2 && status === 1) {
      this.setState(initialState(rows, columns));
    }
  }

  checkMushroom = () => {
    let { mushrooms, currentPos } = this.state;
    const { columns } = this.props;
    const marioLocation = currentPos[0] * columns + currentPos[1] + 1;
    const eatenMushroom = mushrooms.indexOf(marioLocation);
    if (eatenMushroom > -1)
      mushrooms = mushrooms.filter(m => m !== marioLocation);
    return mushrooms;
  };

  moveMario = () => {
    const { currentPos, direction } = this.state;
    const position = [...currentPos];
    const { rows, columns, updateMove, changeStatus } = this.props;
    const mushrooms = this.checkMushroom();

    if (mushrooms.length > 0) {
      switch (direction) {
        // down
        case 40:
          if (position[0] === rows - 1) {
            position[0] -= 1;
            this.changeDirection({ keyCode: 38 });
          } else position[0] += 1;
          break;
        // up
        case 38:
          if (position[0] === 0) {
            position[0] += 1;
            this.changeDirection({ keyCode: 40 });
          } else position[0] -= 1;
          break;
        // right
        case 39:
          if (position[1] === columns - 1) {
            position[1] -= 1;
            this.changeDirection({ keyCode: 37 });
          } else position[1] += 1;
          break;
        // left
        case 37:
          if (position[1] === 0) {
            position[1] += 1;
            this.changeDirection({ keyCode: 39 });
          } else position[1] -= 1;
          break;
        default:
          break;
      }
      this.setState({
        currentPos: position,
        mushrooms
      });
      updateMove();
    } else {
      changeStatus(2);
      clearInterval(this.moveMarioInterval);
    }
  };

  changeDirection = ({ keyCode }) => {
    let { timer } = this.state;
    if ([37, 38, 39, 40].includes(keyCode) && this.state.mushrooms.length > 0) {
      if (!timer) {
        timer = true;
        this.moveMarioInterval = setInterval(this.moveMario, 300);
      }
      this.setState({ direction: keyCode, timer });
    }
  };

  render() {
    const { rows, columns, travelledCells } = this.props;
    return (
      <div
        ref={c => (this._grid = c)}
        tabIndex="0"
        onKeyDown={this.changeDirection}
        style={{ height: '100vh' }}
      >
        <h2 style={{ padding: '20px 0 20px 0' }}>
          Total Moves: {travelledCells}
        </h2>
        <Grid
          mushroomsPos={this.state.mushrooms}
          rows={rows}
          columns={columns}
          marioPos={this.state.currentPos}
        />
        <div>
          <img width={100} src={arrow} alt={'arrow'} />
          <p>Use above keys to navigate Mario</p>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  columns: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  changeStatus: PropTypes.func.isRequired,
  travelledCells: PropTypes.number.isRequired,
  updateMove: PropTypes.func.isRequired
};

export default App;
