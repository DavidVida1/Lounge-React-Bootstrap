const navbar = () => {
  "use strict";

  const siteMenuClone = () => {
    const jsCloneNavs = document.querySelectorAll(".js-clone-nav");
    const siteMobileMenuBody = document.querySelector(".site-mobile-menu-body");

    jsCloneNavs.forEach((nav) => {
      const navCloned = nav.cloneNode(true);
      //modifies the class of navCloned to site-nav-wrap
      navCloned.setAttribute("className", "site-nav-wrap");
      siteMobileMenuBody.appendChild(navCloned);
    });

    setTimeout(() => {
      const hasChildrens = document
        .querySelector(".site-mobile-menu")
        .querySelectorAll(".has-children");

      const counter = 0;
      hasChildrens.forEach((hasChild) => {
        const refEl = hasChild.createElement("a");
        const newElSpan = document.createElement("span");
        newElSpan.setAttribute("className", "arrow-collapse collpased");

        hasChild.insertBefore(newElSpan, refEl);

        const arrowCollapse = hasChild.querySelector(".arrow-collapse");
        arrowCollapse.setAttribute("data-toggle", "collapse");
        arrowCollapse.setAttribute("data-toggle", "#collapseItem" + counter);

        const dropdown = hasChild.querySelector(".dropdown");
        dropdown.setAttribute("ClassName", "collapse");
        dropdown.setAttribute("id", "collapseItem" + counter);

        counter++;
      });
    }, 1000);

    const menuToggle = document.querySelectorAll(".js-menu-tggle"); //weird
    let mTog;

    menuToggle.forEach((mtoggle) => {
      mTog = mtoggle;
      mtoggle.addEventListener("click", (e) => {
        if (document.body.classList.contains("offCanvas-menu")) {
          document.body.classList.remove("offCanvas-menu");
          mtoggle.classList.remove("active");
          mTog.classList.remove("active");
        } else {
          document.body.classList.add("offcanvas-menu");
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
        if (document.body.classList.contains("offcanvas-menu")) {
          document.body.classList.remove("offcanvas-menu");
          mtoggleTemp.classList.remove("active");
        }
      }
    });
  };

  siteMenuClone();
};

export default navbar;
