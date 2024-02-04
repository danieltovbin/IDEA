import React from "react";
import "./bottomPage.scss";
const BottomPage = () => {
  return (
    <div className="bottomPageDiv">
      <div className="mainDiv">
        <div className="top">
          <div className="list1">
            <ul>
              <h4>Nice to Meet</h4>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>The Start Academy</li>
              <li>Accessibility arrangements</li>
              <li>Our podcast</li>
            </ul>
          </div>
          <div className="list2">
            <ul>
              <h4> Entrepreneurs</h4>

              <li>Questions and Answers</li>
              <li>Collaborations</li>
              <li>Marketing aids</li>
              <li>How It Works?</li>
              <li>Why the start?</li>
              <li>Guide for entrepreneurs</li>
              <li>Our workshops</li>
            </ul>
          </div>
          <div className="list3">
            <ul>
              <h4> Idea group</h4>
              <li>fundit</li>
              <li>giveback</li>
              <li>beactive</li>
              <li>Idea Group giftcard</li>
            </ul>
          </div>
          <div className="connectUs"></div>
        </div>
        <div className="ourPolicy">
          <div className="logo">
            <img src="../../../public/image/IDEA ICON .png" alt="" />
          </div>
          <div className="policyLinks">
            <a>Private policy</a>
            <a>Projects policy</a>
            <a>Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomPage;
