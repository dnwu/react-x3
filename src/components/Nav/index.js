import React, { Component } from 'react';
import menuList from './../../data/navMenuData'
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'
import './index.scss'
const SubMenu = Menu.SubMenu;
class Nav extends Component {
    state = {
        hash: ''
    }

    componentWillMount(){
        this.setState({
            hash: this.props.hash
        })
    }

    menu = () => {
        return menuList.map( item => {
            if(item.children) {
                return <SubMenu
                    key={item.key}
                    title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}
                >
                    {item.children.map( item => {
                       return <Menu.Item key={item.key}>
                            <NavLink to = {item.key} replace>{item.name}</NavLink>        
                        </Menu.Item>
                    } )}
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
                    defaultSelectedKeys={['/internet/activation']}
                    defaultOpenKeys = {['internet']}
                     mode="inline">
                    {this.menu()}
                </Menu>
            </div>
        );
    }
}

export default Nav;