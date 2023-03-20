import styled from "styled-components";

export const ResultContainer = styled.form`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 2rem;
  display: flex;
  align-items: center;
  border-spacing: 0 0.5rem;
  background-color: #fff;
  margin-top: 4rem;
  border-radius: 0.50rem;


  table {
    width: 100%;
    border-spacing: 0 0.15rem;

    thead {
      color: #000;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      
    }

    tr {
      padding: 1rem;
      td {
        margin-left: 2rem;
        padding: 1rem 1rem;
        border: 0;
        background-color: #cdd7e6;
        color: #000;
        border-radius: 0.25rem;
        border: 2px solid #29292e;
  
        &:first-child {
          color: rgb(210, 39, 62);
        }
    }
  }
}
`;