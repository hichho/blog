import {Outlet} from 'umi';
// @ts-ignore
import Toggle from 'react-toggle';
import styles from './index.less';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';
import "react-toggle/style.css";
// @ts-ignore
import {ThemeProvider} from 'styled-components';
import {HeaderDiv} from '../styles/styled';

import {useState} from "react";

export default function Layout() {

    const [theme, setTheme] = useState({
        backgroundColor: 'green'
    })

    const changeTheme = () => {
        console.log('切换主题')
        setTheme({
            backgroundColor: 'red'
        })
    }
    const iconStyle = {width: '12px', height: '12px', margin: 0};

    function handleSoupChange() {
    }

    return (
        <div className={styles.frame}>
            <label>
                <Toggle
                    defaultChecked={true}
                    icons={{
                        checked: <img src={sun} style={iconStyle}/>,
                        unchecked: <img src={moon} style={iconStyle}/>,
                    }}
                    onChange={handleSoupChange}/>
                <span>Custom icons</span>
            </label>
            <Outlet/>
        </div>)
}
