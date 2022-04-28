import styled from 'styled-components';

export const Comments = styled.ul`
  padding: 15px;
  list-style: none;
  height: 65%;
  overflow: auto;
  margin-bottom: 0.5rem;
  margin-top: auto;

  li {
    padding: 0.75rem;
    text-align: left;

    .author-info {
      text-align: right;
      margin-top: 0.5rem;
    }
  }
`;