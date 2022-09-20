import styled from 'styled-components'
import {Theme} from "@/styles/theme";

export const Container = styled.div`
  background: ${(props:{theme:Theme}) => props.theme.cargo.background};
  //background: red;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
