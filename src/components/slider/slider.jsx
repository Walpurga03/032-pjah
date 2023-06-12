import React, { useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./slider.scss";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css/navigation";

export default function App() {
  const peopleAr = useMemo(
    () => [
      {
        id: "1",
        image: require("./images/Bundestag2.jpg"),
        name: "Roundtable im Bundestag",
        role: "zur Kryptobesteuerung in Deutschland",
      },
      {
        id: "2",
        image: require("./images/Grosskopf2.jpg"),
        name: "Peter Grosskopf",
        role: "Unstoppable Finance",
      },
      {
        id: "3",
        image: require("./images/Borchardt2.jpg"),
        name: "Pre-Event vor dem Bundestag-Roundtable",
        role: "zum digitalen Euro im Borchardt mit 30 Expert:innen",
      },
      {
        id: "4",
        image: require("./images/Usmani&Luksch.jpg"),
        name: "Hissan Usmani & Andreas Luksch ",
        role: "(Plug & Play) & (CM-Equity)",
      },
      {
        id: "5",
        image: require("./images/Titus2.jpg"),
        name: "Peter Meyering",
        role: "(Titus) & Friends",
      },
      {
        id: "6",
        image: require("./images/Lindner2.jpg"),
        name: "Christian Lindner",
        role: "Finanzminister",
      },
      {
        id: "7",
        image: require("./images/Spur2.jpg"),
        name: "Kevin Spur",
        role: "Deutscher Sparkassen- und Giroverband, DSGV",
      },
      {
        id: "8",
        image: require("./images/Pachaly2.jpg"),
        name: "Maximilian von Wallenberg Pachaly",
        role: "Unstoppable Finance",
      },
      {
        id: "9",
        image: require("./images/Schürrle.jpg"),
        name: "André Schürrle",
        role: "Ehemaliger Nationalmannschaftsspieler",
      },
      {
        id: "10",
        image: require("./images/Schleiffring2.jpg"),
        name: "Karsten Schleiffring",
        role: "Gesellschaft für Sparkassendienstleistungen, GSD",
      },
    ],
    []
  );

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(peopleAr);
  }, [peopleAr]);

  return (
    <>
      <h2 className="slider-title">Gespräche mit bekannten Persönlichkeiten</h2>
      <Swiper
        spaceBetween={30}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="imgBx">
              <img src={item.image} alt={`Slide ${item.id}`} />
            </div>
            <div className="details">
              <h3 className="name">
                {item.name}
                <br /> <span>{item.role}</span>
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
