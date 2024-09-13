"use client"

import { Dropdown, MenuProps, Space } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import Container from "./styles"

const items: MenuProps['items'] = [
    {
        label: <a href="https://www.antgroup.com">Profile</a>,
        key: '0',
        icon: <UserOutlined />,
    },
    {
        label: <a href="https://www.aliyun.com">Settings</a>,
        key: '1',
        icon: <SettingOutlined/>
    },
    {
        type: 'divider',
    },
    {
        label: 'Log out',
        key: '3',
        icon: <LogoutOutlined/>
    },
];

const HeaderComponent: React.FC = () => {

    return (
        <Container>
            <div className="main">
                <div className="centered">
                    <div className="logos">
                        <div>
                            <img style={{ height: 22 }} src="/logos/logo-icon.svg" />
                        </div>
                        <div className="divider"></div>
                        <div>

                            <img style={{ height: 35, marginTop: 5 }} src="/logos/logo-name.svg" />
                        </div>

                    </div>
                    <div className="input-search">
                        <input placeholder="Pesquisar" />
                    </div>
                    <div className="icons">
                        <img src="/icons/paper-plane.svg" />
                        <img className="hide-on-mobile" src="/icons/compass.svg" />
                        <img className="hide-on-mobile" src="/icons/heart.svg" />
                        <Dropdown className="hide-on-mobile" menu={{ items }} trigger={['click']} placement="bottomRight">
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <img src="/icons/person.svg" style={{cursor: "pointer"}}/>
                                </Space>
                            </a>
                        </Dropdown>


                    </div>
                </div>
            </div>
        </Container>
    )
}

export default HeaderComponent;