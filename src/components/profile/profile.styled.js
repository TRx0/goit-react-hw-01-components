
import styled from "@emotion/styled";

export const Box = styled.div`
margin-top: 10px;
padding-top: 10px;
  background-color: white;
  width: 250px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.3);
`;


export const CardConainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 50%;  
`;

export const TitleText = styled.p`
  color: black;
  font-family: 'Times New Roman', Times, serif;
`;

export const Text = styled.p`
    color: #3096c9;
    font-family: 'Times New Roman', Times, serif;
`;

export const List = styled.ul`
  display: flex;  
  padding-left: 0;
  margin: 0;
  background-color: #25495c;
`;

export const Items = styled.li`
  width: 100px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #87d7ff;
  border-right: none;
  :last-child {
    border-right: 1px solid #87d7ff;
  }
`;

export const SpanTitle = styled.span`
  color: #3096c9;
`;

export const SpanDescr = styled.span`
  margin-top: 8px;
  font-weight: bold;
  `;