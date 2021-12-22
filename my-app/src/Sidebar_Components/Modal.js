import React from "react";
import { Modal } from 'antd';
import moment from 'moment';

    function ModalDisplay(props){
      console.log(props)
      const handleOk = () => {
         props.setIsModalVisible(false);
      };

      const handleCancel = () => {
        props.setIsModalVisible(false);
      };

    return (
      <>
        <Modal title="Form Information" visible={props.isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <h2>Registration Form:</h2>
            <p>Full Name: {props.data.firstName} {props.data.lastName}</p>
            <p>Email: {props.data.email}</p>
            <p>Date of Birth: {moment(props.data.dob).format("YYYY-DD-MM")}</p>
            <p>Phone #: {props.data.phone}</p>
            <p>Phone #: {props.data.cnic}</p>
            <p>Gender: {props.data.gender}</p>
            <p>City: {props.data.city} </p>

        </Modal>
      </>
    );
  }
  export default ModalDisplay;
