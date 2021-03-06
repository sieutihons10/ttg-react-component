import React from 'react'
import styled, {css} from 'styled-components'

const Item = styled.div`
    flex: 1; 
    padding: 8px;
    border-radius: 4px;
`;

const StyledBox = styled.div`
    border: 1px solid ${props => props.theme.color.border.primary};
    border-radius: 2px;
    margin-bottom: 8px;
    .headline {
        border-bottom: 1px solid ${props => props.theme.color.border.primary};
        padding: 8px 12px;
        background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.05));
    }
    & .flex {
        display: flex;
        background-color: transparent;
        padding: 8px;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        ${props => props.block && css `
            display: block;
        `}
    }
`;

const Box = (props) => {
    return (
        <StyledBox {...props}>
            <h4 class="headline">{props.headline}</h4>
            <div className="flex">
                {props.children}
            </div>
        </StyledBox>
    )
}
Box.defaultProps = {
    headline: "Box"
}

Box.Item = Item

export default Box
