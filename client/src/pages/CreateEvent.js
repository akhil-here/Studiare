import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import create from '../images/createevent.webp';
import {NotificationManager} from 'react-notifications';

const CreateEvent = () => {
  const history = useHistory ();
  const [eventName, setEventName] = useState ('');
  const [timefrom, setTimeFrom] = useState ('');
  const [timeto, setTimeTo] = useState ('');
  const [location, setLocation] = useState ('');
  const [date, setDate] = useState ('');
  const [totalSlots, setTotalSlots] = useState ('');
  const [cost, setCost] = useState ('');
  const [bookedSlots, setBookedSlots] = useState ('');
  const [quantity, setQuantity] = useState ('');
  const [payMode, setPaymode] = useState ('');
  const [eventDesc, setEventDescription] = useState ('');
  const [learningObjectives, setLearningObjectives] = useState ('');
  const [eventImage, setEventImage] = useState ('');
  const [url, setUrl] = useState ('');

  useEffect (
    () => {
      if (url) {
        console.log (
          JSON.stringify ({
            eventName,
            timefrom,
            timeto,
            location,
            date,
            totalSlots,
            cost,
            bookedSlots,
            quantity,
            payMode,
            eventDesc,
            learningObjectives,
            eventImage: url,
          })
        );
        fetch ('/createevent', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
          },
          body: JSON.stringify ({
            eventName,
            timefrom,
            timeto,
            location,
            date,
            totalSlots,
            cost,
            bookedSlots,
            quantity,
            payMode,
            eventDesc,
            learningObjectives,
            eventImage: url,
          }),
        })
          .then (res => res.json ())
          .then (data => {
            if (data.error) {
              NotificationManager.error (data.error);
            } else {
              console.log (data);
              NotificationManager.success ('Created event successfully!!');
              history.push ('/home');
            }
          });
      }
    },
    [url]
  );

  const postDetails = () => {
    const data = new FormData ();
    data.append ('file', eventImage);
    data.append ('upload_preset', 'studiare');
    data.append ('cloud_name', 'studiare');
    fetch ('https://api.cloudinary.com/v1_1/studiare/image/upload', {
      method: 'post',
      body: data,
    })
      .then (res => res.json ())
      .then (data => {
        console.log (data.url);
        setUrl (data.url);
      })
      .catch (err => {
        console.log (err);
      });
  };

  return (
    <div>
      <div className="row d-flex mx-auto justify-content-center">
        <div className="col-xl-7 col-12 flex-column ">
          <img src={create} alt="Create course" className="position-fixed" />
        </div>
        <div className="col-xl-5 col-12 d-flex align-items-center justify-content-center flex-column">
          <div className="w-75">
            <div className="form-group">
              <h1
                className="font-weight-bold py-4 text-center"
                style={{
                  fontSize: '3rem',
                  color: '#201140',
                  letterSpacing: 1,
                }}
              >
                Create Event
              </h1>
            </div>
            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Event Name{' '}
              </label>
              <input
                type="text"
                placeholder="Event name goes here..."
                className="form-control border-0 shadow"
                value={eventName}
                onChange={e => setEventName (e.target.value)}
              />
            </div>
            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >

                Time from{' '}
              </label>
              <input
                type="time"
                placeholder="Time from goes here..."
                className="form-control border-0 shadow"
                value={timefrom}
                onChange={e => setTimeFrom (e.target.value)}
              />

            </div>

            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >

                Time to{' '}
              </label>
              <input
                type="time"
                placeholder="Time till goes here..."
                className="form-control border-0 shadow"
                value={timeto}
                onChange={e => setTimeTo (e.target.value)}
              />

            </div>
            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >

                Location{' '}
              </label>
              <input
                type="text"
                placeholder="Location goes here..."
                className="form-control border-0 shadow"
                value={location}
                onChange={e => setLocation (e.target.value)}
              />

            </div>
            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '.4rem',
                  fontWeight: 'bold',
                }}
              >
                Date{' '}
              </label>
              <input
                type="date"
                placeholder="Date of event goes here..."
                className="form-control border-0 shadow"
                value={date}
                onChange={e => setDate (e.target.value)}
              />
            </div>
            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',

                  fontWeight: 'bold',
                }}
              >

                Total Slots{' '}
              </label>
              <input
                type="number"
                placeholder="Total slots available goes here..."
                className="form-control border-0 shadow"
                value={totalSlots}
                onChange={e => setTotalSlots (e.target.value)}
              />

            </div>

            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Cost{' '}
              </label>
              {' '}
              <input
                type="number"
                placeholder="Cost goes here.."
                className="form-control border-0 shadow"
                value={cost}
                onChange={e => setCost (e.target.value)}
              />
            </div>

            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Booked Slots{' '}
              </label>
              {' '}
              <input
                type="number"
                placeholder="Booked slots goes here.."
                className="form-control border-0 shadow"
                value={bookedSlots}
                onChange={e => setBookedSlots (e.target.value)}
              />
            </div>

            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Quantity{' '}
              </label>
              {' '}
              <input
                type="number"
                placeholder="Quantity goes here.."
                className="form-control border-0 shadow"
                value={quantity}
                onChange={e => setQuantity (e.target.value)}
              />
            </div>

            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Payment Mode{' '}
              </label>
              {' '}
              <input
                type="text"
                placeholder="Payment mode goes here.."
                className="form-control border-0 shadow"
                value={payMode}
                onChange={e => setPaymode (e.target.value)}
              />
            </div>

            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Event description{' '}
              </label>
              {' '}
              <input
                type="text"
                placeholder="Event description goes here.."
                className="form-control border-0 shadow"
                value={eventDesc}
                onChange={e => setEventDescription (e.target.value)}
              />
            </div>

            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Learning Objectives{' '}
              </label>
              {' '}
              <input
                type="text"
                placeholder="Learning outcomes goes here.."
                className="form-control border-0 shadow"
                value={learningObjectives}
                onChange={e => setLearningObjectives (e.target.value)}
              />
            </div>

            <div className="form-group">

              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Upload image
              </label>
              <input
                type="file"
                className="form-control border-0 shadow"
                onChange={e => setEventImage (e.target.files[0])}
              />
            </div>
            <div className="row form-group align-items-center justify-content-center">

              <button
                className="btn waves-effect shadow mt-2 "
                style={{
                  backgroundColor: '#ffb037',
                  color: 'white',
                }}
                onClick={() => postDetails ()}
              >
                Create Event{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
