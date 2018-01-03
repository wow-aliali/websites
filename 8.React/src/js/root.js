import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import MediaQuery from 'react-responsive'  // 引入react-responsive模块
import { } from 'antd'
import 'antd/dist/antd.css'
import PCIndex from './components/pc_index'
import PCNewsDetails from './components/pc_news_details'
import MobileIndex from './components/mobile_index'
import MobileNewsDetails from './components/mobile_news_details'
import PCUserCenter from './components/pc_usercenter'
import MobileUserCenter from './components/mobile_usercenter'

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <BrowserRouter>
                        <div>
                            <Route exact path="/" component={PCIndex} />
                            <Route path="/details/:uniquekey" component={PCNewsDetails} />
                            <Route path="/usercenter" component={PCUserCenter} />
                        </div>
                    </BrowserRouter>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <BrowserRouter>
                        <div>
                            <Route exact path="/" component={MobileIndex} />
                            <Route exact path="/details/:uniquekey" component={MobileNewsDetails} />
                            <Route path="/usercenter" component={MobileUserCenter} />
                        </div>
                    </BrowserRouter>
                </MediaQuery>
            </div>
        )
    }
}

// 替换之前的 Index, 变成了程序的入口
ReactDOM.render(<Root />, document.getElementById('mainContainer'));