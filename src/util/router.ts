import {history} from 'umi';

function goIndex() {
    history.push('/');
}

function goArticle(){
    history.push('/article');
}
export default {
    goIndex,goArticle
}