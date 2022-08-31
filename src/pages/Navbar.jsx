import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './navbar.css'

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname } = location;
    return (
        <>
            <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['/rankings']} selectedKeys={[pathname]}>
                <Menu.Item onClick={() => {navigate('/')}}>
                    <img className='navbar-logo' src={logo} alt="logo" />
                </Menu.Item>
                <Menu.Item onClick={() => {navigate('/rankings')}} key='/rankings' icon={<MailOutlined />}>
                Navigation One
                </Menu.Item>
                <Menu.SubMenu key="SubMenu" title="Navigation Two - Submenu" icon={<SettingOutlined />}>
                <Menu.Item key="two" icon={<AppstoreOutlined />}>
                    Navigation Two
                </Menu.Item>
                <Menu.Item key="three" icon={<AppstoreOutlined />}>
                    Navigation Three
                </Menu.Item>
                <Menu.ItemGroup title="Item Group">
                    <Menu.Item key="four" icon={<AppstoreOutlined />}>
                    Navigation Four
                    </Menu.Item>
                    <Menu.Item key="five" icon={<AppstoreOutlined />}>
                    Navigation Five
                    </Menu.Item>
                </Menu.ItemGroup>
                </Menu.SubMenu>
            </Menu>
        </>
    )
};

export default Navbar;