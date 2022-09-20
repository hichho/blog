import styled from 'styled-components'
import {Theme} from "@/styles/theme";

export const Container = styled.div`
  background: ${(props:{theme:Theme}) => props.theme.cargo.background};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props:{theme:Theme}) => props.theme.cargo.head};
`;
