import { Canvas } from "@react-three/fiber";
import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { NavbarContext } from "../../../context";
import Dog from "./Dog";
import {
  AnimatedSpan,
  DogContainer,
  HomeWrapper,
  Name,
  Position,
  TextContainer,
} from "./HomeStyles";

export const Home = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const setPage = useContext(NavbarContext);

  useEffect(() => {
    if (inView) {
      setPage("home");
    }
  }, [inView]);

  const produceSpans = (name) => {
    return name.split("").map((letter, index) => (
      <AnimatedSpan
        index={index}
        letter={letter}
        aria-hidden="true"
        key={index}
      >
        {letter}
      </AnimatedSpan>
    ));
  };
  return (

        <HomeWrapper ref={ref} id="home-page"> 
          <TextContainer>
            <Name>Coletta Quentin</Name>
            <Position>
              <div className="text first" aria-label="Data Scientist">
                {produceSpans("Data Scientist")}
              </div>
              <div className="text second" aria-label="Intelligence Artificielle">
                {produceSpans("Intelligence Artificielle")}
              </div>
            </Position>
          </TextContainer>
          <DogContainer>
            <Canvas camera={{ position: [0, 2, 5] }}>
              <Dog />
            </Canvas>
          </DogContainer>
        </HomeWrapper>

  );
};
