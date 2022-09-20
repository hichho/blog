import React, {useContext} from 'react';
import {ThemeContext, useTheme} from 'styled-components';
import {Author, HeadTitle} from '@/styles/styled';
import styles from '@/styles/indexPage.less';
import avatar from '@/assets/avatar.jpeg';
import {articleList, IArticleListItem} from "@/constant/article";
import {ArticleItem} from "@/components/ArticleItem";

export default function HomePage() {
    const themeContext = useContext(ThemeContext);
    const theme = useTheme();
    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <img src={avatar} alt={'hichho'}/>
                <div className={styles.intro}>
                    <HeadTitle>
                        Personal blog by <Author href={'https://www.bing.com'}>hichho</Author>.
                        work hard,play harder.
                    </HeadTitle>
                </div>
            </div>
            <div className={styles.list}>
                {articleList.map((item:IArticleListItem, index) => {
                    return (
                       <ArticleItem key={index} article={item}/>
                    )
                })}
            </div>
        </div>
    );
}
