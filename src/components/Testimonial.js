import { useContext, useEffect, useState } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import DataContext from "../dataContext";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

const Testimonial = () => {
  const [data, setData] = useState({});

  const userData = useContext(DataContext);

  if (!data) {
    return <div>Loading...</div>;
  }

  useEffect(async () => {
    if(userData){
      setData({
        testimonials: userData.user.testimonials,
        subtitle: userData.user.about.subTitle
      })
    }
  }, [userData]);

  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
  };
  
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_testimonials">
        <div className="dizme_tm_main_title" data-align="center">
          <span>Testimonials</span>
          <h3>What My Clients Say</h3>
          <p>
            {data.subtitle}
          </p>
        </div>
        <div className="list_wrapper">
          <div className="total">
            <div className="in">
              <Swiper {...props} className="">
                {data &&
                  data.testimonials &&
                  data.testimonials.map((data, i) => (
                    <SwiperSlide key={i}>
                      <div className="icon">
                        
                        <img src={data.image.url} />
                      </div>
                      <div className="text">
                        <p>{data.review}</p>
                      </div>
                      <div className="short">
                        <div className="image">
                          <div className="main" data-img-url={data.image.url} />
                        </div>
                        <div className="detail">
                          <h3>{data.name}</h3>
                          <span>{data.position}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="owl-dots"></div>
            </div>
            <div className="left_details">
              <div
                className="det_image one wow fadeIn"
                data-wow-duration="1s"
                data-img-url="img/testimonials/2.jpg"
              />
              <div
                className="det_image two wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-img-url="img/testimonials/1.jpg"
              />
              <div
                className="det_image three wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                data-img-url="img/testimonials/3.jpg"
              />
              <div
                className="det_image four wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
                data-img-url="img/testimonials/4.jpg"
              />
              <span className="circle green animPulse" />
              <span className="circle yellow animPulse" />
              <span className="circle border animPulse" />
            </div>
            <div className="right_details">
              <div
                className="det_image one wow fadeIn"
                data-wow-duration="1s"
                data-img-url="img/testimonials/5.jpg"
              />
              <div
                className="det_image two wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-img-url="img/testimonials/6.jpg"
              />
              <div
                className="det_image three wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                data-img-url="img/testimonials/7.jpg"
              />
              <span className="circle yellow animPulse" />
              <span className="circle purple animPulse" />
              <span className="circle border animPulse" />
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/testimonials/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
