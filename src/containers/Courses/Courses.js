import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom';
import Course from "../Course/Course";

import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };

  handleArticleClick(id) {
    const course = this.state.courses.find(e=>e.id === id);
    this.props.history.push(`${this.props.match.url}/course/${id}/${encodeURI(course.title)}` );
  }

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map(course => {
            return (
              <article
                className="Course"
                key={course.id}
                onClick={() => this.handleArticleClick(course.id)}
              >
                {course.title}
              </article>
            );
          })}
        </section>
        <section className="Course">
          <Switch>
            <Route
              path={this.props.match.url + "/course/:id/:title"}
              component={Course}
            />
            <Route render={()=><p>Elige un curso</p>} ></Route>
          </Switch>
        </section>
      </div>
    );
  }
}

export default Courses;
