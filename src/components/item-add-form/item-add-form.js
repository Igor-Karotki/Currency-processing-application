import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    name: '',
    eur: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, eur } = this.state;
    if (name && eur) {
      if (!isNaN(+eur)) {
        this.setState({ name: '', eur: '' });
        this.props.onItemAdded(name, +eur);
      } else {
        alert('Please enter a number');
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  };
  onEurChange = (e) => {
    this.setState({
      eur: e.target.value
    })
  };

  render() {
    return (
      <form
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}>
        <input type="text"
          className="form-control new-table"
          value={this.state.name}
          onChange={this.onNameChange}
          placeholder="name" />
        <input type="text"
          className="form-control new-table"
          value={this.state.eur}
          onChange={this.onEurChange}
          placeholder="eur" />
        <button type="submit"
          className="btn btn-outline-secondary">Submit</button>
      </form>
    );
  }
}
