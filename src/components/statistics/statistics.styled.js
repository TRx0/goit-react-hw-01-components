import styled from "@emotion/styled";

export const Section = styled.section`
margin-top: 30px;
    background-color: #3b97c4;
    padding: 0;
`;

export const Title = styled.h2`
 
  text-transform: uppercase;
  color: #6a6767;
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  padding-inline-start: 0;
  justify-content: center;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const Items = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  padding-right: 40px;
  background-color: #0f4b69;
  border-right: 1px solid black;
  :last-child {
    border-right: none;
  }
`;

export const TextLable = styled.span`
  color: white;
  font-size: 18px;
`;

export const TextPerc = styled.span`
  color: whitesmoke;
  font-size: 24px;
`;