import styled from 'styled-components';

const TweetStyled = styled.div`
  width: 500px;
  height: 200px;
  background-color: black;
  border: 1px solid grey;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;

  img {
    width: 50px;
    border-radius: 100%;
    margin: 10px;
    margin-top: 20px;
  }
  .subtitulos {
    display: flex;
    flex-direction: row;
    color: white;
    gap: 10px;
    margin-left: 5px;
    margin-bottom: 10px;

    h2 {
      font-size: 14px;
    }
  }

  span.nome-user {
    font-weight: 900;
    font-size: 16px;
    margin-top: 20px;
  }

  span.login-data {
    color: #bbb;
    font-weight: 400;
    font-size: 16px;
    margin-top: 24px;
  }

  .caixa-texto {
    color: #fff;
    display: flex;
    text-align: justify;
    padding-right: 50px;

    p {
      margin-top: -5px;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    padding-right: 50px;
  }
`;

export default TweetStyled;
