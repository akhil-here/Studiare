import React, { Component } from 'react';

class Card extends Component{
    render(){
        return(
            <div>
                <div className="collection-post">
                  <div className="inner-collection">
                  <img src='{this.props.path}' alt="" />
                    <a href="/" className="hover-post">
                      <span className="title">{this.props.title}</span>
                      <span className="numb-courses">{this.props.count} Courses</span>
                    </a>
                  </div>
                </div>
            </div>
        );
    }
}

export default Card;

