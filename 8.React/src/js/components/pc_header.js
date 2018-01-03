import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal } from 'antd'
const TabPane = Tabs.TabPane;
const FormItem = Form.Item
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PCHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        };
    };

    componentWillMount() {
        if (localStorage.userid != '') {
            this.setState({ hasLogined: true });
            this.setState({ userNickName: localStorage.userNickName, userid: localStorage.userid });
        }
    };

    setModalVisible(value) {
        // 登录/注册 对话框
        this.setState({
            modalVisible: value
        })
    };

    handleClick(e) {
        // 菜单栏项目点击
        if (e.key == "register") {
            this.setState({
                current: 'register'
            });
            this.setModalVisible(true);
        } else {
            this.setState({
                current: e.key
            })
        }
    };

    handleSubmit(e) {
        // 页面开始向 API 进行提交数据
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this.props.form.getFieldsValue();   // Form自带方法, 获取该Form内全部组件的值
        console.log(formData);

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action + "&username=" + formData.userName + "&password=" + formData.password + "&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    userNickName: json.NickUserName,
                    userid: json.UserId
                });
                localStorage.userid = json.UserId;   // localStorage可以简单的存储一些JSON对象，便简易应用的数据存储
                localStorage.userNickName = json.NickUserName;
            });
            
        if (this.state.action == "login") {
            this.setState({ hasLogined: true });
        }
        message.success('请求成功!');
        this.setModalVisible(false);
    };

    callback(key) {
        if (key == 1) {
            this.setState({ action: 'login' });
        } else if (key == 2) {
            this.setState({ action: 'register' });
        }
    };

    logout() {
        localStorage.userid = '';
        localStorage.userNickName = '';
        this.setState({ hasLogined: false });
    };

    render() {
        let { getFieldProps } = this.props.form;

        const userShow = this.state.hasLogined
            ?
            <Menu.Item key="logout" className="register">
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <Link to="/usercenter">
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </Link>
                &nbsp;&nbsp;
                <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
            </Menu.Item>
            :
            <Menu.Item key="register" className="register">
                <Icon type="idcard"></Icon>注册/登录
            </Menu.Item>

        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="/src/img/logo.png" alt="" />
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu
                            mode="horizontal"
                            onClick={this.handleClick.bind(this)}
                            selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="star" />头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="usergroup-add" />社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="lock" />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="global" />国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="smile-o" />娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="trophy" />体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="google" />科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="gift" />时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>

                        <Modal
                            title="用户中心"
                            wrapClassName="vartical-center-modal"
                            visible={this.state.modalVisible}
                            onCancel={() => this.setModalVisible(false)}
                            onOk={() => this.setModalVisible(false)}
                            okText="关闭">
                            <Tabs type="card" onChange={this.callback.bind(this)}>
                                <TabPane tab="登录" key="1">
                                    <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            <Input placeholder="请输入您的账号" {...getFieldProps('userName') } />
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input type="password" placeholder="请输入您的密码" {...getFieldProps('password') } />
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">登录</Button>
                                    </Form>
                                </TabPane>
                                <TabPane tab="注册" key="2">
                                    <Form horizontal="true" onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            <Input placeholder="请输入您的账户" {...getFieldProps('r_userName') } />
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input type="password" placeholder="请输入您的密码" {...getFieldProps('r_password') } />
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            <Input type="password" placeholder="请再次输入您的密码" {...getFieldProps('r_confirmPassword') } />
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>

                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}

export default PCHeader = Form.create({})(PCHeader);