import styled from "@emotion/styled";

export const Items = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  background-color: whitesmoke;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.3);
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
 `;

export const Status = styled.span`
    margin-left: 10px;
    color: ${props => props.event ? "green" : "red" };
`;

export const Avatar = styled.img`
  margin-left: 10px;
`;

export const Text = styled.p`
  margin-left: 10px;
`;