import React from "react";
import {Outlet, useLocation} from 'umi';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import {ThemeProvider} from 'styled-components'
import {Container, Title} from '@/styles/styled';
import {darkTheme, lightTheme, Theme, ThemeEnum} from "@/styles/theme";
import {useImmerReducer} from "use-immer";
import Router from '@/util/router';
import styles from './index.less';
import sun from '@/assets/sun.png';
import moon from '@/assets/moon.png';
import {Route} from "react-router";

const toggleIconStyle = {
    width: 12, height: 12
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
    const pathname = useLocation().pathname;
    const [theme, dispatch] = useImmerReducer(themeReducer, darkTheme, initialTheme)

    function handleClick() {
        if (pathname !== '/') {
            Router.goIndex();
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.theme_btn}>
                        <Title className={pathname === '/' ? styles.index_title : styles.article_title}
                               onClick={handleClick}>
                            hichho
                        </Title>
                        <label>
                            <Toggle
                                defaultChecked={theme.type === ThemeEnum.LIGHT}
                                icons={{
                                    checked: <img src={sun} style={toggleIconStyle} alt={''}/>,
                                    unchecked: <img src={moon} style={toggleIconStyle} alt={''}/>,
                                }}
                                onChange={dispatch}/>
                        </label>
                    </div>
                    <Outlet/>
                </div>
            </Container>
        </ThemeProvider>
    )
}

