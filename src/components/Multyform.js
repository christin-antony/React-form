import React, { useState } from 'react';
import './Multyform.css';

const Multyform = () => {
const [data, setData] = useState({name: "", phone: "",email: "",address: "",interest:"", select: "",gender: "" });

const getData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
 };

 const convert = (e) => {
     e.preventDefault();
        console.log(data);
};
const getValue = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
        if (checked) {
         
            setData({
                ...data,interest: [...data.interest, value]
            });
        } else {
           
            setData({
                ...data,interest: data.interest.filter(item => item !== value)
            });
        }
    }
}

return (
     <div className='div0'>
    <form onSubmit={convert}>
                <div className='div1'>
                    <h1 className='h1'>Multiple field form </h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label className='label1'>Name</label>
                                </td>
                                <td>
                                    <input type="text" name="name" value={data.name} onChange={getData} className='in1' />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className='label1'>Phone No</label>
                                </td>
                                <td>
                                    <input type="tel" name="phone" value={data.phone} onChange={getData} className='in1' />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className='label1'>Email ID</label>
                                </td>
                                <td>
                                    <input type="email" name="email" value={data.email} onChange={getData} className='in1' />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className='label1'>Address</label>
                                </td>
                                <td>
                                    <textarea name="address" value={data.address} onChange={getData} cols="30" rows="10" className='in1'></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className='label1'>Qualification</label>
                                </td>
                                <td >
                                    <select name="select" onChange={getData} value={data.select}>
                                    <option value="B.tech">Select</option>
                                        <option value="B.tech">B.tech</option>
                                        <option value="BCA">BCA</option>
                                        <option value="MCA">MCA</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label className='label1'>Select interest</label></td>
                                <td>
                                <input
                            type="checkbox"                       
                            name="interest"
                            value="Networking"
                            onClick={getValue}
                            checked={data.interest.includes("Networking")}/>Networking
                         <input
                        type="checkbox"                       
                        name="interest"
                        value="Graphics"
                        onClick={getValue}
                        checked={data.interest.includes("Graphics")}
                    />Graphics    <input
                    type="checkbox"                       
                    name="interest"
                    value="web designing"
                    onClick={getValue}
                    checked={data.interest.includes("web designing")}
                /> web                                 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className='label1'>Gender</label>
                                </td>
                                <td>
                                    <input type="radio" name="gender" value="male" onChange={getData} checked={data.gender === "male"} />Male

                                    <input type="radio" name="gender" value="female" onChange={getData} checked={data.gender === "female"} />Female

                                    <input type="radio" name="gender" value="other" onChange={getData} checked={data.gender === "other"} />Other
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type='submit' className='btn'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Multyform;
