import React, { Component } from 'react';
import { Modal, Icon, Button } from 'antd';
import './index.scss'

class TestModal extends Component {
    state = {}
    componentWillReceiveProps(nextProps) {
        this.setState({
            testModalVisible: nextProps.testModalVisible
        })
    }

    Iknow = () => {
        this.setState({
            testModalVisible: false,
        });
        this.props.sonLinkTest(false)
    }
    render() {
        return (
            <Modal
                className='test-modal'
                closable={false}
                footer={null}
                width={300}
                centered={true}
                visible={this.state.testModalVisible}
            >

                <div className='err'>
                    {/* <Icon type="check-circle" /> */}
                    <Icon type="exclamation-circle" />
                </div>
                <div>
                    <span>视频连接:</span>
                    <span className='err'>正常</span>
                </div>
                <div>
                    <span>解码:</span>
                    <span className='success'>正常</span>
                </div>
                <div>
                    <Button onClick={this.Iknow} type='primary' size='small'>我知道了</Button>
                </div>
            </Modal>
        );
    }
}

export default TestModal;