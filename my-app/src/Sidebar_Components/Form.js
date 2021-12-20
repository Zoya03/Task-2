import React, {useState} from "react";
import 'antd/dist/antd.css';
import { Form, Input, Select, Button, Radio, DatePicker} from 'antd';
import moment from 'moment';
import ModalDisplay from "./Modal";
import "./Form.css";

const dateFormat = 'YYYY/MM/DD';
const { Option } = Select;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  
   
function SignUpForm(props){
    
    const [formInfo, setFormInfo] = useState({
        firstName : '',
        lastName : '', 
        email : '',
        dob : '', 
        phone : '',
        password : '',
        cpaswrd: '',
        cnic : '',
        gender :'',
        city : ''
    });
    const [errors, setErrors] = useState({
        firstName: '', 
        lastName: '', 
        email: '',
        dob: '',
        phone: '',
        password: '', 
        cpaswrd: '',
        cnic :'',
        gender: '',
        city: ''
    });

    function valAssigned(event) {
        const name = event.target.name;
        const value = event.target.value;
        setFormInfo((newVal) =>{
            return{
                ...newVal, //calling the old values using spread Operator
                [name]: value, //adding new values 
            }
        });
    }

    const handleSubmit = (event) => {
         if(validate()){
            showModal();
          }
     };

    function validate(){
        
        //First Name
        let isValid = true;
        let errors={};
        if(!formInfo.firstName){
            errors.firstName = "First Name required";
            isValid = false;
            }

        //Last Name
        if(!formInfo.lastName){
            errors.lastName= "Last Name required"
            isValid = false;
            }
        
        //Email
        if(!formInfo.email){
            errors.email= "Email required"
            isValid = false;
        }
        else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formInfo.email))
        {
            errors.email="Email is invalid"
            isValid = false;
        }
        //Date of birth 
        if(!formInfo.dob){
            errors.dob="Date of Birth is required"
            isValid = false;
        }
        //Telephone Number
        if(!formInfo.phone){
            errors.phone="Phone number is required"
            isValid = false;
        }
        //Password
        if(!formInfo.password){
            errors.password= "Password is required"
            isValid = false;
        }
        else if(formInfo.password.length < 5){
            errors.password= "Password is not Strong"
            isValid = false;
        }
        //Password Confirmation
        if(!formInfo.cpaswrd){
            errors.cpaswrd= "Confirm your password"
            isValid = false;
        }
        else if(formInfo.cpaswrd !== formInfo.password){
            errors.cpaswrd= "Passwords do not match"
            isValid = false;
        }
        //cnic
        if(!formInfo.cnic){
            errors.cnic= "CNIC is required"
            isValid = false;
        }
         //gender
         if(!formInfo.gender){
            errors.gender= "Select your gender"
            isValid = false;
        }
         //city
         if(!formInfo.city){
            errors.city= "City required"
            isValid = false;
        }

        setErrors({
            ...errors
        });
        return isValid;
       
    }
    
    let [isModalVisible, setIsModalVisible] = useState(false);
    let showModal = (props) => {
        isModalVisible = !isModalVisible;
        setIsModalVisible(isModalVisible);
        console.log(formInfo)
    }

    return(
    <>
    <Form  id="regForm" clasName="regForm" {...formItemLayout}>
        <Form.Item label="Registration Form"></Form.Item>
        <Form.Item name="firstName" label="First Name">
            <Input name="firstName" type="text" value={formInfo.firstName} placeholder="Type your First Name" onChange={(valAssigned)}/>
            {errors.firstName && <p className="errMsg">{errors.firstName}</p>}
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
            <Input name="lastName" type="text" value={formInfo.lastName} placeholder="Type your Last Name"   onChange={(valAssigned)}/>
            {errors.lastName && <p className="errMsg">{errors.lastName}</p>}       
        </Form.Item>
        <Form.Item name="email" label="Email">
            <Input name ="email" type="email" value={formInfo.email}  pattern=".+@globex\.com" placeholder="Enter Email"  onChange={(valAssigned)}/>
            {errors.email && <p className="errMsg">{errors.email}</p>}
        </Form.Item>

        <Form.Item name="dob" label="Date of Birth">
            <DatePicker 
              style ={{width: "100"}}
              name="dob" 
              value={formInfo.dob}
              defaultValue={moment('2015/01/01', dateFormat)} 
              format={dateFormat}   
              onChange={(birthDate)=>valAssigned({target: {name: "dob", value: birthDate}})}
            />
             {errors.dob && <p className="errMsg">{errors.dob}</p>}
        </Form.Item>
        <Form.Item name="phone" label="Phone Number">
            <Input name="phone"  type="number"  value={formInfo.phone} placeholder="--- ---------"   onChange={(valAssigned)}/>
            {errors.phone && <p className="errMsg">{errors.phone}</p>}
        </Form.Item>
        <Form.Item name ="password" label="Password">
            <Input.Password name="password" type="password" value={formInfo.password} placeholder="*****"  onChange={(valAssigned)}/>
            {errors.password && <p className="errMsg">{errors.password}</p>}
        </Form.Item>
        <Form.Item name ="cpaswrd" label="Confirm Password">
            <Input.Password name="cpaswrd" type="cpaswrd" value={formInfo.cpaswrd} placeholder="*****"  onChange={(valAssigned)}/>
            {errors.cpaswrd && <p className="errMsg">{errors.cpaswrd}</p>}
        </Form.Item>
        <Form.Item name="cnic" label="CNIC">
            <Input  name="cnic" type="number" value={formInfo.cnic} placeholder="---- ------------"  onChange={(valAssigned)}/>
            {errors.cnic && <p className="errMsg">{errors.cnic}</p>}
        </Form.Item>
        
        <Form.Item name="gender" label="Gender">
        <Radio.Group name="gender" type="radio" value={formInfo.gender}  onChange={(getGender)=>{valAssigned({target: {name: "gender", value: getGender.target.value}})}}>
            <Radio value={'Male'}>Male</Radio>
            <Radio value={'Female'}>Female</Radio>
            <Radio value={'Other'}>other</Radio>
        </Radio.Group>
        {errors.gender && <p className="errMsg">{errors.gender}</p>}
        </Form.Item>
        
        <Form.Item  name="city" label="City" >
            <Select name="city" value={formInfo.city} placeholder="Select your City" onChange={(e)=>{valAssigned({target: {name: "city", value: e}})}}>
                <Option value="Islamabad">Islamabad</Option>
                <Option value="Lahore">Lahore</Option>
                <Option value="Karachi">Karachi</Option>
                <Option value="Peshawar">Peshawar</Option>
                <Option value="Quetta">Quetta</Option>
                <Option value="Multan">Multan</Option>
            </Select>  
            {errors.city && <p className="errMsg">{errors.city}</p>}
        </Form.Item>
    
        <Form.Item  {...tailFormItemLayout} >
            <Button type="primary" id="Btn" value="submit" onClick={handleSubmit} >Register</Button>
            <ModalDisplay isModalVisible={isModalVisible}  data={formInfo} setIsModalVisible={showModal}  />
        </Form.Item>
    </Form>
    </>
    );

}

export default SignUpForm;
