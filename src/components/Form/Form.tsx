import React, { FormEvent,  useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormStyled from './FormStyled';
import { adicionarTweet, ITweet } from '../../store/modules/timeline/timelinesSlice'
import { useAppDispatch } from '../../store/modules/typehook';

export default function Form() {
  const [isDisabled, setIsDisabled] = useState(true); // começa desabilitado
  const [tweetInput, setTweetInput] = useState('');
  const imageUrl = 'https://avatars.githubusercontent.com/u/71561411?v=4';
  const dispatch = useAppDispatch();
  // assemelha-se ao 
  /* addEventListener('submit', (e) => {
    e.preventDefault();

    // faço a lógica para savar os dados do forms
  }); */

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const novoTweet: ITweet = {
      id: uuidv4(),
      name: 'TechHelper Joinha da Growdev',
      usename: '@xaxalautech',
      imageUrl: 'https://avatars.githubusercontent.com/u/71561411?v=4',
      message: tweetInput
    }

    // dispara a ação de criar
    dispatch(adicionarTweet(novoTweet))

  };

  const handleChange = (value: string) => {
    setIsDisabled(!value.trim()); // habilita ou desabilita o botão de tweet - toogle
    setTweetInput(value);
  };

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