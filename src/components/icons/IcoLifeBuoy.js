import styled from 'styled-components'
    
const StyledSpan = styled.span`
    margin: ${props => props.left ? "0px 8px 0px 0px" : props => props.right ? "0px 0px 0px 8px" : "0px"};
    svg {
        vertical-align: middle;
    }
`;

const IcoLifeBuoy= (props) => {
    let color = props.color
    let fill = props.fill
    let size = props.size === 'big' ? 36 : props.size === 'small' ? 16 : 24;
    return (
        <StyledSpan {...props}><svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-life-buoy"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg></StyledSpan>
    )
}
IcoLifeBuoy.defaultProps = {
    color: "currentColor",
    fill: "none",
    size: "normal"
}

export default IcoLifeBuoy