import { useContext, useEffect, useState } from "react";
import Counter from "./Counter";
import DataContext from "../dataContext";

const About = ({ dark }) => {
  const userData = useContext(DataContext);
  const [data, setData] = useState({});

  if (!data) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    if(userData){
      setData({
        exp_year: userData.user.about.exp_year,
        projects: userData.user.projects,
        title: userData.user.about.title,
        subtitle: userData.user.about.subtitle,
        description: userData.user.about.description,
      })
    }
  }, [userData])

  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/${dark ? 2 : 1}.jpg`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      {data && <Counter end={data.exp_year} />}
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      {data && data.projects && <Counter end={data.projects.length} />}
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a ${data.title}`}</span>
                <h3>{data.subtitle}</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`Hello there! ${data.description}`}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
