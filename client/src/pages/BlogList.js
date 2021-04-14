import React, {useState, useEffect} from 'react';
import Header from '../shared/Header';
import {Link} from 'react-router-dom';

const BlogList = () => {
  const [blogData, setBlogData] = useState ([]);
  useEffect (() => {
    fetch ('/allblogs', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (result => {
        console.log (result);
        setBlogData (result.blogs);
      });
  }, []);
  return (
    <div id="container">
      <Header />
      <section className="page-banner-section">
        <div className="container">
          <h1>Blogs</h1>
          <ul className="page-depth">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/allblogslist">Blogs</Link></li>
          </ul>
        </div>
      </section>
      {/* End page-banner-section */}
      {/* blog-section 
    ================================================== */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-box">
            <div className="row">
              {blogData.map (item => {
                return (
                  <div className="col-lg-3 col-md-6">
                    <div className="blog-post">
                      <a href="single-post.html">
                        <img src={item.blog_photo} alt="" />
                      </a>
                      <div className="post-content">
                        <a className="category" href="#">{item.category}</a>
                        <h2>
                          <a href="single-post.html">
                            {item.blogName}
                          </a>
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
              {/* <ul className="page-pagination">
              <li><a href="#"><i className="fa fa-angle-left" /></a></li>
              <li><a href="#" className="active">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#"><i className="fa fa-angle-right" /></a></li>
            </ul> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;
