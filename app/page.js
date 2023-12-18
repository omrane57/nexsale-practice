import Image from "next/image";
import React from "react";

const page = () => {
  // Test Commit Comment

  return (
    <>
      <div className="parent">
        <div className="header">
          <Image
            src="/assets/Brand Logo - Nexsales.png"
            alt="me"
            width="150"
            height="40"
          />
        </div>

        <div className="sidebar-navigation">
          <div className="navigation">
            <div className="navitem-home">
              <div className="home">
                <Image
                  src="/assets/Home Icon.png"
                  alt="me"
                  width="28"
                  height="28"
                />
              </div>
              <div className="tam">
                <Image
                  src="/assets/second.png"
                  alt="me"
                  width="28"
                  height="28"
                />
              </div>
              <div className="sam">
                <Image
                  src="/assets/third.png"
                  alt="me"
                  width="28"
                  height="28"
                />
              </div>
              <div className="cfa">
                <Image
                  src="/assets/fourth.svg"
                  alt="me"
                  width="28"
                  height="28"
                />
              </div>
              <div className="icp">
                <Image
                  src="/assets/fourth.svg"
                  alt="me"
                  width="28"
                  height="28"
                />
              </div>
              <div className="icon-frame">
                <Image src="/assets/last.svg" alt="me" width="28" height="28" />
              </div>
            </div>
          </div>
        </div>

        <div className="child"></div>
      </div>
    </>
  );
};

export default page;
