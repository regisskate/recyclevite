import styled from "styled-components";

export const Container = styled.form`
  section {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.5rem;
  
  button {
    height: 4rem;
    background: transparent;
    border: 3px solid #d7d7d7;
    border-radius: 0.25rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.10)
    }

    span {
      font-size: 1rem;
      font-weight: bold;
    }
  }
  
  
  h2 {
    color: var(--gray-800);
    font-size: 1.5rem;
    margin: 2rem;
  }
}

div {
  display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    
    font-weight: 400;
    font-size: 1rem;
    
    &::placeholder {
      color: #494542;
    }
    
    & + input {
      margin-top: 1rem;
    }
  }
  }
  
  
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: #66ff33;
    color: #ff0000;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: bold;
    
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9)
    }
    
  }
  `;