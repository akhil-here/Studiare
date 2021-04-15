import React, {useState, useEffect} from 'react';
import Header from '../../shared/Header';
import {Link} from 'react-router-dom';
const EventList = () => {
  const [eventData, setEventData] = useState ([]);

  const MonthsEnum = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
  };

  useEffect (() => {
    fetch ('/allevents', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (result => {
        console.log (result);
        setEventData (result.events);
      });
  }, []);
  return (
    <div id="container">
      <Header />
      <section className="page-banner-section">
        <div className="container">
          <h1>Events</h1>
          <ul className="page-depth">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/alleventslist">Events</Link></li>
          </ul>
        </div>
      </section>

      <section className="events-section events-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="events-box">
                {eventData.map (item => {
                  return (
                    <div className="events-post">
                      <div className="event-inner-content">
                        <div className="top-part">
                          <div className="date-holder">
                            <div className="date">
                              <span className="date-day">
                                {item.eventDate.slice (8, 10)}
                              </span>
                              <span className="date-month">
                                {MonthsEnum[item.eventDate.slice (5, 7)]}
                              </span>
                            </div>
                          </div>
                          <div className="content">
                            <div className="event-meta">
                              <span className="event-meta-piece start-time">
                                <i className="material-icons">access_time</i>
                                {' '}
                                {item.timefrom}hrs - {item.timeto}hrs
                              </span>
                              <span className="event-meta-piece location">
                                <i className="material-icons">location_on</i>
                                {' '}
                                {item.location}
                              </span>
                            </div>
                            <h2 className="title">
                              {console.log (item._id)}
                              <Link to={'/alleventslist/' + item._id}>
                                {item.eventName}
                              </Link>
                            </h2>
                          </div>
                          {/* <a href="single-event.html" className="events-image">
                            <img src="upload/events/events7.jpg" alt="" />
                          </a> */}
                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">

                <div className="ads-widget widget">
                  <div className="archives-widget widget">
                    <h2>Archives</h2>
                    <ul className="archives-list">
                      {eventData.map (item => {
                        return (
                          <li>
                            <Link to="#">
                              {MonthsEnum[item.eventDate.substring (5, 7)]}
                              ,
                              {item.eventDate.substring (0, 4)}
                            </Link>
                          </li>
                        );
                      })}

                    </ul>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EventList;
