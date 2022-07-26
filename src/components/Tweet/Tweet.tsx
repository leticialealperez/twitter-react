import React from "react";
import styled from "styled-components";
import img from "../../assets/image/image.png";
import svg from "../../assets/image/verified.svg";
import VerifiedIcon from "@mui/icons-material/Verified";

const TweetStyled = styled.div`
  width: 600px;
  height: 300px;
  background-color: black;
  border: 1px solid grey;
  display: flex;
  font-family: "Roboto", sans-serif;

  img {
    width: 75px;
    border-radius: 100%;
    margin: 10px;
  }
  .subtitulos {
    display: flex;
    flex-direction: row;
    color: white;
    gap: 10px;
    margin-left: 5px;
  }

  span > h2 {
    color: #bbb;
    font-weight: 400;
  }
`;

const Tweet: React.FC = () => {
  return (
    <TweetStyled>
      <div>
        <img src={img} />
      </div>
      <div>
        <div className="subtitulos">
          <h2>
            Twitter Brasil <VerifiedIcon />
          </h2>
          <span>
            <h2>@TwitterBrasil . 20 de jul</h2>
          </span>
        </div>
        <div>
          <p>
            As conversas sobre as #Eleiçoes2022 estão a todo vapor! Foram 44
            milhões de Tweets no 1º semestre sobre a corrida eleitoral
            brasileira → Para que essa conversa seja segura e informada, o
            Twitter está reunindo esforços em diferentes frentes, e temos
            novidades para compartilhar
          </p>
        </div>
      </div>
    </TweetStyled>
  );
};

export default Tweet;
