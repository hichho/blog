export enum ThemeEnum {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface Theme {
    type: ThemeEnum;
    cargo: {
        background: string;
        head: string;
        title: string;
        content: string;
        author: string;
    }
}

export const lightTheme: Theme = {
    type: ThemeEnum.LIGHT,
    cargo: {
        background: '#fff',
        head: '#222',
        title: '#d23669',
        content: '#222',
        author: '#ffa7c4'
    }
}
export const darkTheme: Theme = {
    type: ThemeEnum.DARK,
    cargo: {
        background: '#282c35',
        head: '#fff',
        title: '#ffa7c4',
        content: '#fff',
        author: '#d23669'
    }
}