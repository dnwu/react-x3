import React, { Component } from 'react';
import { Modal, Checkbox } from 'antd';
import './faceDB.scss'
const CheckboxGroup = Checkbox.Group;


const plainOptions = ['万科小区1期', '万科小区2期', '万科小区3期', '万科小区4期', '万科小区5期'];
class FaceDB extends Component {
    state = {
        visible: false,
        checkedList: [],
        indeterminate: true,
        checkAll: false,
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible
        })
    }

    handleOk = () => {
        console.log(this.state.checkedList);
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
        this.props.sonFaceDB(false)
    }

    onChange = (checkedList) => {
        console.log(checkedList);
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length,
        });
    }
    onCheckAllChange = (e) => {
        console.log(e);
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }

    render() {
        return (
            <Modal
                className='face-db-modal'
                title="下载人脸库"
                cancelText='取消'
                okText='确定'
                width={300}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >

                <Checkbox
                    indeterminate={this.state.indeterminate}
                    onChange={this.onCheckAllChange}
                    checked={this.state.checkAll}
                >
                    全部
                </Checkbox>
                <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
            </Modal>
        );
    }
}

export default FaceDB;