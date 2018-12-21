/*
* @Author: 12574
* @Date:   2018-10-23 10:15:51
* @Last Modified by:   12574
* @Last Modified time: 2018-11-07 10:04:22
*/
import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    overflow: hidden;
    margin: 5px auto;
`
export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width:625px;
    float: left;
    overflow: hidden;
    .ant-carousel .slick-slide {
      text-align: center;
      height: 270px;
      line-height: 270px;
      float: left;
    }
    .ant-carousel .slick-slide img {
        width: 625px;
        height: 270px;
    }
`
export const HomeRight = styled.div`
    width:280px;
    float: right;
`

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    background: #f7f7f7;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        width: 125px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: blod;
        color:#333;
    }
    .desc {
        font-size: 13px;
        line-height: 18px;
        color: 999;
    }
`
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom: 5px;
    background-size: contain;
    .recommendImg {
        width: 280px;
        height: 50px;
    }
`

export const WriterWrapper = styled.div`
    width: 270px;
    height: 300px;
    line-height: 300px;
    text-align: center;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
`

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`