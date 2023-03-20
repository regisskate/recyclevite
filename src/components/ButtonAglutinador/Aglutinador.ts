import styled from 'styled-components';

export const ButtonContainer = styled.button`
  max-width: 1120px;
    width: 100%;
    height: auto;
    background: var(--grey-900);
    border: none;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    
  button {
    display: flex 1;
    align-items: center;
    font-size: 2rem;
    background: #fff;
    margin: 20px auto;
    padding: 5rem 6rem;
    border-radius: 0.25rem;
    border: 1rem solid #ff0000;
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
    img {
      display: flex;
      align-items: center;
      justify-items: center;
      width: 10rem;
      height: 12rem;
      margin: auto;
      padding: auto;

      span {
      color: var(--gray-900);
      margin-top: 1rem;
      font-size: 1.25rem;
      
    }

  }
  
  }
`;

