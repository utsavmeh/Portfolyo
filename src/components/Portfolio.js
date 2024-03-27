import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import DataContext from "../dataContext";

const Portfolio = () => {

  const [data, setData] = useState({});
  const userData = useContext(DataContext);

  useEffect(() => {
    if(userData){
      setData({
        subtitle: userData.user.about.subTitle,
        project: userData.user.projects
      })
    }
    dataImage();
    portfolioHover();
  }, [userData]);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>Projects</h3>
            <p>
              {data && data.subtitle}
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              {/* SINCE IN DATA I DON'T HAVE ANY CLASSIFICATION BASED ON YOUTUBE VIMEO AND SOUNDCLOUD SO I REMOVE  */}
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {data && data.project &&
              data.project.map((data, i) => (
                <li key={i} className="youtube grid-item">
                  <div className="inner">
                    <div
                      className="entry dizme_tm_portfolio_animation_wrap"
                      // data-title="Mockup Shape"
                      // data-category="Youtube"
                    >
                      <a
                        // className="popup-youtube"
                        href={data.liveurl ? data.liveurl : "#"}
                      >
                        <img src={data.image.url} alt="image" />
                        {/* <div
                          className="main"
                          data-img-url="img/portfolio/1.jpg"
                        /> */}
                      </a>
                    </div>
                  </div>
                  {/* <div className="title">
                    <h3>TechStack</h3>
                  </div> */}
                    {data.techStack.map((techstack) => 
                    <div className="chip">
                      <div className="chip-content">
                        {techstack}
                      </div>
                    </div>
                    )}

                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
