import React, {useContext} from 'react';
import {ThemeContext, useTheme} from 'styled-components';

export default function HomePage() {
    const themeContext = useContext(ThemeContext);
    const theme = useTheme();
    return (
        <div>
            123
        </div>
    );
}
