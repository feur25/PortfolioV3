import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { NavbarContext } from "../context";
import { Grid, PageHeader } from "./ui";
// import Footer from './Footer';
// import { StyledPage } from "./PageStyles";
const StyledLayout = styled(Grid)`
`;
export const Page = ({ children, header }) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const setPage = useContext(NavbarContext);

  useEffect(() => {
    if (inView) {
      setPage(header.toLowerCase());
    }
  }, [inView]);
  // return (
  //   <StyledLayout id={`${header.toLowerCase()}-page`}>
  //     <>
  //       <PageHeader ref={ref}>{header}</PageHeader>
  //       {children}
  //     </>
  //     <div className="bg-text">{header}</div>
  //   </StyledLayout>
  // );
  if (children === 1) {
      return (
        <StyledLayout id={`${header.toLowerCase()}-page`}>
          <>
            <PageHeader ref={ref}>{header}</PageHeader>
            {children}
          </>
          <div className="bg-text">{header}</div>
        </StyledLayout>
      );
  }else{
    return (
      <StyledLayout id={`${header.toLowerCase()}-page`}>
        <>
          {/* <PageHeader ref={ref}>{header}</PageHeader> */}
          {/* <p>{children.lenght}</p> */}
          {children}
          
          {/* <Footer /> */}
        </>
        {/* <div className="bg-text">{header}</div> */}
      </StyledLayout>
    );
  }
};
