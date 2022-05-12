import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2rem;
    background-color: ${(props) =>
      props.outline ? 'transparent' : 'var(--light)'};
    color: ${(props) => (props.outline ? 'var(--light)' : 'black')};
    padding: 0.7em 2em;
    border-radius: 8px;
    border: 2px solid var(--light);
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({ btnLink, btnText = 'test', outline = false }) {
  return (
    <ButtonStyle outline={outline}>
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
