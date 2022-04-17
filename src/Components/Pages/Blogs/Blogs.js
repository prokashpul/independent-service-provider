import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className="blog-header">
        <h1> Blogs & FAQ</h1>
      </div>
      <div className="blogs">
        <article className="blog">
          <img
            src="https://i.ibb.co/dkMBgzF/5471047557-4dc13f5376-n.jpg"
            alt="what"
          />
          <div className=" blog-text">
            <h2>
              what is the difference between authentication and authorization?
            </h2>
            <div className="answer">
              <p>
                1. Authentication process is a way of identifying user and
                Authorization is a process of alow application monetization,data
                access, file etc edit and updating.
              </p>
              <p>
                2. Authentication user identify and access to management process
                and Authentication can be use admin update and setting implement
                by the organization
              </p>
              <p>
                3. Authentication is direct to and in part change the user,
                Authentication is not direct to and in part change the user.
              </p>
            </div>
          </div>
        </article>

        <article className="blog">
          <img
            src="https://i.ibb.co/dkMBgzF/5471047557-4dc13f5376-n.jpg"
            alt="what"
          />
          <div className=" blog-text">
            <h2>Why are you using firebase?</h2>
            <div className="answer">
              <p>
                Firebase is the most popular Authentication provider by google.
                firebase provide functionalities and help to maintains back end
                development very easy.it"s Authentication is security is very
                strong . firebase all services are very unfriendly . there are
                so many functionalities incudes firebase that's are help to
                development apps,ios,web etc.
              </p>
              <h4>
                What other options do you have to implement authentication?
              </h4>
              <p>1.Parse</p> <p>2.Back4App</p>
              <p> 3.AWS Amplify</p>
              <p> 4.NativeScript</p>
              <p> 5.RxDB.</p>
            </div>
          </div>
        </article>

        <article className="blog">
          <img
            src="https://i.ibb.co/dkMBgzF/5471047557-4dc13f5376-n.jpg"
            alt="what"
          />
          <div className=" blog-text">
            <h2>
              What other services does firebase provide other than
              authentication?
            </h2>
            <div className="answer">
              <p>1. Hosting.</p>
              <p>2.Functions</p>
              <p>3.Machine Learning</p>
              <p>4.Storage</p>
              <p>4.Database Storage</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blogs;
