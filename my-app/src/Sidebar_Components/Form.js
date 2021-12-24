import React, {useState, useEffect, useCallback} from "react";
import 'antd/dist/antd.css';
import { Form, Input, Select, Button, Radio, DatePicker} from 'antd';
//import moment from 'moment';
import ModalDisplay from "./Modal";
import "./Form.css";

//const dateFormat = 'YYYY/MM/DD';
const { Option } = Select;

function SignUpForm(props){
    const [formInfo, setFormInfo] = useState({});
    
    const [loaderMsg, setLoaderMsg] = useState();
    const [submitAlertMsg, setSubmitAlertMsg] = useState();
    const [endMsg, setEndMsg] =useState();
    
    
     useEffect(() => {
        setLoaderMsg("Welcome to Student Console");
        //console.log("Welcome to Student Console");
        setSubmitAlertMsg(false);
        
        return()=>{
            setEndMsg(false);
            console.log("Component unMounted");
            }
        }, []);
   
    const displayValues =  useCallback((formInput) => { 
        const values={
            ...formInput,
        }
        setFormInfo((formInput));
        setLoaderMsg(false);
        setSubmitAlertMsg(true);
        showModal();
    }, [formInfo]);

     let [isModalVisible, setIsModalVisible] = useState(false);
     let showModal = useCallback((props) => {
          isModalVisible = !isModalVisible;
          setIsModalVisible(isModalVisible);
     }, [isModalVisible]);

    return(
    <>
    {<h1>{loaderMsg}</h1>}
    {submitAlertMsg && <h2>Form Submitted successfully</h2>}
    {endMsg && <h2>Thank you!</h2>}
    <Form  id="regForm" clasName="regForm"  onFinish={displayValues} 
    onFinishFailed={(error ) =>{
        console.log({error});
    }} >
        <Form.Item label="Registration Form"></Form.Item>
        <Form.Item
        
            name="firstName"
            label="First Name"
            rules={[
                {
                required: true,
                message : "First name required",
                },
                {whitespace: true},
            ]}
            hasFeedback
        >
            <Input name="firstName" value={formInfo.firstName} type="text" placeholder="Type your First Name"/>

        </Form.Item>
        <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
                {
                required: true,
                message : "Last name required",
                },
                {whitespace: true},
            ]}
            hasFeedback
        >
            <Input name="lastName" value={formInfo.lastName} typetype="text" placeholder="Type your Last Name" />
        </Form.Item>
        <Form.Item
            name="email"
            label="Email"
            rules={[
                {
                    type: "email",
                    message : "Email not Valid",
                },
                {
                    required: true,
                    message : "Email required",
                },
                {whitespace: true},
            ]}
            hasFeedback
        >
            <Input name ="email" value={formInfo.email} type="email" placeholder="Enter Email" />
        </Form.Item>

        <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[
                {
                required: true,
                message : "Date of birth required",
                },
            ]}
            hasFeedback
            >
            <DatePicker
              value={formInfo.dob}
              style ={{width: "100"}}
              name="dob"
              //defaultValue={moment('2015/01/01', dateFormat)}
              //format={dateFormat}

            />
        </Form.Item>
        <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
                {
                required: true,
                message : "Phone Number required",
                },
                {whitespace: true},
            ]}
            hasFeedback
            >
            <Input name="phone" value={formInfo.phone} type="number" placeholder="+92 ---------" />
        </Form.Item>
        <Form.Item
            name ="password"
            label="Password"
            rules={[
                {
                required: true,
                message : "Password cannot be empty",
                },
                {
                min : 4,
                message : "Password cannot be less than 4 characters",
                },
                {whitespace: true},
            ]}
            hasFeedback
        >
            <Input.Password name="password" value={formInfo.password} type="password" placeholder="*****" />
        </Form.Item>
        <Form.Item
            name ="cpaswrd"
            label="Confirm Password"
            rules={[
                {
                required: true,
                message : "Please set a strong password",
                },
                ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('The two passwords that you entered do not match!');
                    },
                  }),
                {whitespace: true},
            ]}
            hasFeedback
        >
            <Input.Password name="cpaswrd" value={formInfo.cpaswrd} type="cpaswrd" placeholder="*****"/>
        </Form.Item>
        <Form.Item
            name="cnic"
            label="CNIC"
            rules={[
                {
                required: true,
                message : "CNIC required",
                },
                {whitespace: true},
            ]}
            hasFeedback
            >
            <Input  name="cnic" value={formInfo.cnic} type="number" placeholder="---- ------------" />
        </Form.Item>

        <Form.Item
            name="gender"
            label="Gender"
            rules={[
                {
                required: true,
                message : "Gender required",
                },
                {whitespace: true},
            ]}
            hasFeedback
            >
        <Radio.Group name="gender" value={formInfo.gender} type="radio" >
            <Radio value={'Male'}>Male</Radio>
            <Radio value={'Female'}>Female</Radio>
            <Radio value={'Other'}>other</Radio>
        </Radio.Group>

        </Form.Item>

        <Form.Item
            name="city"
            label="City"
            rules={[
                {
                required: true,
                message : "City required",
                },
                {whitespace: true},
            ]}
            hasFeedback
             >
            <Select name="city" value={formInfo.city} placeholder="Select your City">
                <Option value="Islamabad">Islamabad</Option>
                <Option value="Lahore">Lahore</Option>
                <Option value="Karachi">Karachi</Option>
                <Option value="Peshawar">Peshawar</Option>
                <Option value="Quetta">Quetta</Option>
                <Option value="Multan">Multan</Option>
            </Select>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit"  >Register</Button>
            <ModalDisplay isModalVisible={isModalVisible} data={formInfo} setEndMsg={(v)=>setEndMsg(v)} setIsModalVisible={showModal} />
        </Form.Item>
    </Form>
    </>
    );

}

export default SignUpForm;
