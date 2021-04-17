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
                      <a href="#">{blogData.postedBy}</a>
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
                        <h2>About {blogData.postedBy}</h2>
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
                <div className="post-nav">
                  <div className="post-nav-btn prev-btn">
                    <a href="#" className="post-nav-link prev">
                      <i className="material-icons">arrow_back</i>
                      <span>Newer</span>
                      Reflections for the Season of Advent
                    </a>
                  </div>
                  <div className="post-nav-btn next-btn">
                    <a href="#" className="post-nav-link next">
                      <i className="material-icons">arrow_forward</i>
                      <span>Older</span>
                      Couple Of Happy College Students Graduated
                    </a>
                  </div>
                </div>
                <div className="comments-holder">
                  <h2>4 Comments</h2>
                  <p>Join the discussion and tell us your opinion.</p>
                  <ul className="comment-list">
                    <li>
                      <div className="image-holder">
                        <img src="./assets/upload/blog/avatar4.jpg" alt="" />
                      </div>
                      <div className="comment-content">
                        <h2>
                          Marcy Washington
                          <span>June 14, 2018</span>
                          <a href="#">
                            <i className="fa fa-commenting-o" />Reply
                          </a>
                        </h2>
                        <p>
                          Learnt a lot about masks too. Thank you for sharing.
                        </p>
                      </div>
                      <ul className="depth-comment">
                        <li>
                          <div className="image-holder">
                            <img
                              src="./assets/upload/blog/avatar2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="comment-content">
                            <h2>
                              Caleb Torres
                              <span>June 14, 2018</span>
                              <a href="#">
                                <i className="fa fa-commenting-o" />Reply
                              </a>
                            </h2>
                            <p>Nice result Caroline! Glad you enjoyed it</p>
                          </div>
                          <ul className="depth-comment">
                            <li>
                              <div className="image-holder">
                                <img
                                  src="./assets/upload/blog/avatar4.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="comment-content">
                                <h2>
                                  Marcy Washington
                                  <span>June 14, 2018</span>
                                  <a href="#">
                                    <i className="fa fa-commenting-o" />Reply
                                  </a>
                                </h2>
                                <p>This was great thank you Caleb</p>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="image-holder">
                        <img src="./assets/upload/blog/avatar3.jpg" alt="" />
                      </div>
                      <div className="comment-content">
                        <h2>
                          Andrew
                          <span>June 14, 2018</span>
                          <a href="#">
                            <i className="fa fa-commenting-o" />Reply
                          </a>
                        </h2>
                        <p>
                          Great article. I think that companies create their strongest user advocates when designers and developers understand the value of great user experience.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <form className="comment-form">
                  <h2>Leave a Reply</h2>
                  <p>Logged in as besimdauti24. <a href="#">Log out?</a></p>
                  <label>Comment</label>
                  <textarea defaultValue={''} />
                  <button type="submit">
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-5">
              <div className="sidebar">
                <div className="search-widget widget">
                  <form className="search-form">
                    <input
                      type="search"
                      className="search-field"
                      placeholder="Enter keyword..."
                    />
                    <button type="submit" className="search-submit">
                      <i className="material-icons">search</i>
                    </button>
                  </form>
                </div>
                <div className="ads-widget widget">
                  <a href="#">
                    <img src="./assets/upload/blog/ad-banner.jpg" alt="" />
                  </a>
                </div>
                <div className="category-widget widget">
                  <h2>Categories</h2>
                  <ul className="category-list">
                    <li><a href="#">Academics</a></li>
                    <li><a href="#">Advertisement</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Campus Life</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Government</a></li>
                    <li><a href="#">Schools</a></li>
                    <li><a href="#">Uncategorized</a></li>
                  </ul>
                </div>
                <div className="tags-widget widget">
                  <h2>Tags</h2>
                  <ul className="tags-list">
                    <li><a href="#">codebean</a></li>
                    <li><a href="#">course</a></li>
                    <li><a href="#">parents</a></li>
                    <li><a href="#">schools</a></li>
                    <li><a href="#">students</a></li>
                    <li><a href="#">teacher</a></li>
                    <li><a href="#">theme</a></li>
                    <li><a href="#">wordpress</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End blog section{' '} */}
    </div>
  );
};

export default BlogDetails;
