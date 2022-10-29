import React, { useState } from "react";
import { Row, Col, Dropdown } from "antd";
import styles from "./home.module.sass";
import logo from "../../assets/msLogo.png";
import lens from "../../assets/lens.png";
import Navbar from "../navbar/Navbar";

function Home() {
  //   const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className={`container`}>
      <Row className={`h-100`}>
        <Col xs={12} sm={12} md={8} lg={5} xl={4}>
          <img src={logo} alt="Logo" height={"60px"} />
        </Col>
        <Col xs={0} sm={0} md={8} lg={6} xl={6}>
          <div
            className={`d-flex justify-content-around align-items-center h-100 ${styles.homeNavLinks}`}
          >
            <a href="#">Images</a>
            <a href="#">Video</a>
            <a href="#">Translate</a>
            <a href="#">...</a>
          </div>
        </Col>
        <Col xs={12} sm={12} md={8} lg={13} xl={14}>
          <div
            className={`d-flex justify-content-end align-items-center h-100 ${styles.homeUserContainer}`}
          >
            <a href="#">SignIn</a>
            <i
              className="fa fa-user-circle-o px-3 cursor-pointer"
              style={{ fontSize: "30px" }}
            ></i>
            <Dropdown overlay={<Navbar />} trigger={["click"]}>
              <i
                className="fa fa-bars cursor-pointer"
                style={{ fontSize: "30px" }}
              ></i>
            </Dropdown>
          </div>
        </Col>
      </Row>
      <Row className={`h-100`}>
        <Col xs={24} sm={24} md={24} lg={14} xl={14}>
          <div
            className={`d-flex justify-content-end align-items-center py-3 ${styles.homeFind}`}
          >
            <input type="text" />
            <div
              className={`d-flex justify-content-around align-items-center cursor-pointer pe-3 ${styles.homeFindIcons}`}
            >
              <i className="fa fa-microphone"></i>
              <img src={lens} alt="lens" className="px-2" />
              <i className="fa fa-search"></i>
            </div>
          </div>
          <div
            className={`d-flex justify-content-end align-items-center pb-3 ${styles.homeFindLanguages}`}
          >
            <a>{`Languages:`}</a>
            {"हिंदी বাংলা اردو ਪੰਜਾਬੀ मराठी తెలుగు தமிழ் ಕನ್ನಡ ગુજરાતી മലയാളം ଓଡ଼ିଆ"
              .split(" ")
              .map((data) => (
                <a href="#" className="ps-2">
                  {data}
                </a>
              ))}
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={10} xl={10}></Col>
      </Row>
    </div>
  );
}

export default Home;
