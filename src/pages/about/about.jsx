import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import ClampLines from "react-clamp-lines";
import "./about.scss";

const About = () => {
  const text_to_clamp =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elites sapiente itaque hic. Deleniti enim earum necessitatibus quis, impedit nemo perspiciatis, laborum, ut quae minima in. Mollitia facilis eius impedit, optio commodi eveniet accusantium reiciendis laboriosam officia, dolore repellat quod quos animi accusamus voluptas? Sunt excepturi quibusdam voluptates eum tempore deleniti autem iure provident? Similique, voluptatem assumenda? Quam recusandae laudantium obcaecati odit alias aliquid quidem consequuntur doloribus, quaerat architecto nesciunt nemo minus sit ut, quis dignissimos voluptate officiis mollitia aspernatur iusto quia repellat veritatis. Quaerat ratione harum labore doloremque, beatae deleniti dolorum non asperiores debitis nulla perferendis, exercitationem molestias necessitatibus pariatur id ducimus? Quos aspernatur voluptatem accusamus fugit necessitatibus sint consectetur voluptates in minus possimus deleniti iure velit, error eligendi, saepe cum quasi ratione perspiciatis similique, qui aut! Quibusdam molestiae voluptate, beatae consequuntur libero vel nobis temporibus quo. Accusantium aliquam eveniet iste distinctio minus facilis consequuntur. Obcaecati, ipsa officiis? Pariatur corrupti nulla, animi fugit libero vel necessitatibus laudantium. Placeat harum molestiae aliquam? Dolor iusto porro amet debitis distinctio pariatur labore veritatis, quisquam eveniet tempora alias cum dolores. Doloribus explicabo cupiditate sapiente nihil corrupti veritatis illum quas atque eum provident laborum velit repudiandae aspernatur natus laudantium, distinctio voluptatum molestiae similique voluptates! Ipsa alias fuga dolores, ut similique nesciunt eaque, veritatis sit mollitia nemo asperiores animi nulla recusandae itaque dolor libero facere totam amet. Eligenfugit esse culpa aut illum.";
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Winners", "Fighter", "Legend"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 150,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 300,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="Content">
          <h6>
            Live Your Life As <br /> A <span ref={el}></span>
          </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            provident labore repellat.
          </p>
          <ClampLines
            className="custom-class"
            text={text_to_clamp}
            id="really-unique-id"
            lines={1}
            ellipsis="..."
            moreText="more"
            lessText="less"
            innerElement="p"
          />
        </div>
      </div>
    </>
  );
};

export default About;
