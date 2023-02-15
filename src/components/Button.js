import styled from '@emotion/styled'
import { theme } from '../themes/theme';


const Button = styled.button`
background-color: ${({primary, secondary, theme}) => primary ? theme.colors.primary : secondary ? theme.colors.secondary : theme.colors.standard};
padding: ${({large, small}) => large ? theme.btnsizes.large : small ? theme.btnsizes.small : theme.btnsizes.standard};
border: 0.125rem solid green;
`;

export default Button;