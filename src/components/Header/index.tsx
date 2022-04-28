import React from 'react';
import * as Styled from './styles';
import logoImg from '../../logo.svg';

const Header: React.FC = () => {
  return (
    <Styled.Header>
      <Styled.Logo>
        <img src={logoImg} alt="logo" />
      </Styled.Logo>
    </Styled.Header>
  );
};

export default Header;