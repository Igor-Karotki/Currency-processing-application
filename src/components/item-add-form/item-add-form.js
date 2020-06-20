import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    name: '',
    eur: '',
    pln: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, eur,pln} = this.state;
    if (name && eur) {
      this.setState({ name: '', eur: ''});
      this.props.onItemAdded(name, eur,pln);
    } else {
      alert('Proszę wypełnić wszystkie pola');
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
        <input type="number"
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
