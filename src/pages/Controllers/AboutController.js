import gsap from "gsap";
import Flip from "gsap/Flip";
import { useEffect } from "react";

export const About = () =>{
    useEffect( () => {
        gsap.registerPlugin(Flip);
        let cards = document.querySelectorAll(".about-item");
        cards.forEach((card, i) => {
          if (i === 0) {
            card.classList.add("active");
          }
          card.addEventListener("mouseenter", (e) => {
            if (card.classList.contains("active")) {
              return;
            }
            const state = Flip.getState(cards);
            cards.forEach((c) => {
              c.classList.remove("active");
            });
            card.classList.add("active");
            Flip.from(state, {
              duration: 0.5,
              ease: "elastic.out(1,0.9)",
              absolute: true,
            });
          });
        });
      }, []);
}