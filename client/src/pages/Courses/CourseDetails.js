import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import addItems from '../../redux/actions/addItems';
import Header from '../../shared/Header';
import {Link, useParams} from 'react-router-dom';

const CourseDetails = props => {
  const [courseData, setCourseData] = useState ('');
  const {id} = useParams ();

  useEffect (() => {
    fetch (`/allcourseslist/${id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem ('jwt'),
      },
    })
      .then (res => res.json ())
      .then (data => {
        console.log (data);
        setCourseData (data);
      });
  }, []);

  return (
    <div id="container">
      <Header />
      {/* page-banner-section 
			================================================== */}
      <section className="page-banner-section">
        <div className="container">

          <h1>{courseData.course_name}</h1>

          <ul className="page-depth">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/allcourseslist">Courses</Link></li>
            <li>

              <Link to={'/allcourseslist/' + courseData._id}>
                {courseData.course_name}
              </Link>
            </li>
          </ul>
        </div>
      </section>
      {/* End page-banner-section */}
      {/* single-course-section 
			================================================== */}
      <section className="single-course-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-course-box">
                {/* single top part */}
                <div className="product-single-top-part">
                  <div className="product-info-before-gallery">
                    <div className="course-author before-gallery-unit">
                      <div className="icon">
                        <i className="material-icons">account_box</i>
                      </div>
                      <div className="info">
                        <span className="label">Teacher</span>
                        <div className="value">
                          <a href="/SingleTeacher">Michael Arnett</a>
                        </div>
                      </div>
                    </div>
                    <div className="course-category before-gallery-unit">
                      <div className="icon">
                        <i className="material-icons">bookmark_border</i>
                      </div>
                      <div className="info">
                        <span className="label">Category</span>
                        <div className="value">
                          <span>{courseData.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="course-rating before-gallery-unit">
                      <div className="star-rating has-ratings">
                        <span className="rating">4.50</span>
                        <span className="votes-number">2 Votes</span>
                      </div>
                    </div>
                  </div>
                  <div className="course-single-gallery">
                    <video
                      id="videoPlayer"
                      width="780"
                      controls
                      controlsList="nodownload"
                      muted="muted"
                      autoplay
                    >
                      <source
                        src="http://localhost:8000/video"
                        type="video/mp4"
                      />
                    </video>
                    {/* <img src="./assets/upload/courses/4.jpg" alt="" /> */}
                  </div>
                </div>
                {/* single course content */}
                <div className="single-course-content">
                  <h2>What Will I Learn?</h2>
                  <p>
                    Improve your productivity, get things done, and find more time for what’s most important with Time Management Tips. This weekly series provides actionable time management techniques to help people better manage their time and ultimately become more productive. Time management expert Dave Crenshaw provides a new tip every Monday, touching on a wide variety of topics. Tune in to learn about everything from managing emails and calendars to setting priorities, collaborating with coworkers, reducing interruptions, crafting a “productivity mindset,” and creating a more comfortable and effective work environment.
                  </p>
                  <h2>Learning Objectives</h2>
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="list">
                        {courseData.learning_objectives}
                        {/* <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Nullam condimentum metus quis magna egestas</li>
                        <li>Mauris lobortis metus in pharetra posuere</li>
                        <li>Suspendisse sed est luctus nibh tempor</li> */}
                      </ul>
                    </div>

                  </div>
                  <h2>Prior Knowledge</h2>
                  <p>
                    {courseData.pre_req}
                    {/* Improve your productivity, get things done, and find more time for what’s most important with Time Management Tips. This weekly series provides actionable time management techniques to help people better manage their time and ultimately become more productive. Time management expert Dave Crenshaw provides a new tip every Monday, touching on a wide variety of topics. */}
                  </p>
                  {/* course section */}
                  <div className="course-section">
                    <h3>1. Introduction</h3>
                    <div className="panel-group">
                      <div className="course-panel-heading">
                        <div className="panel-heading-left">
                          <div className="course-lesson-icon">
                            <i className="fa fa-play-circle-o" />
                          </div>
                          <div className="title">
                            <h4>
                              1.1 Introduction
                              {' '}
                              <span className="badge-item video">video</span>
                            </h4>
                            <p className="subtitle">01:10</p>
                          </div>
                        </div>
                        <div className="panel-heading-right">
                          <a
                            className="video-lesson-preview preview-button"
                            href="https://www.youtube.com/watch?v=4BJY-bgHqtI"
                          >
                            <i className="fa fa-play-circle" />Preview
                          </a>
                        </div>
                      </div>
                      <div className="panel-content">
                        <div className="panel-content-inner">
                          Welcome to How to Customize a Logo Sting! In this course you’ll learn how to take a basic After Effects sting logo treatment and customise it to work for your brand. Are you new to After Effects? No worries! This course is designed for people who are new to After Effects or have never used it!
                        </div>
                      </div>
                      <div className="course-panel-heading">
                        <div className="panel-heading-left">
                          <div className="course-lesson-icon">
                            <i className="fa fa-files-o" />
                          </div>
                          <div className="title">
                            <h4>
                              Project Files
                              <span className="badge-item practice">
                                practice
                              </span>
                            </h4>
                            <p className="subtitle">
                              Accessing the project files
                            </p>
                          </div>
                        </div>
                        <div className="panel-heading-right">
                          <div className="private-lesson">
                            <i className="fa fa-lock" />
                            <span>Private</span>
                          </div>
                        </div>
                      </div>
                      <div className="panel-content">
                        <div className="panel-content-inner">
                          This lesson is private, for full access to all lessons you need to buy this course.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end course section */}
                  {/* course section */}
                  <div className="course-section">
                    <h3>2. Getting Started</h3>
                    <div className="panel-group">
                      <div className="course-panel-heading">
                        <div className="panel-heading-left">
                          <div className="course-lesson-icon">
                            <i className="fa fa-play-circle-o" />
                          </div>
                          <div className="title">
                            <h4>
                              2.1 After Effects Tour
                              {' '}
                              <span className="badge-item free">free</span>
                            </h4>
                            <p className="subtitle">
                              Quick tour of the After Effects interface
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel-content">
                        <div className="panel-content-inner">
                          {' '}
                          In this lesson you are going to open up the project, get a quick tour of the After Effects interface, and learn how the project is organized. After Effects is a massive application, but this lesson is only going to focus on what you need to know to work with this logo sting project!
                        </div>
                      </div>
                      <div className="course-panel-heading">
                        <div className="panel-heading-left">
                          <div className="course-lesson-icon">
                            <i className="fa fa-play-circle-o" />
                          </div>
                          <div className="title">
                            <h4>2.2 Layers, Comps, and Precomps</h4>
                            <p className="subtitle">08:57</p>
                          </div>
                        </div>
                        <div className="panel-heading-right">
                          <div className="private-lesson">
                            <i className="fa fa-lock" /><span>Private</span>
                          </div>
                        </div>
                      </div>
                      <div className="panel-content">
                        <div className="panel-content-inner">
                          {' '}
                          This lesson is private, for full access to all lessons you need to buy this course.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end course section */}
                  {/* course section*/}
                  <div className="course-section">
                    <h3>3. Customize!</h3>
                    <div className="panel-group">
                      <div className="course-panel-heading">
                        <div className="panel-heading-left">
                          <div className="course-lesson-icon">
                            <i className="fa fa-download" />
                          </div>
                          <div className="title">
                            <h4>
                              3.1 Logo Replacement
                              {' '}
                              <span className="badge-item lecture">
                                lecture
                              </span>
                            </h4>
                            <p className="subtitle">14:40</p>
                          </div>
                        </div>
                        <div className="panel-heading-right">
                          <div className="private-lesson">
                            <i className="fa fa-lock" />
                            <span>Private</span>
                          </div>
                        </div>
                      </div>
                      <div className="panel-content">
                        <div className="panel-content-inner">
                          {' '}
                          This lesson is private, for full access to all lessons you need to buy this course.
                        </div>
                      </div>
                      <div className="course-panel-heading">
                        <div className="panel-heading-left">
                          <div className="course-lesson-icon">
                            <i className="fa fa-play-circle-o" />
                          </div>
                          <div className="title">
                            <h4>3.2 Color Tweaks</h4>
                            <p className="subtitle">03:54</p>
                          </div>
                        </div>
                        <div className="panel-heading-right">
                          <a
                            className="video-lesson-preview preview-button"
                            href="https://www.youtube.com/watch?v=4BJY-bgHqtI"
                          >
                            <i className="fa fa-play-circle" />Preview
                          </a>
                          <div className="private-lesson">
                            <i className="fa fa-lock" />
                            <span>Private</span>
                          </div>
                        </div>
                      </div>
                      <div className="panel-content">
                        <div className="panel-content-inner">
                          {' '}
                          This lesson is private, for full access to all lessons you need to buy this course.
                        </div>
                      </div>
                      <div className="course-panel-heading">
                        <div className="panel-heading-left">
                          <div className="course-lesson-icon">
                            <i className="fa fa-play-circle-o" />
                          </div>
                          <div className="title">
                            <h4>
                              3.3 Adding Music
                              {' '}
                              <span className="badge-item video">video</span>
                            </h4>
                            <p className="subtitle">09:13</p>
                          </div>
                        </div>
                        <div className="panel-heading-right">
                          <div className="private-lesson">
                            <i className="fa fa-lock" />
                            <span>Private</span>
                          </div>
                        </div>
                      </div>
                      <div className="panel-content">
                        <div className="panel-content-inner">
                          {' '}
                          This lesson is private, for full access to all lessons you need to buy this course.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end course section */}
                  {/* course section*/}
                  <div className="course-section">
                    <h3>4. Wrapping Up</h3>
                    <div className="panel-group">
                      <div className="course-panel-heading">
                        <div className="panel-heading-left">
                          <div className="course-lesson-icon">
                            <i className="fa fa-question-circle" />
                          </div>
                          <div className="title">
                            <h4>
                              4.1 Export &amp; Practice
                              {' '}
                              <span className="badge-item quiz">quiz</span>
                            </h4>
                            <p className="subtitle">Course quiz</p>
                          </div>
                        </div>
                      </div>
                      <div className="panel-content">
                        <div className="panel-content-inner">
                          {' '}
                          Now you have your logo sting modified with your logo and a short musical sting, you need to get it out of After Effects so you can use it in other projects. In this lesson you’ll learn how to setup a render and export your video!
                        </div>
                      </div>
                      <div className="course-panel-heading">
                        <div className="panel-heading-left">
                          <div className="course-lesson-icon">
                            <i className="fa fa-trophy" />
                          </div>
                          <div className="title">
                            <h4>4.2 Conclusion</h4>
                            <p className="subtitle">03:17</p>
                          </div>
                        </div>
                      </div>
                      <div className="panel-content">
                        <div className="panel-content-inner">
                          {' '}
                          Congratulations on customizing this logo sting and exporting it out of After Effects! In this last lesson I will share some tips and ideas for even more customization!
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end course section */}
                </div>
                {/* end single course content */}
                {/* course reviews */}
                <div className="course-reviews">
                  <div className="course-review-title">
                    <h3>
                      <i className="material-icons">chat_bubble_outline</i>
                      Student Reviews
                    </h3>
                  </div>
                  <div className="course-reviews-inner">
                    <div className="ratings-box">
                      <div className="rating-average">
                        <p>Average rating</p>
                        <div className="average-box">
                          <span className="num">4.5</span>
                          <span className="ratings">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half-o" />
                          </span>
                          <span className="txt">2 Ratings</span>
                        </div>
                      </div>
                      <div className="detailed-rating">
                        <p>Detailed Rating</p>
                        <div className="detailed-box">
                          <ul className="detailed-lines">
                            <li>
                              <span>5 Stars</span>
                              <div className="outer">
                                <span
                                  className="inner-fill"
                                  style={{width: '50%'}}
                                />
                              </div>
                              <span>1</span>
                            </li>
                            <li>
                              <span>4 Stars</span>
                              <div className="outer">
                                <span
                                  className="inner-fill"
                                  style={{width: '50%'}}
                                />
                              </div>
                              <span>1</span>
                            </li>
                            <li>
                              <span>3 Stars</span>
                              <div className="outer">
                                <span className="inner-fill" />
                              </div>
                              <span>0</span>
                            </li>
                            <li>
                              <span>2 Stars</span>
                              <div className="outer">
                                <span className="inner-fill" />
                              </div>
                              <span>0</span>
                            </li>
                            <li>
                              <span>1 Stars</span>
                              <div className="outer">
                                <span className="inner-fill" />
                              </div>
                              <span>0</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <ul className="comments">
                      <li>
                        <div className="image-holder">
                          <img src="./assets/upload/blog/avatar4.jpg" alt="" />
                        </div>
                        <div className="comment-content">
                          <h2>
                            Steven Smith
                            <span className="rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star-o" />
                            </span>
                          </h2>
                          <p>top design</p>
                        </div>
                      </li>
                      <li>
                        <div className="image-holder">
                          <img src="./assets/upload/blog/avatar4.jpg" alt="" />
                        </div>
                        <div className="comment-content">
                          <h2>
                            Margaret
                            <span className="rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </span>
                          </h2>
                          <p>Easy to install, reasonable price!</p>
                        </div>
                      </li>
                    </ul>
                    <form className="add-review">
                      <h1>Add a Review</h1>
                      <label>Your rating</label>
                      <select>
                        <option>Rate...</option>
                        <option>Perfect</option>
                        <option>Good</option>
                        <option>Average</option>
                        <option>Not that bad</option>
                        <option>Very Poor</option>
                      </select>
                      <label>Your Review</label>
                      <textarea defaultValue={''} />
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                </div>
                {/* end course reviews */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="widget course-widget">
                  <p className="price">
                    <span className="price-label">Price</span>
                    <span className="amount">
                      {/* <del>$39.99</del>  */}
                      ₹{courseData.price}
                    </span>
                  </p>
                  <Link
                    className="button-one"
                    to="/cart"
                    onClick={() => {
                      props.addItemHandler ({
                        product: courseData.course_name,
                        id: courseData._id,
                        price: courseData.price,
                        photo: courseData.course_photo,
                      });
                    }}
                  >
                    Take this course
                  </Link>
                  <div className="product-meta-info-list">
                    <h3>Course Features</h3>
                    <div className="meta-info-unit">
                      <div className="icon">
                        <i className="material-icons">language</i>
                      </div>
                      <div className="value">Language: </div>
                    </div>
                    <div className="meta-info-unit">
                      <div className="icon">
                        <i className="material-icons">access_time</i>
                      </div>
                      <div className="value">
                        {courseData.no_of_hours} hours on-demand video
                      </div>
                    </div>
                    <div className="meta-info-unit">
                      <div className="icon">
                        <i className="material-icons">playlist_add_check</i>
                      </div>
                      <div className="value">11 Lessons</div>
                    </div>
                    <div className="meta-info-unit">
                      <div className="icon">
                        <i className="material-icons">spellcheck</i>
                      </div>
                      <div className="value">Study Level: Intermediate</div>
                    </div>
                    <div className="meta-info-unit">
                      <div className="icon">
                        <i className="material-icons">terrain</i>
                      </div>
                      <div className="value">Certificate of Completion</div>
                    </div>
                  </div>
                  <ul className="share-list">
                    <li><span>Share:</span></li>
                    <li>
                      <a href="#" className="facebook">
                        <i className="fa fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="google">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="linkedin">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget profile-widget">
                  <div className="top-part">
                    <img
                      src="./assets/upload/teachers/teacher4-thumb.jpg"
                      alt="Leslie Williams"
                    />
                    <div className="name">
                      <h3>Leslie Williams</h3>
                      <span className="job-title">Math</span>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      Donec tortor massa, dapibus sit amet massa ut, tincidunt dapibus neque. Morbi ac mauris lorem.
                    </p>
                    <a href="/SingleTeacher" className="text-link">
                      View full profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/* End single-course section */}
    </div>
  );
};

// export default CourseDetails;

const mapStateToProps = state => {
  return {
    newState: state._cartItems,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemHandler: item => dispatch (addItems (item)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (CourseDetails);
