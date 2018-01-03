import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal, Upload, Card } from 'antd'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
const TabPane = Tabs.TabPane;
const FormItem = Form.Item
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MobileUserCenter extends React.Component {
    constructor() {
        super();
        this.state = {
            previewImage: '',
            previewVisible: false,
            usercollection: '',
            usercomments: ''
        }
    };

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };

        // 获取收藏列表API
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({ usercollection: json });
            });

        // 获取评论列表API
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({ usercomments: json });
            });
    };

    setPreviewVisible(value) {
        this.setState({ previewVisible: value });
    };

    render() {
        const props = {
            action: 'http://newsapi.gugujiankong.com/handler.ashx',
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            listType: 'picture-card',
            defaultFileList: [{
                uid: -1,
                name: 'xxx.png',
                state: 'done',
                url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
                thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
            }],
            onPreview: (file) => {
                this.setState({ previewImage: file.url, previewVisible: true });
            }
        };

        const { usercollection, usercomments } = this.state;

        const usercollectionList = usercollection.length
            ?
            usercollection.map((uc, index) => (
                <Card key={index} title={uc.uniquekey} extra={<a href={`/details/${uc.uniquekey}`}>查看</a>}>
                    <p>{uc.Title}</p>
                </Card>
            ))
            :
            '您还没有收藏任何文章'

        const usercommentsList = usercomments.length
            ?
            usercomments.map((comment, index) => (
                <Card key={index} title={`于 ${comment.datetime} 评论了文章`} extra={<a href={`/details/${comment.uniquekey}`}>查看</a>}>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            :
            '您还没有评论过任何文章 , 快去评论吧 !'

        return (
            <div>
                <MobileHeader />
                <Row>
                    <Col span={24}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">
                                <div>
                                    <Row>
                                        <Col span={24}>
                                            {usercollectionList}
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">
                                <Row>
                                    <Col span={24}>
                                        {usercommentsList}
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tab="头像设置" key="3">
                                <div className="clearfix">
                                    <Upload {...props}>
                                        <Icon type="plus" />
                                        <div className="ant-upload-text">上传照片</div>
                                    </Upload>
                                    <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                                        <img src={this.state.previewImage} alt="预览头像" />
                                    </Modal>
                                </div>
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
                <MobileFooter />
            </div>
        );
    };
};