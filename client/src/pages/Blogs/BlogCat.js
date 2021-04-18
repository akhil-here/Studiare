import React, {useEffect, useState} from 'react';
import Header from '../../shared/Header';
import {Link, useParams} from 'react-router-dom';

const BlogCat = () => {
  const [blogData, setBlogData] = useState ([]);
  const {category} = useParams ();

  useEffect (() => {
    fetch (`/allblogs/${category}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (result => {
        console.log (result);
        setBlogData (result);
      });
  }, []);
  return (
    <div id="container">
      {/* Header
		    ================================================== */}
      <Header />
      <section className="page-banner-section">
        <div className="container">
          <h1>Courses</h1>
          <ul className="page-depth">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/allcourseslist">Courses</Link></li>
          </ul>
        </div>
      </section>
      {/* End page-banner-section */}
      {/* courses-section 
			================================================== */}
      <section className="courses-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="courses-top-bar">
                <div className="courses-view">
                  <span>
                    Showing all
                    {' '}
                    {blogData.length}
                    {' '}
                    results
                  </span>
                </div>
              </div>

              <div className="row">
                {blogData.map (item => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="blog-post">

                        <img src={item.blog_photo} alt="" />

                        <div className="post-content">
                          <p className="category">{item.category}</p>
                          <h2>
                            <Link to={'/allblogslist/' + item._id}>
                              {item.blogName}
                            </Link>
                          </h2>
                          <div className="post-meta date">
                            <i className="material-icons">access_time</i>
                            {' '}
                            {item.publishDate.substring (0, 10)}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <div className="category-widget widget">
                  <h2>Product categories</h2>

                  <ul className="category-list">
                    <li>
                      <Link to={`/allblogs/${category}`}>{category} </Link>
                    </li>
                  </ul>
                </div>
                <div className="products-widget widget">
                  <h2>Blogs</h2>
                  <ul className="products-list">
                    {blogData.map (item => {
                      return (
                        <li>
                          <img
                            src={item.blog_photo}
                            className="w-20 h-20"
                            alt=""
                          />
                          <div className="list-content ml-2">
                            <h3>
                              <Link to={'/allblogslist/' + item._id}>
                                {item.blogName}
                              </Link>
                            </h3>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogCat;
