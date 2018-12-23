import React, { Component } from 'react';
import { TextField, Button, Grid as Container } from '@material-ui/core';
import App from './App';
import Modal from './components/Modal';

class Main extends Component {
  state = {
    rows: '',
    columns: '',
    status: 0,
    travelledCells: 0
  };

  handleChange = size => event => {
    const numbers = /^(\s*|\d+)$/;
    if (event.target.value.match(numbers))
      this.setState({
        [size]: Number(event.target.value)
      });
  };

  changeStatus = status => {
    let { travelledCells } = this.state;
    if (status === 1) travelledCells = 0;
    this.setState({ status, travelledCells });
  };

  renderSizeComp = () => {
    const { columns, rows } = this.state;
    return (
      <div style={{ marginTop: '10%' }}>
        <TextField
          label="Rows"
          value={this.state.rows}
          onChange={this.handleChange('rows')}
          margin="normal"
        />
        <br />
        <TextField
          label="Columns"
          value={this.state.columns}
          onChange={this.handleChange('columns')}
          margin="normal"
        />
        <br />
        <Button
          style={{ backgroundColor: 'grey' }}
          onClick={() => this.changeStatus(1)}
          disabled={!(columns > 0 && rows > 0)}
        >
          Submit
        </Button>
      </div>
    );
  };

  updateMove = () =>
    this.setState({ travelledCells: this.state.travelledCells + 1 });

  render() {
    const { columns, rows, travelledCells, status } = this.state;
    return (
      <Container container style={{ textAlign: 'center' }}>
        <Container item xs={12} md={9} lg={12}>
          {status === 0 ? (
            this.renderSizeComp()
          ) : (
            <App
              columns={columns}
              rows={rows}
              changeStatus={this.changeStatus}
              travelledCells={travelledCells}
              updateMove={this.updateMove}
              status={status}
            />
          )}
          <Modal
            changeStatus={this.changeStatus}
            travelledCells={travelledCells}
            open={status === 2}
          />
        </Container>
      </Container>
    );
  }
}

export default Main;
