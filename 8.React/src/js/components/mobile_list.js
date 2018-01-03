import React from 'react'
import { Row, Col } from 'antd'
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default class MobileList extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''   // 初始化news 用来接收API返回的数据
        }
    }

    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({
                news: json
            }));
    }

    render() {
        const { news } = this.state;
        const newsList = news.length    // 0为假
            ?
            news.map((newsItem, index) => (
                // map() 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
                // 第一个参数为数组中正在处理的当前元素, 第二个为数组中正在处理的当前元素的索引
                <section key={index} className="m_article list-item special_section clearfix" >
                    <BrowserRouter>
                        <Link to={'/details/' + newsItem.uniquekey}>
                            <div className="m_article_img">
                                <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
                            </div>
                            <div className="m_article_info">
                                <div className="m_article_title">
                                    <span>{newsItem.title}</span>
                                </div>
                                <div className="m_article_desc clearfix">
                                    <div className="m_article_desc_l">
                                        <span className="m_article_channel">{newsItem.realtype}</span>
                                        <span className="m_article_time">{newsItem.date}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </BrowserRouter>
                </section>
            ))
            :
            '没有加载到任何新闻';

        return (
            <div>
                <Row>
                    <Col span={24}>
                        {newsList}
                    </Col>
                </Row>
            </div>
        )
    }
}