import styled from 'styled-components/native'


export const CustomText = styled.Text`
    font-size: 24px;
    color: ${({ color }) => color || '#191919' } ;
    font-weight: bold;
    margin: 12px
`;