import styled from 'styled-components';

export const HeaderContainer = styled.button`
  width: 100%;
  background: var(--gray-900);
  margin: 0 auto;
  padding: 0 ;
  border: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #29292e;

  div {
    max-width: 1120px;
    width: 100%;
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
    height: 5rem;

    a {
      display: inline-block;
      position: relative;
      padding: 0 0.5rem;
      height: 5rem;
      line-height: 5rem;
      font-size: 2rem;
      color: #66ff66;
      text-decoration: none;

      transition: color 0.2s;

      &:hover {
        color: #c0f809
      }
    }
    }
      button {
      font-size: 1rem;
      color: #ff0000;
      background: #5a0c0c;
      border: 0;
      padding: 0 2rem;
      border-radius: 0.25rem;
      height: 3rem;
      transition: filter 0.2s;

      &:hover {
        color: #c0f809;
      }

      &:active {
        color: #c0f809;
        font-weight: bold;
      }

      &.active::after {
        content: '';
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: 1px;
        left: 0;
        background: #c0f809;
      }
    }
  }
`;