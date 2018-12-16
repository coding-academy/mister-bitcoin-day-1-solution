import React, { Component } from 'react';
import ContactService from '../../services/ContactService'

import ContactList from '../../components/ContactList/ContactList'

import './ContactPage.css'

class ContactPage extends Component {
  state = {contacts: []}

  componentDidMount() {
    ContactService.getContacts().then(contacts => {
      this.setState({contacts})
    })
  }

  
  render() {
    return (
      <div className="contacts-page">
        <div className="contacts-container">
            <ContactList contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}

export default ContactPage;
