import React from 'react'
import { Row, Col, Tabs, Carousel } from 'antd'
const TabPane = Tabs.TabPane
import PCNewsBlock from './pc_news_block'
import PCNewsImageBlock from './pc_news_image_block'
import PCProduct from './pc_product'

export default class PCNewsContainer extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            autoplay: true
        };

        const imageblock2 = document.body.clientWidth*5/6;   // js实现自适应布局

        return (
            <div>
                <Row>
                    <Col span={2}></Col>

                    <Col span={20} className="container">
                        {/* 左边轮播图 */}
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src="/src/img/carousel_1.jpg" alt="" /></div>
                                    <div><img src="/src/img/carousel_2.jpg" alt="" /></div>
                                    <div><img src="/src/img/carousel_3.jpg" alt="" /></div>
                                    <div><img src="/src/img/carousel_4.jpg" alt="" /></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={6} type="guoji" width="401px" cartTitle="国际头条" imageWidth="112px" />
                        </div>
                        {/* 中部选项卡新闻 */}
                        <Tabs className="tabs_news">
                            <TabPane tab="头条" key="1">
                                <PCNewsBlock count={22} type="top" width="100%" />
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count={22} type="guoji" width="100%" />
                            </TabPane>
                            <TabPane tab="娱乐" key="3">
                                <PCNewsBlock count={22} type="yule" width="100%" />
                            </TabPane>
                        </Tabs>
                        {/* 网易产品模块HTML */}
                        <Tabs className="tabs_product" style={{marginLeft:"20px"}}>
                            <TabPane tab="React News 产品" key="1">
                                <PCProduct />
                            </TabPane>
                        </Tabs>
                        {/* 两行图片新闻 */}
                        <div>
                            <PCNewsImageBlock count={10} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="118px" />
                            <PCNewsImageBlock count={20} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="118px" />
                        </div>
                    </Col>

                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
};