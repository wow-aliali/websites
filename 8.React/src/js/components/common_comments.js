import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal, Card, notification } from 'antd'
const TabPane = Tabs.TabPane;
const FormItem = Form.Item
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class CommonComments extends React.Component {
    constructor() {
        super();
        this.state = {
            comments: ''
        }
    };

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({ comments: json });
            });
        console.log(this.props.params);
    };

    handleSubmit(e) {
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formdata = this.props.form.getFieldValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                notification['success']({
                    message: 'ReactNews提醒',
                    description: '评论此文章成功!'
                });
                this.componentDidMount();   // 提交评论之后，重新获取所有评论
            });
    };

    addUserCollection() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                // 收藏成功以后进行全局的提醒
                notification['success']({
                    message: 'ReactNews提醒',
                    description: '收藏此文章成功!'
                });
            });
    };

    render() {
        let { getFieldProps } = this.props.form;

        const { comments } = this.state;   // 简化this.state.comments的调用
        const commentList = comments.length
            ?
            comments.map((comment, index) => (
                <Card key={index} title={comment.UserName} extra={<a href="#">发布于 {comment.datetime}</a>}>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            :
            '没有用户评论!'

        return (
            <div className="comment">
                <Row>
                    <Col span={24}>
                        {commentList}
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="您的评论">
                                <Input type="textarea" placeholder="请输入您的评论" {...getFieldProps('remark', { initialValue: '' }) } />
                            </FormItem>
                            <Button type="primary" htmlType="submit">提交评论</Button>&nbsp;&nbsp;
                            <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏文章</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    };
};

export default CommonComments = Form.create({})(CommonComments);