import React, {useState, useEffect} from 'react';
import Header from '../../shared/Header';
import {Link, useParams} from 'react-router-dom';

const BlogDetails = () => {
  const [blogData, setBlogData] = useState ('');
  const {id} = useParams ();

  useEffect (() => {
    fetch (`/allblogslist/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (data => {
        console.log (data);
        setBlogData (data);
      });
  }, []);

  return (
    <div id="container">
      <Header />
      {/* page-banner-section 
                ================================================== */}
      <section className="page-banner-section">
        <div className="container">
          <h1>Blogs</h1>
          <ul className="page-depth">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/allblogslist">Blogs</Link></li>
            <li>
              <Link to={'/allblogslist/' + blogData._id}>
                {blogData.blogName}

              </Link>
            </li>
          </ul>
        </div>
      </section>
      {/* End page-banner-section */}
      {/* blog-section 
                ================================================== */}
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-box">
                <div className="blog-post single-post">
                  <div className="post-content">
                    <h1>{blogData.blogName}</h1>
                    <div className="post-meta date">
                      <i className="material-icons">access_time</i>
                      {' '}
                      {(blogData.publishDate + '').slice (0, 10)}
                    </div>
                    <div className="post-meta user">
                      <i className="material-icons">perm_identity</i>
                      {' '}
                      Posted by
                      {' '}
                      <a href="#">
                        {blogData && blogData.postedBy
                          ? blogData.postedBy.name
                          : null}
                      </a>
                    </div>
                    <div className="post-meta category">
                      <i className="material-icons">folder_open</i>
                      <span>{blogData.category}</span>
                    </div>
                  </div>
                  <img
                    src={blogData.blog_photo}
                    alt=""
                    className="w-100 d-flex text-center justify-content-center align-items-center"
                  />
                  <div className="post-content">
                    <p>{blogData.blogContent}</p>
                    <div className="tags-share-box">
                      <ul className="tags-list">
                        <li><span className="font-weight-bold">Tags:</span></li>
                        <li>{blogData.tags}</li>
                      </ul>
                    </div>
                    <div className="about-author">
                      <div className="image-holder">
                        <img src="./assets/upload/blog/avatar.jpg" alt="" />
                      </div>
                      <div className="author-content">
                        <h2>
                          About
                          {' '}
                          {blogData && blogData.postedBy
                            ? blogData.postedBy.name
                            : null}
                        </h2>
                        <p>
                          Aenean eu justo id magna luctus pulvinar. Quisque vitae scelerisque eros. Pellentesque pretium felis non libero pharetra feugiat id ac sem. Suspendisse ac metus justo.
                        </p>
                        <a className="button-one" href="#">
                          More posts by codebean
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="category-widget widget">
                  <h2>Blog categories</h2>

                  <ul className="category-list">
                    <li>
                      <Link to={`/allblogs/` + blogData._id}>
                        {blogData.category}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="products-widget widget">
                  <h2>Blogs</h2>
                  <ul className="products-list">

                    <li>
                      <img
                        src={blogData.blog_photo}
                        className="w-20 h-20"
                        alt=""
                      />
                      <div className="list-content ml-2">
                        <h3>
                          <Link to={'/allblogslist/' + blogData._id}>
                            {blogData.blogName}
                          </Link>
                        </h3>
                      </div>
                    </li>

                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

      </section>
      {/* End blog section{' '}  */}
    </div>
  );
};

export default BlogDetails;
