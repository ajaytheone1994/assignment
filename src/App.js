import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import MembersList from './data/Test JSON.json';
import VerticalModal from './components/modal';
import { Button } from 'react-bootstrap';

const App = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [id, setUser] = useState({ id: '' });
  const OpenModal = id => {
    setModalShow(true);
    setUser(id)
  }
  return (
    <div className="container">
      <h1 className="title">Members List</h1>

      <div className="Card">
        {
          MembersList.members.map(members => {
            return (
              <div className="hovEffects" key={members.id} onClick={() => OpenModal(members.id)} >
                <div className="MembersList">
                  <h3>{members.real_name}</h3>
                </div>
              </div>
            )
          })
        }
      </div>
      <VerticalModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        user={id} />
    </div>
  );
}

export default App;