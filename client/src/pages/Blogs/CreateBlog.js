import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {NotificationManager} from 'react-notifications';
import create from '../../images/createblog.webp';

const CreateBlog = () => {
  const history = useHistory ();
  const [blogName, setBlogName] = useState ('');
  const [category, setCategory] = useState ('');
  const [blogContent, setBlogContent] = useState ('');
  const [tags, setTags] = useState ('');
  const [publishDate, setPublishedDate] = useState ('');
  const [blog_photo, setBlogPhoto] = useState ('');
  const [url, setUrl] = useState ('');

  useEffect (
    () => {
      if (url) {
        console.log (
          JSON.stringify ({
            blogName,
            category,
            blogContent,
            tags,
            publishDate,
            blog_photo: url,
          })
        );
        fetch ('/createblog', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
          },
          body: JSON.stringify ({
            blogName,
            category,
            blogContent,
            tags,
            publishDate,
            blog_photo: url,
          }),
        })
          .then (res => res.json ())
          .then (data => {
            //console.log (data);
            if (data.error) {
              NotificationManager.error (data.error);
            } else {
              NotificationManager.success ('Blog created successfully!!');
              history.push ('/home');
            }
          });
      }
    },
    [url]
  );

  const postDetails = () => {
    if (
      !blogName ||
      !category ||
      !blogContent ||
      !tags ||
      !publishDate ||
      !blog_photo
    ) {
      NotificationManager.error ('Please provide all details!!');
      return;
    }
    const data = new FormData ();
    data.append ('file', blog_photo);
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
        <div className="col-xl-7 col-12 flex-column">
          <img src={create} alt="Create blog" className="position-fixed" />
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
                Create Blog
              </h1>
            </div>
            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '2rem',
                  fontWeight: 'bold',
                }}
              >

                Blog Name{' '}
              </label>
              <input
                type="text"
                placeholder="Blog Name goes here..."
                className="form-control border-0 shadow"
                value={blogName}
                onChange={e => setBlogName (e.target.value)}
              />

            </div>

            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '2rem',
                  fontWeight: 'bold',
                }}
              >
                Category{' '}
              </label>
              <input
                type="text"
                placeholder="Category goes here..."
                className="form-control border-0 shadow"
                value={category}
                onChange={e => setCategory (e.target.value)}
              />
            </div>

            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '2rem',
                  fontWeight: 'bold',
                }}
              >

                Blog Content{' '}
              </label>
              <textarea
                type="text"
                placeholder="Blog content goes here..."
                className="form-control border-0 shadow"
                value={blogContent}
                onChange={e => setBlogContent (e.target.value)}
                rows="5"
              />

            </div>

            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '2rem',
                  fontWeight: 'bold',
                }}
              >

                Tags{' '}
              </label>
              <input
                type="text"
                placeholder="Tags goes here..."
                className="form-control border-0 shadow"
                value={tags}
                onChange={e => setTags (e.target.value)}
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

                Date published{' '}
              </label>
              {' '}
              <input
                type="date"
                placeholder="Date published goes here .."
                className="form-control border-0 shadow"
                value={publishDate}
                onChange={e => setPublishedDate (e.target.value)}
              />
            </div>

            <div className="form-group">
              <label
                style={{
                  color: '#201140',
                  fontSize: '1rem',
                  marginTop: '2rem',
                  fontWeight: 'bold',
                }}
              >

                Blog photo{' '}
              </label>
              <input
                type="file"
                className="form-control border-0 shadow"
                onChange={e => setBlogPhoto (e.target.files[0])}
              />

            </div>

            <div className="row form-group align-items-center justify-content-center">

              <button
                className="btn waves-effect shadow mt-2 "
                onClick={() => postDetails ()}
                style={{
                  backgroundColor: '#201140',
                  color: 'white',
                }}
              >

                Create blog{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
