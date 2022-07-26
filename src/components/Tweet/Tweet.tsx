import React from "react";
import styled from "styled-components";
import img from "../../assets/image/image.png";
import VerifiedIcon from "@mui/icons-material/Verified";
import { IconButton } from "@mui/material";
import CropRotateIcon from '@mui/icons-material/CropRotate';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import UploadIcon from '@mui/icons-material/Upload';

const TweetStyled = styled.div`
  width: 600px;
  height: 250px;
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

    h2{
      font-size: 16px;
    }
  }

  span > h2 {
    color: #bbb;
    font-weight: 400;
    font-size: 16px;
    margin-top: 20px
  }

  .caixa-texto {
    color: #fff;
    display: flex;
    text-align: justify;
    padding-right: 50px;
    
    p{
      margin-top: -5px;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-around;
    padding-right: 50px;
  }
  
`;

const Tweet: React.FC = () => {
  return (
    <TweetStyled>
      <div>
        <img src={img} alt='logo-twitter'/>
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
        <div className="caixa-texto">
          <p>
            As conversas sobre as #Eleiçoes2022 estão a todo vapor! Foram 44
            milhões de Tweets no 1º semestre sobre a corrida eleitoral
            brasileira → Para que essa conversa seja segura e informada, o
            Twitter está reunindo esforços em diferentes frentes, e temos
            novidades para compartilhar
          </p>
        </div>
        <div className="buttons">
        <IconButton color="primary" aria-label="upload picture" component="label">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="label">
          <CropRotateIcon />
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="label">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="label">
          <UploadIcon />
        </IconButton>
        </div>
      </div>
    </TweetStyled>
  );
};

export default Tweet;
