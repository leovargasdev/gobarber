import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  /* Deixa todos os itens um abaixo do outro */
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    button {
      border: 0;
      background: none;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /*Duas colunas com o mesmo tamanho*/
    grid-gap: 15px; /*Distância de cada cedula */
    margin-top: 30px;
  }
`;

export const Time = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  opacity: ${({ past }) => (past ? 0.6 : 1)};

  strong {
    display: block;
    color: ${({ available }) => (available ? '#999' : '#7159c1')};
    font-size: 20px;
    font-weight: normal;
  }

  span {
    display: block;
    color: ${({ available }) => (available ? '#2f9405' : '#666')};
    margin-top: 3px;
  }
`;
