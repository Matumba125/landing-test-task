import React from 'react';
import arrow from '../../../shared/icons/footer/arrow.svg'
import style from './footer.module.scss'

const BlogItem = ({data}) => {
    return (
        <div className={style.blogItem}>
            <img className={style.avatar} src={data.avatar} alt={'avatar'}/>
            <div className={style.postData}>
                <div>
                    <img src={arrow} alt={'arrow'}/>
                    <span>{data.date}</span>
                </div>
                <p>{data.text}</p>
            </div>
        </div>
    );
};

export default BlogItem;