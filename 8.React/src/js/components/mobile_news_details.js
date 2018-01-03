import React from 'react'
import { Row, Col, BackTop } from 'antd'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import CommonComments from './common_comments'

export default class MobileNewsDetails extends React.Component {
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
            <div id="mobileDetailsContainer">
                <MobileHeader />
                <div className="ucmobileList">
                    <Row>
                        <Col span={24} className="container">
                            <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                            {/* dangerouslySetInnerHTML可以渲染原生HTML内容 */}
                            <CommonComments uniquekey={this.props.match.params.uniquekey} />
                        </Col>
                    </Row>
                </div>
                <MobileFooter />
                <BackTop />
            </div>
        );
    };
}