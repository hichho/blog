import React, {FC, ReactElement} from 'react';
import {IArticleListItem} from "@/constant/article";
import styles from './articleItem.less';
import {ArticleIntroduce, ArticleTitle,ArticleContent} from "@/styles/styled";


export const ArticleItem: FC<{ article: IArticleListItem }> = ({article}): ReactElement => {
    const {
        title,
        coffeeCount,
        createTime,
        readTime,
        content,
    } = article;
    return (<div className={styles.card}>
        <ArticleTitle>
            {title}
        </ArticleTitle>
        <ArticleIntroduce>
            {createTime} · {[...new Array(coffeeCount).keys()].map(item=>(
            <span key={item}>
                ☕️
            </span>
        ))}
            ️ {readTime} min read
        </ArticleIntroduce>
        <ArticleContent>
            {content}
        </ArticleContent>
    </div>)
}