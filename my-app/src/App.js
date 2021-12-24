import 'antd/dist/antd.css';
import React, {useState, useEffect} from 'react';
import { Layout, Menu } from 'antd';
import './Sidebar_Components/Form.js';
import Avatar from 'antd/lib/avatar/avatar';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Sidebar_Components/Home';
import AboutUs from './Sidebar_Components/AboutUs';
import ContactUs from './Sidebar_Components/ContactUs.js';
import SignUpForm from './Sidebar_Components/Form';

const { Header, Content, Sider } = Layout;

function App(){
    const [loaderMsg, setLoaderMsg] = useState("false");
   
    useEffect(() => {
        setLoaderMsg("Welcome to Student Console");
    }, []);
  
return(
    <>
    
    <Layout>
        <Header className="header" style={{padding: 10}}>
            <div className="logo" />
            <Avatar style={{float:"right"}} />
            <h1 style={{color:"white"}} level={3}>Student Console</h1>
        </Header>
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    <Link to ="/"><Menu.Item key="1">Dashboard</Menu.Item></Link>
                    <Link to = "'/About'"><Menu.Item key="2">About US</Menu.Item></Link>
                    <Link to ="/Form"><Menu.Item key="3">Form</Menu.Item></Link>
                    <Link to ="/ContactUs "> <Menu.Item key="4">Contact</Menu.Item></Link>
                </Menu>
            </Sider>
            <Layout>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}>
                    <Routes>
                        <Route>
                            <Route path='/' element={<Home />}/>
                            <Route path='/About' element={<AboutUs />}/>
                            <Route path='/ContactUs' element={<ContactUs />}/>
                            <Route path='/Form' element={<SignUpForm loaderMsg={loaderMsg} />}/>
                        </Route>
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    </Layout>
    </>
);
}
export default App;