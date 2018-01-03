import React from 'react'
import { Card } from 'antd'
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default class PCNewsImageBlock extends React.Component {
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
        const styleImage = {
            display: "block",
            width: this.props.imageWidth,
            height: "90px"
        };
        const styleH3 = {
            width: this.props.imageWidth,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
        };
        
        const { news } = this.state;
        const newsList = news.length    // 0为假
            ?
            news.map((newsItem, index) => (
                // map() 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
                // 第一个参数为数组中正在处理的当前元素, 第二个为数组中正在处理的当前元素的索引
                <div key={index} className="imageblock" >
                    <Link to={'/details/' + newsItem.uniquekey}>
                        <div className="custom-image">
                            <img style={styleImage} src={newsItem.thumbnail_pic_s} alt="" />
                        </div>
                        <div className="custom-card">
                            <h3 style={styleH3}>{newsItem.title}</h3>
                            <p style={styleH3}>{newsItem.author_name}</p>
                        </div>
                    </Link>
                </div>
            ))
            :
            '没有加载到任何新闻';

        return (
            <div className="topNewsList" style={{ marginTop: "6px" }}>
                <Card title={this.props.cartTitle} bordered={true} style={{ width: this.props.width }} >
                    {newsList}
                </Card>
            </div>
        )
    }
}