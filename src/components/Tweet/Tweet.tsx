import React from 'react';
import TweetStyled from './TweetStyled';

const Tweet: React.FC = () => {
  const imageUrl = 'https://avatars.githubusercontent.com/u/71561411?v=4';
  return (
    <TweetStyled>
      <div className="tweet-container">
      <div>
        <div className="avatar">
          <img alt="" src={imageUrl} />
        </div>
        <div className="tweet-body">
          <div>
            <p className="tweet-title">
              TechHelper Joinha da Growdev
              <span>
                {'\t•\t'}
                @xaxalautech
              </span>
              <span>
                {'\t-\t'}
                28 Jul
              </span>
            </p>
            <p className="text-tweet">Ola gente, esse é meu primeiro tweet</p>
          </div>
        </div>
      </div>
    </div>
    </TweetStyled>
  );
};

export default Tweet;
