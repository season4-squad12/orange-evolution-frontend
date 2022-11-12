import styled from "styled-components";

export const Div = styled.div`
    background-color: ${props => props.background};
    display: ${props => props.display};
    flex-direction: ${props => props.flexDirection};
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
    margin-bottom: ${props => props.marginBottom};
`;