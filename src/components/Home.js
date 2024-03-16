import { useEffect, useState, useContext } from "react";
import DataContext from "../dataContext";

const Home = ({ dark }) => {
  const userData = useContext(DataContext);
  const [data, setData] = useState({});

  if (!data) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    if(userData){
      setData({
        name: userData.user.about.name,
        skills: userData.user.skills,
        img: userData.user.about.avatar.url,
        social: userData.user.social_handles,
        bio: userData.user.about.subTitle,
        address: userData.user.about.address,
        mainSkill: userData.user.about.title
      })
    }
  }, [userData])

  return (
    <div className="dizme_tm_section" id="home">
      <div className="dizme_tm_hero">
        <div
          className="background"
          data-img-url={`img/slider/${dark ? 2 : 1}.jpg`}
          // style={{ backgroundImage: `img/slider/${dark ? 2 : 1}.jpg` }}
        />
        <div className="container">
          <div className="content">
            <div className="details">
              <div className="hello">
                <h3 className="orangeText">{`Hello, I'm`}</h3>
              </div>
              <div className="name">
                <h3>{data && data.name ? data.name : "name"}</h3>
              </div>
              <div className="job">
                <p>
                  A <span className="greenText">{data && data.mainSkill}</span>{" "}
                  From <span className="purpleText">{data.address}</span>
                </p>
              </div>
              <div className="text">
                <p>{data.bio}</p>
              </div>
              <div className="button">
                <div className="dizme_tm_button">
                  <a className="anchor" href="#about">
                    <span>About Me</span>
                  </a>
                </div>
                <div className="social">
                  <ul>
                    {data &&
                      data.social &&
                      data.social.map((social, i) =>(
                        <li key={i}>
                          <a href={social.url}>
                            <img src={social.image.url} />
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="image">
                <img
                  src={data && data.img ? data.img : "/img/slider/avatar.png"}
                  alt="image"
                />
                {
                data &&
                  data.skills &&
                  data.skills.map(
                    (skill, i) =>
                      {
                        if(i < 3){ // Can support upto 8 skills
                        return(
                        <span
                          key={i}
                          className={`skills skill${i} anim_moveBottom`}
                        >
                          <img src={skill.image.url} />
                        </span>
                      )}}
                  )}
              </div>
            </div>
          </div>
        </div>
        <div className="dizme_tm_down">
          <a className="anchor" href="#process">
            <svg
              width="26px"
              height="100%"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "1.5",
              }}
            >
              <path
                id="wheel"
                d="M123.359,79.775l0,72.843"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
