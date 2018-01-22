import React, { Component } from 'react';
import './App.css';
import GuestList from "./GuestList";

class App extends Component {

  state = {
    isFiltered: false,
    guests: [
      {
        name: 'Treasure',
        isConfirmed: false,
        isEditing: false,
      },
      {
        name: 'Nic',
        isConfirmed: true,
        isEditing: false,
      },
      {
        name: 'Matt K',
        isConfirmed: false,
        isEditing: false,
      },
    ],
  };

  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        } else {
          return guest;
        }
      })
    });

  toggleConfirmationAt = (indexToChange) =>
    this.toggleGuestPropertyAt("isConfirmed", indexToChange);

  toggleEditingAt = (indexToChange) =>
    this.toggleGuestPropertyAt("isEditing", indexToChange);

  getTotalInvited = () => this.state.guests.length;

  toggleFilter = () =>
    this.setState({ isFiltered: !this.isFiltered});

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
            <input type="text" value="Safia" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                checked={this.state.isFiltered}
              /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>3
            <tr>
              <td>Attending:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>3</td>
            </tr>
            </tbody>
          </table>

          <GuestList
            guests={this.state.guests}
            toggleComfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt} />

        </div>
      </div>
    );
  }
}

export default App;
