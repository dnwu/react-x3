import React, { Component } from 'react';
import menuList from './../../data/navMenuData'
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import './index.scss'
const SubMenu = Menu.SubMenu;
class Nav extends Component {
    state = {
        hash: '/internet/activation',
        defaultOpenKey: 'internet'
    }
    componentWillMount() {
        let hash, defaultOpenKey
        try {
            // 刷新页面, 默认选中tab
            hash = window.location.hash.replace(/#|\?.*$/g, '')
            // 刷新页面默认展开tab
            defaultOpenKey = hash.match(/\/(\S*)\//)[1]
            this.setState({
                hash,
                defaultOpenKey
            })
        } catch (err) {
            console.log(err);
        }
        window.addEventListener('hashchange', () => {
            hash = window.location.hash.replace(/#|\?.*$/g, '')
            // 刷新页面默认展开tab
            defaultOpenKey = hash.match(/\/(\S*)\//)[1]
            // console.log(this);
            this.setState({
                hash,
                defaultOpenKey
            })
        })
        // console.log(hash, defaultOpenKey);


    }

    menu = () => {
        return menuList.map(item => {
            if (item.children) {
                return <SubMenu
                    key={item.key}
                    title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}
                >
                    {item.children.map(item => {
                        return <Menu.Item key={item.key}>
                            <NavLink to={item.key} replace>{item.name}</NavLink>
                        </Menu.Item>
                    })}
                </SubMenu>
            }
            return true
        })
    }

    render() {
        return (
            <div>
                <div className="logo" >
                    TERMINUS
                </div>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={[this.state.hash]}
                    defaultOpenKeys={[this.state.defaultOpenKey]}
                    mode="inline">

                    {this.menu()}
                </Menu>
            </div>
        );
    }
}

export default Nav;