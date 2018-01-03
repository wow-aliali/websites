import React from 'react'
import { Row, Col, BackTop } from 'antd'
import PCHeader from './pc_header'
import PCFooter from './pc_footer'
import PCNewsImageBlock from './pc_news_image_block'
import CommonComments from './common_comments'

export default class PCNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        }
    };

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({ newsItem: json });
                document.title = this.state.newsItem.title + " - React News"   // 修改页面标题
            });
        console.log(this.props.params);
    };

    createMarkup() {
        return { __html: this.state.newsItem.pagecontent }    // pagecontent为API返回的新闻详情(HTML内容)
    }

    render() {
        return (
            <div>
                <PCHeader />
                <Row>
                    <Col span={2}></Col>

                    <Col span={14} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        {/* dangerouslySetInnerHTML可以渲染原生HTML内容 */}
                        <CommonComments uniquekey={this.props.match.params.uniquekey} />
                    </Col>

                    <Col span={6}>
                        <PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="171px" />
                    </Col>

                    <Col span={2}></Col>
                </Row>
                <PCFooter />
                <BackTop />
            </div>
        );
    };
}