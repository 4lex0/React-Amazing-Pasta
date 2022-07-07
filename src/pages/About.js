import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

export const About = () => {
  return (
    <motion.div
      className="about"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src="./img/about01.jpg" alt=""/>
      <div className="aboutBottom">
        <h3>About us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fuga
          consequuntur voluptas blanditiis, totam tenetur? Pariatur aperiam
          temporibus cumque? Temporibus illo necessitatibus modi quo ipsa
          repellendus assumenda fugit reprehenderit voluptatibus! Temporibus
          quasi quos quidem, sint, ipsum dolores tenetur inventore autem
          dignissimos cupiditate mollitia accusamus expedita repellendus nisi
          veritatis amet odit aspernatur quo. Exercitationem impedit qui
          repellat autem vel, quo nesciunt. Inventore fugit assumenda excepturi,
          culpa nostrum vitae consequuntur in deserunt neque aut et. Tempore
          incidunt, vero veniam accusamus nobis corporis consectetur esse et,
          eaque, in minima voluptas rerum inventore quia. Sint soluta asperiores
          aliquid voluptates ab aperiam dolorem totam ullam, a vero quo.
          Reprehenderit voluptate optio sit non deserunt sapiente nam cumque
          soluta consequatur provident, libero dolor modi asperiores rerum.
          Quisquam tempore iste reprehenderit porro sit ipsum accusantium, sunt
          deleniti eligendi temporibus est, unde facilis earum iusto expedita
          illum eveniet rem? Quam, iusto dicta consectetur repellat temporibus
          illo. Itaque, ullam!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
