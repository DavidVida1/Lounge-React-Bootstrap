import { useState, useEffect } from "react";

const Navbar = ({ setCanvas, offMenuCanvas }) => {
  const siteMenuClone = () => {
    const jsCloneNavs = document.querySelectorAll(".js-clone-nav");
    const siteMobileMenuBody = document.querySelector(".site-mobile-menu-body");

    jsCloneNavs.forEach((nav) => {
      //for each of jsClonNavs wich is an array(because of querySelectorAll)
      const navCloned = nav.cloneNode(true);
      //modifies the class of navCloned to site-nav-wrap
      navCloned.setAttribute("class", "site-nav-wrap");
      //
      siteMobileMenuBody.appendChild(navCloned);
      // i put navcloned at siteMobodileMenuBody
    });

    setTimeout(() => {
      const hasChildrens = document
        .querySelector(".site-mobile-menu")
        .querySelectorAll(".has-children");

      const counter = 0;
      hasChildrens.forEach((hasChild) => {
        const refEl = hasChild.querySelector("a");

        const newElSpan = document.createElement("span");
        newElSpan.setAttribute("class", "arrow-collapse collpased");

        hasChild.insertBefore(newElSpan, refEl);

        const arrowCollapse = hasChild.querySelector(".arrow-collapse");
        arrowCollapse.setAttribute("data-toggle", "collapse");
        arrowCollapse.setAttribute("data-toggle", "#collapseItem" + counter);

        const dropdown = hasChild.querySelector(".dropdown");
        dropdown.setAttribute("class", "collapse");
        dropdown.setAttribute("id", "collapseItem" + counter);

        counter++;
        console.log(counter);
      });
      console.log(hasChildrens);
    }, 1000);

    const menuToggle = document.querySelectorAll(".js-menu-toggle");
    let mTog;

    console.log(menuToggle);

    menuToggle.forEach((mtoggle) => {
      mTog = mtoggle;
      mtoggle.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target);
        if (document.body.classList.contains("offCanvas-menu")) {
          console.log("Bonjours mrs chang");
          document.body.classList.remove("offCanvas-menu");
          /* setCanvas(false);*/
          mtoggle.classList.remove("active");
          mTog.classList.remove("active");
        } else {
          console.log("hi1");
          document.body.classList.add("offCanvas-menu");
          /* setCanvas(true);*/
          mtoggle.classList.add("active");
          mTog.classList.add("active");
        }
      });
    });
    //----------------CLICK OUTSIDE OF THE CANVASMENU---------------------
    const specifiedElement = document.querySelector(".site-mobile-menu");
    let mt;
    let mtoggleTemp;

    document.addEventListener("click", function (event) {
      const isClickInside = specifiedElement.contains(event.target);
      menuToggle.forEach((mtoggle) => {
        mtoggleTemp = mtoggle;
        mt = mtoggle.contains(event.target);
      });

      if (!isClickInside && !mt) {
        if (document.body.classList.contains("offCanvas-menu")) {
          document.body.classList.remove("offCanvas-menu");
          mtoggleTemp.classList.remove("active");
        }
      }
    });
  };

  useEffect(() => {
    console.log(offMenuCanvas);
  }, [offMenuCanvas]);

  useEffect(() => {
    siteMenuClone();
  }, []);

  return <></>;
};

export default Navbar;
