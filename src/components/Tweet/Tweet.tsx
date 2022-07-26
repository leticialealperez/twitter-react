import React from "react";
import styled from "styled-components";
import img from "../../assets/image/image.png";

const TweetStyled = styled.div`
  width: 600px;
  height: 300px;
  background-color: black;
  border: 1px solid grey;
  display: flex;

  img {
    width: 75px;
    border-radius: 100%;
    margin: 10px;
  }
`;

const Tweet: React.FC = () => {
  return (
    <TweetStyled>
      <div>
        <img src={img} />
      </div>
      <div>texto</div>
    </TweetStyled>
  );
};

export default Tweet;
