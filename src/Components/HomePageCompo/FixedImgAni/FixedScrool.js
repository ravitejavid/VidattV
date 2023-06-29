import React from "react";
import "./FixedScrool.css";
import { Grid } from "@mui/material";
import scrool1 from "../../../imgs/scrool1.png";
import scrool2 from "../../../imgs/scrool22.jpg";

function FixedScrool() {
  window.addEventListener("scroll", function () {
    let window = this,
      body = document.body,
      sections = document.querySelectorAll(".section");
    let scroll = window.scrollY + window.innerHeight / 3;
    sections.forEach(function (section) {
      if (
        section.offsetTop <= scroll &&
        section.offsetTop + section.offsetHeight > scroll
      ) {
        body.classList.remove("color-");
        sections.forEach(function (section) {
          section.classList.remove("active");
        });
        section.classList.add("active");
      }
    });
  });
  window.dispatchEvent(new Event("scroll"));
  return (
    <div>
      <div className="FixedInBigScreen">
        <div className="scroolHeading1">Our data visualisation transcends</div>
        <div className="scroolHeading1 sc2">the limits of imagination</div>

        <div className="section">
          <div className="section-img">
            <div className="section-img-inner scroimg1"></div>
          </div>
          <div className="section-body">
            <div className="section-text">
              <div className="ScroolText1">Accuracy + power + versataility</div>
              <div className="ScroolText2">
                We use latest advancements in machine learning That paved the
                way for the creation of advanced deep learning models, leading
                to a remarkable system-level accuracy of over 99%.{" "}
              </div>
              <div className="ScroolText3">Try our products</div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-img">
            <div className="section-img-inner scroimg2"></div>
          </div>
          <div className="section-body">
            <div className="section-text">
              <div className="ScroolText1">
                Highly Intuitive & Customizable User Interfaces{" "}
              </div>
              <div className="ScroolText2">
                Single-Pane-Of-Glass Graphical Dashboarding, Real-Time Alerting,
                Post Processing/ Actioning & User-Customizable Views.{" "}
              </div>
              <div className="ScroolText3">Try our products</div>
            </div>
          </div>
        </div>
      </div>

      <div className="FixedInMobileScreen">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <div className="FixedGrid-img">
              <img src={scrool1} alt="" style={{ width: "100%" }} />
            </div>
          </Grid>

          <Grid item xs={12} sm={12}>
            <div className="section-text">
              <div className="ScroolText1">Accuracy + power + versataility</div>
              <div className="ScroolText2">
                We use latest advancements in machine learning That paved the
                way for the creation of advanced deep learning models, leading
                to a remarkable system-level accuracy of over 99%.{" "}
              </div>
              <div className="ScroolText3">Try our products</div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12}>
            <div className="FixedGrid-img">
              <img src={scrool2} alt="" style={{ width: "100%" }} />
            </div>
          </Grid>

          <Grid item xs={12} sm={12}>
            <div className="section-text">
              <div className="ScroolText1">
                Highly Intuitive & Customizable User Interfaces{" "}
              </div>
              <div className="ScroolText2">
                Single-Pane-Of-Glass Graphical Dashboarding, Real-Time Alerting,
                Post Processing/ Actioning & User-Customizable Views.{" "}
              </div>
              <div className="ScroolText3">Try our products</div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default FixedScrool;
