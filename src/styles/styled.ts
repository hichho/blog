import styled from 'styled-components'
import {Theme} from "@/styles/theme";

export const Container = styled.div`
  background: ${(props: { theme: Theme }) => props.theme.cargo.background};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props: { theme: Theme }) => props.theme.cargo.head};
`;

export const Author = styled.a`
  color: ${(props: { theme: Theme }) => props.theme.cargo.author};
  cursor: pointer;
`
export const HeadTitle = styled.div`
  color: ${(props: { theme: Theme }) => props.theme.cargo.content};
  margin: 0;
  padding: 0;
  font-size: 16px;
  max-width: 200px;
  line-height: 140%;
  font-family: 'merriweather';
`

export const ArticleTitle = styled.h1`
  color: ${(props: { theme: Theme }) => props.theme.cargo.title};
  font-family: "montserrat";
  cursor: pointer;
  margin:0;
  line-height: 180%;
  font-size: 30px;
`
export const ArticleIntroduce = styled.span`
  color: ${(props: { theme: Theme }) => props.theme.cargo.content};
  font-family: "merriweather";
  font-size: 14px;
  margin:4px 0;
  line-height: 120%;
  font-weight: 400;
`
export const ArticleContent = styled.p`
  color: ${(props: { theme: Theme }) => props.theme.cargo.content};
  font-family: 'merriweather';
  margin:8px 0;
  line-height: 120%;
`