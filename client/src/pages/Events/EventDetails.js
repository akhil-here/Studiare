import React, {useState, useEffect} from 'react';
import Header from '../../shared/Header';
import {Link, useParams} from 'react-router-dom';

const EventDetails = () => {
  const [eventData, setEventData] = useState ('');
  const {id} = useParams ();

  useEffect (() => {
    fetch (`/alleventslist/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (data => {
        console.log (data);
        setEventData (data);
      });
  }, []);

  return (
    <div id="container">
      <Header />
      <section className="page-banner-section">
        <div className="container">
          <h1>{eventData.eventName}</h1>
          <ul className="page-depth">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/alleventslist">Events</Link></li>
            <li>
              <Link to={'/alleventslist/' + eventData._id}>
                {eventData.eventName}
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* page-banner-section 
                ================================================== */}

      {/* End page-banner-section */}
      {/* single-event-section 
                ================================================== */}
      <section className="single-event-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-event-box">
                <img
                  src={eventData.eventImage}
                  alt=""
                  className="w-60 justify-content-center align-items-center"
                />
                <div className="event-meta-info">
                  <div className="box-content start-time">
                    <div className="inner">
                      <div className="text">
                        <span className="label">Start Time</span>
                        <p>{eventData.timefrom} hrs</p>
                        <p>
                          {(eventData.eventDate + '').slice (5, 7)}
                          {'/'}
                          {(eventData.eventDate + '').slice (8, 10)}
                          {'/'}
                          {(eventData.eventDate + '').slice (0, 4)}
                        </p>
                      </div>
                      <div className="icon">
                        <i className="material-icons">access_time</i>
                      </div>
                    </div>
                  </div>
                  <div className="box-content end-time">
                    <div className="inner">
                      <div className="text">
                        <span className="label">End Time</span>
                        <p>{eventData.timeto} hrs</p>
                        <p>
                          {(eventData.eventDate + '').slice (5, 7)}
                          {'/'}
                          {(eventData.eventDate + '').slice (8, 10)}
                          {'/'}
                          {(eventData.eventDate + '').slice (0, 4)}
                        </p>
                      </div>
                      <div className="icon">
                        <i className="material-icons">access_time</i>
                      </div>
                    </div>
                  </div>
                  <div className="box-content address">
                    <div className="inner">
                      <div className="text">
                        <span className="label">Address</span>
                        <p>{eventData.location}</p>
                      </div>
                      <div className="icon">
                        <i className="material-icons">location_on</i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="event-content">
                  <h1>Event Description</h1>
                  <p>
                    {eventData.eventDesc}
                  </p>
                  <div className="event-columns-list">
                    <h1>Learning Objectives</h1>
                    <div className="row">
                      <div className="col-12">
                        {eventData.learningObjectives}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="widget buy-widget">
                  <h2>Book your seat</h2>
                  <table>
                    <tbody>
                      <tr>
                        <th>Total Slots:</th>
                        <td>{eventData.totalSlots}</td>
                      </tr>
                      <tr>
                        <th>Booked Slots:</th>
                        <td>{eventData.bookedSlots}</td>
                      </tr>
                    </tbody>
                  </table>
                  <Link className="button-one" to="#">
                    Enroll
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End single-event section */}
    </div>
  );
};

export default EventDetails;
