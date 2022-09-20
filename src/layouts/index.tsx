import React from "react";
import {Outlet} from 'umi';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import {ThemeProvider} from 'styled-components'
import {Container} from '@/styles/styled';
import {darkTheme, lightTheme, Theme, ThemeEnum} from "@/styles/theme";
import {useImmerReducer} from "use-immer";
import sun from '@/assets/sun.png';
import moon from '@/assets/moon.png';

const toggleIconStyle = {
    width:12,height:12
}

function initialTheme(): Theme {
    const current = new Date().getHours();
    if (current > 18 && current < 8) {
        return darkTheme;
    }
    return lightTheme;
}

function themeReducer(state: Theme): Theme {
    return state.type === ThemeEnum.DARK ? lightTheme : darkTheme;
}

export default function Layout() {
    const [theme, dispatch] = useImmerReducer(themeReducer, darkTheme, initialTheme)
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <label>
                    <Toggle
                        defaultChecked={true}
                        icons={{
                            checked: <img src={sun} style={toggleIconStyle} alt={''}/>,
                            unchecked: <img src={moon} style={toggleIconStyle} alt={''}/>,
                        }}
                        onChange={dispatch}/>
                    <span>Custom icons</span>
                </label>
                <Outlet/>
            </Container>
        </ThemeProvider>
    )
}

