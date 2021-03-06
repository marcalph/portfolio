import React from 'react';
import styled from 'styled-components';

const PTextStyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function Ptext({ children }) {
  return (
    <PTextStyle className="para">
      <p>{children}</p>
    </PTextStyle>
  );
}
