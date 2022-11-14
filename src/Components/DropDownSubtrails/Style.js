import styled from "styled-components";

export const NameSubtrail =styled.div`
 background-color: none;
 padding: 6px;
 justify-content: end;
 display: flex;
 gap: calc(10px);
 max-height: 30px;
`
export const DivPolygon = styled.div`
 align-self: flex-end;
`



export const DivContents = styled.div`
  display: ${props=>props.drop ? 'block':'none'};

`
export const DividerSubtrails = styled.div`
  background-color: #001024;
  height: 1px;
  width: 160px;
  text-align: center;
  margin-top: 10px;
`;

