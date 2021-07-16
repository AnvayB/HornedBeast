
import React from 'react';
import Form from 'react-bootstrap/Form';

class Forms extends React.Component {
  numHorns = e => {
    e.preventDefault();
    this.props.horns(e.target.value);
    this.props.reset();

  }

  onSubmit = e => {
    e.preventDefault();
    this.props.filter();
  }

  render () {
    return(
      <Form>
        <Form.Group>
          <Form.Label>
            How many horns?
          </Form.Label>
          <select onChange={this.horns}>
            <option value = {1}>1</option>
            <option value = {2}>2</option>
            <option value = {3}>3</option>
            <option value = {100}>100</option>
          </select>
          <button onClick={this.onSubmit}>Enter</button>
        </Form.Group>
      </Form>
    )
  }
}

export default Form;