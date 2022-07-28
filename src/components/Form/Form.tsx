import React, { FormEvent,  useEffect,  useState } from 'react';
import FormStyled from './FormStyled';

export default function Form() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [tweetInput, setTweetInput] = useState('');
  const imageUrl = 'https://avatars.githubusercontent.com/u/71561411?v=4';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (value: string) => {
    setIsDisabled(!value.trim());
    setTweetInput(value);
  };

  useEffect(() => { 
    console.log(tweetInput);
    console.log(isDisabled);
  }, [tweetInput, isDisabled])

  return (
    <FormStyled>
        <div className="container">
      <div>
        <div className="avatar">
          <img alt="user-avatar" src={imageUrl} />
        </div>
        <div className="form-input">
          <form onSubmit={handleSubmit}>
            <textarea
              onChange={(event) => handleChange(event.target.value)}
              maxLength={120}
              value={tweetInput}
              placeholder="What's happening?"
            />
            <button
              className="btn-twitter"
              disabled={isDisabled}
              type="submit"
            >
              Tweet

            </button>
          </form>
        </div>
      </div>
    </div>
    </FormStyled>
  );
}