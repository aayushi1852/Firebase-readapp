import React,{useState,useEffect} from 'react';
import "./Add.css";
import app from '../firebase';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
const initalstate={
    name:"",
    email:"",
    contact:""
}
const Add = () => {
    const[state,setState] = useState(initalstate);
    const[data,setData]=useState({});
    const{name,email,contact} = state;
    const history = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !contact){
            toast.error("Please provide value in each field");
        } else{
            app.database().ref("contact").push(state, (err) => {
                if (err) {
                    toast.error(err);
                }else{
                    toast.success("Contact Added Successfully");
                }
            });        
            setTimeout(() => Navigate.push("/"), 500);
        }
    };
    return (
        <div>
            <h2>Add Contact</h2>
            <form style={{margin:"auto",padding:"15px",maxWidth:"400px",alignContent:"center",}}
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name..." value={name} onChange={handleInputChange}
                />
                <label htmlFor="name">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email..." value={email} onChange={handleInputChange}
                />
                <label htmlFor="name">Contact</label>
                <input type="number" id="contact" name="contact" placeholder="Your Contact Number..." value={contact} onChange={handleInputChange}
                />
                <input type="submit" value ="save" onSubmit={handleSubmit}/>
            </form>
        </div>
    );
};
export default Add;