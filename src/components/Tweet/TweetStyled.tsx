import styled from 'styled-components';

const TweetStyled = styled.div`
  .tweet-title{
    color: #f5f5f5;
    font-size: 15px;
    font-weight: 700;
    }
    .tweet-title span {
        color: #f5f5f5;
        font-weight: 400;
    }

    .avatar {
        width: 48px;
        height: 48px;
    }

    .avatar img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }

    .tweet-container {
        margin-top: 16px;
        width: 600px;
        height: 400px;
        padding: 16px;
        border: 1px solid rgba(29, 155, 240,0.5);
        border-radius: 15px;
        height: auto;
    }

    .tweet-container > div{  
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: flex-start;
    }

    .tweet-body{
        display: flex;
        flex: 1;
        max-width: 600px;
        width: 100%;
        max-height: 200px;
        height: 100px;
        margin-left: 10px;
    }

    .text-tweet{
        margin-top: 5px;
    }

    @media screen and (max-width:600px) {
        .tweet-container{
            max-width: 100vw ;
            min-width: 100vw;
            width: 100%;
        }
        .tweet-container > div {
            width: 95vw ;

        }
        .tweet-body {
            display: inline;
            width: 100%;
            max-width: 90vw;
            width: 65vw;
            min-height: auto;
            padding: 10px;
        }
    }
`;

export default TweetStyled;
