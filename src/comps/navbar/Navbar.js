import React, { useState } from "react";
import styles from "./nav.module.sass";
import { Switch } from "antd";

function Navbar() {
  const [navData, setNavData] = useState([
    {
      id: 0,
      name: "Settings",
      icon: "fa fa-cog",
      dropDown: [
        {
          id: 0,
          name: "Language",
          toggle: false,
        },
        {
          id: 1,
          name: "Country/Region",
          toggle: false,
        },
        {
          id: 2,
          name: "Location",
          toggle: false,
        },
        {
          id: 3,
          name: "Voice Search",
          toggle: false,
        },
      ],
    },
    {
      id: 1,
      name: "Safe Search",
      icon: "fas fa-lock",
      dropDown: null,
    },
    {
      id: 2,
      name: "Search History",
      icon: "fa fa-history",
      dropDown: null,
    },
    {
      id: 3,
      name: "My Bing",
      icon: "fas fa-user-shield",
      dropDown: null,
    },
    {
      id: 4,
      name: "Privacy",
      icon: "fa fa-shield",
      dropDown: null,
    },
    {
      id: 5,
      name: "Feedback",
      icon: "fas fa-comment-alt",
      dropDown: null,
    },
    {
      id: 6,
      name: "Customise your homepage",
      icon: "fa fa-home",
      dropDown: [
        {
          id: 0,
          name: "Show menu bar",
          toggle: true,
        },
        {
          id: 1,
          name: "Show news and intrests",
          toggle: true,
        },
        {
          id: 2,
          name: "Show homepage image",
          toggle: true,
        },
      ],
    },
  ]);
  const [navId, setIdData] = useState(0);

  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-start h-100 bg-light p-2 ${styles.navContainer}`}
    >
      {navData.map((data) => (
        <>
          <div
            className={`w-100  d-flex align-items-center p-1 ${styles.navItem}`}
          >
            <i className={`${data.icon} pe-2`}></i>
            <div
              className={`w-100 d-flex justify-content-between align-items-center`}
              onClick={() => setIdData(navId === data.id ? -1 : data.id)}
            >
              <a>{data.name}</a>
              {data.dropDown &&
                (navId === data.id ? (
                  <i className="fas fa-chevron-up"></i>
                ) : (
                  <i className="fas fa-chevron-down"></i>
                ))}
            </div>
          </div>

          {data.dropDown &&
            navId === data.id &&
            data.dropDown?.length > 0 &&
            data.dropDown.map((d) => (
              <div
                className={`p-1 w-100 d-flex justify-content-between align-items-center ${styles.navItem}`}
              >
                <a className="ps-4">{d.name}</a>
                {d.toggle && <Switch defaultChecked />}
              </div>
            ))}
        </>
      ))}
      <div className={`pt-2 mt-2 px-1 w-100 border-top ${styles.navFooter}`}>
        <div>
          Privacy and Cookies • Legal • Advertise • About our ads • Help
        </div>
        <div>© 2022 Microsoft</div>
      </div>
    </div>
  );
}

export default Navbar;
