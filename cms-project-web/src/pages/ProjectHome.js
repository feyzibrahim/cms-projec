import React from "react";
import firstImg from "../img/64.png";
import secondImg from "../img/103.png";
import thirdImg from "../img/152.png";
import dp1 from "../img/dp1.png";

const ProjectHome = () => {
  return (
    <div className="proHome">
      <div className="firstSession">
        <div className="firstSessionLeft">
          <h1>College Management System</h1>
          <p>
            Manage your institute just using e_campus, Subscribe to a plan to
            get the full access to our website.
          </p>
          <button className="fullColeredButton">Get Started</button>
        </div>
        <div className="firstSessionRight">
          <img src={firstImg} alt="Some Guy looking over computer" />
        </div>
      </div>

      <div className="secondSession">
        <h2>How it Works</h2>
        <div className="workHead">
          <div className="work">
            <div className="workCircle">
              <h1>1</h1>
            </div>
            <h3>Register Your Institute</h3>
            <p>
              Just signup the website as a normal website. Use preffered gmail
              id and password to signup
            </p>
            <a href="/">Learn More</a>
          </div>
          <div className="work">
            <div className="workCircle">
              <h1>2</h1>
            </div>
            <h3>Add your staff & Students</h3>
            <p>
              Attendence, Salary, Internals, Time table,... Can be assigned and
              managed easily
            </p>
            <a href="/">Learn More</a>
          </div>
          <div className="work">
            <div className="workCircle">
              <h1>3</h1>
            </div>
            <h3>Download Now</h3>
            <p>
              Just signup the website as a normal website. Use preffered gmail
              id and password to signup
            </p>
            <a href="/">Learn More</a>
          </div>
        </div>
      </div>

      <div className="thirdSession">
        <h1>Simplify the Manual Book Keeping</h1>
        <p>
          Available on App Store & Playstore. Click here to see the link for
          respective stores{" "}
        </p>
        <button className="fullColeredButton">Sign Up Now</button>
        <img src={secondImg} alt="Something" />
      </div>

      <div className="forthSession">
        <h2>Choose a plan</h2>
        <div className="planHead">
          <div className="plan">
            <p>FREE</p>
            <h3>Basic</h3>
            <p>All the basic for college mangement that just get started </p>
            <p>10 Teacher</p>
            <p>100 Students</p>
            <p>Analytical Page</p>
            <button className="fullColeredButton">Get Started</button>
          </div>
          <div className="plan">
            <p>₹10/User</p>
            <h3>Standard</h3>
            <p>All the basic for college mangement that just get started </p>
            <p>50 Teacher</p>
            <p>500 Students</p>
            <p>Analytical Page</p>
            <button className="fullColeredButton">Get Started</button>
          </div>
          <div className="plan">
            <p>₹1200/Month</p>
            <h3>Premium</h3>
            <p>All the basic for college mangement that just get started </p>
            <p>Unlimited Teacher</p>
            <p>Unlimited Students</p>
            <p>Analytical Page</p>
            <button className="fullColeredButton">Get Started</button>
          </div>
        </div>
      </div>

      <div className="fifthSession">
        <div className="fifthSessionRight">
          <img src={thirdImg} alt="Some Guy looking over computer" />
        </div>
        <div className="fifthSessionLeft">
          <h1>View The Statistics Graphically</h1>
          <p>
            Most of the data is represented graphically in order to help you
            visibly see the datas and make decisions accordingly
          </p>
          <button className="fullColeredButton">Get Started</button>
        </div>
      </div>

      <div className="sixthSession">
        <h2>Testimonies</h2>
        <div className="testHead">
          <div className="test">
            <div className="testimon">
              <div className="testiImg">
                <img src={dp1} alt="DP" />
              </div>
              <div className="testiWord">
                <p>
                  "It is very good app. it has made the communication easyas a
                  teachers all the features are good and easy to manage the
                  system "
                </p>
              </div>
            </div>
            <div className="testiRating">
              <div className="testiDetails">
                <p id="textUsername">Robert Fox</p>
                <p>Principal AWS College</p>
              </div>
              <div className="testStar"></div>
            </div>
          </div>
          <div className="test">
            <div className="testimon">
              <div className="testiImg">
                <img src={dp1} alt="DP" />
              </div>
              <div className="testiWord">
                <p>
                  "It is very good app. it has made the communication easyas a
                  teachers all the features are good and easy to manage the
                  system "
                </p>
              </div>
            </div>
            <div className="testiRating">
              <div className="testiDetails">
                <p id="textUsername">Robert Fox</p>
                <p>Principal AWS College</p>
              </div>
              <div className="testStar"></div>
            </div>
          </div>
          <div className="test">
            <div className="testimon">
              <div className="testiImg">
                <img src={dp1} alt="DP" />
              </div>
              <div className="testiWord">
                <p>
                  "It is very good app. it has made the communication easyas a
                  teachers all the features are good and easy to manage the
                  system "
                </p>
              </div>
            </div>
            <div className="testiRating">
              <div className="testiDetails">
                <p id="textUsername">Robert Fox</p>
                <p>Principal AWS College</p>
              </div>
              <div className="testStar"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="question">
        <h1>Do you Have any Question</h1>
        <p>put your email address and get started</p>
        <div className="questionEmail">
          <input type="text" />
          <button className="fullColeredButton"> Send</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectHome;
