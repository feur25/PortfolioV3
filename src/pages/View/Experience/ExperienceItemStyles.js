import styled from "styled-components";
import { blue, typeScale } from "../../../utils";

export const StyledExperienceItem = styled.div`
  overflow: hidden;
  background-color: ${(props) =>
    props.color ? props.color["60"] : blue["60"]};

  color: ${(props) => (props.color ? props.color["00"] : blue["00"])};
  border: 4px solid ${(props) => (props.color ? props.color["00"] : blue["00"])};
  box-shadow: 0.8rem 0.8rem 0
    ${(props) => (props.color ? props.color["00"] : blue["00"])};
  border-radius: 1rem;
  height: 400px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  cursor: pointer;
  .date {
    display: none;
    font-size: ${typeScale.paragraph};
    font-weight: bold;
  }

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    rotate: 90deg;
    transform: translateX(40px);
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.5rem;

      .wrapper {
        box-shadow: 0.2rem 0.2rem 0
          ${(props) => (props.color ? props.color["00"] : blue["00"])};
        border: 2px solid
          ${(props) => (props.color ? props.color["00"] : blue["00"])};
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
        overflow: hidden;
        rotate: -90deg;
        background-color: ${(props) =>
          props.color ? props.color["00"] : blue["00"]};
      }
      img {
        width: 100%;
        object-fit: cover;
      }
    }

    h2 {
      font-size: ${typeScale.title};
      line-height: 2.4rem;
    }
    .position {
      display: none;
    }
  }
  p {
    display: none;
    font-size: ${typeScale.text};
  }

  &.active {
    width: 600px;
    .date {
      display: block;
    }
    p {
      display: block;
    }

    .header {
      justify-content: start;
      align-items: center;
      rotate: 0deg;
      transform: translateX(0%);
      .image {
        .wrapper {
          rotate: 0deg;
        }
      }
      .text {
        .position {
          display: block;
        }
      }
    }
  }

  @media screen and (max-width: 940px) {
    gap: 0.25rem;
    .header {
      gap: 0.75rem;
      h2 {
        font-size: ${typeScale.subtitle};
        line-height: 1.75rem;
      }
      .position {
        font-size: ${typeScale.paragraph};
        line-height: 1.5rem;
      }
      .image {
        .wrapper {
          width: 4.8rem;
          height: 4.8rem;
        }
      }
    }
    .data {
      font-size: ${typeScale.helperText};
    }

    p {
      font-size: ${typeScale.paragraph};
    }
  }

  @media screen and (max-width: 720px) {
    height: auto;
    width: 100%;
    grid-column: span 1;
    grid-row: 2;
    .text {
      display: none;
    }

    .header,
    .image,
    .wrapper {
      height: 100%;
      width: 100%;
    }
    .header {
      transform: translateX(0);
      rotate: 0deg;
      .image {
        .wrapper {
          width: 4rem;
          height: 4rem;
          rotate: 0deg;
        }
      }
    }

    &.active {
      width: 100%;
      grid-column: 1/4;
      grid-row: 1;
      .text {
        display: block;
      }
      .header,
      .image,
      .wrapper {
        width: auto;
      }
    }
  }
`;
export const KnowStyles = styled.div`
img {
  width: 14em;
  height: 21em;
  display: block;
}
#movies {
  width: 720px;
  margin: 1.3em auto 0;
  display: flex;
  flex-wrap: wrap;
}
#movies figure {
  margin: 0.5em;
  box-shadow: 0 0 15px gray;
}
figcaption {
  padding: 1em 0.4em 0;
  line-height: 1;
}
figcaption > * {
  margin: 0;
}
.genre {
  font-size: 0.8em;
  color: #cc0;
  font-weight: bold;
}
.rating {
  display: flex;
  align-items: center;
}
.rating .fa-heart {
  margin-right: 0.3em;
  color: #e60000;
}
.rating p {
  font-weight: bold;
}
#search-input {
  display: inline-block;
  margin: 1.5em 0 0 2em;
  position: relative;
  background: red;
}
#search-input .fa-search {
  position: absolute;
  right: 5px;
  bottom: 8px;
  color: #e7e7e7;
}
::placeholder {
  color: lightgray;
  letter-spacing: 1px;
}
input[type="search"] {
  letter-spacing: 1px;
  border: none;
  border-bottom: solid 2px lightgray;
  outline: none;
  color: gray;
  padding: 0.2em 0.5em 0.2em 0;
}
input[type="search"]:focus {
  border-bottom-color: #cc0;
}

`;