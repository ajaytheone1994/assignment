import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
import MembersList from '../../data/Test JSON.json';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Moment from 'react-moment';
import 'moment-timezone';
import './style.css';
export default class VerticalModal extends Component {
  state = {
    date: new Date("1/1/2020"),
  }
  onChange = date => {
    this.setState({ date })
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton >
          <Modal.Title id="contained-modal-title-vcenter" style={{ textAlign: 'center' }}>
            Activity Periods
        </Modal.Title>
        </Modal.Header>
        <div className="Calernder">  <Calendar onChange={this.onChange}
          value={this.state.date} /> </div>
        <Moment format="lll">{this.state.date}</Moment>
        {
          MembersList.members.map((members) => {
            if (members.id == this.props.user) {
              return (
                <div className="hov-effects" key={members.id}>
                  <div className="MembersList">
                    <h5>Hi, <strong>{members.real_name}</strong></h5>
                    <ul>
                      {members.activity_periods.map((childList, index) => 
                      <li key={index} style={{ listStyle: 'none' }}><strong>Start Time</strong>{childList.start_time}&nbsp; <strong>End Time</strong>&nbsp;{childList.end_time}</li>
                    )}
                    </ul>
                  </div>
                </div>
              )
            }

          })
        }
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>


    )
  }
}
