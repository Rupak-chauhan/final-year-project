import axios from "axios";
import React, { useState } from "react";
import '../App.css';

const PatientDetail = () =>{ 
    let [age, setAge] = useState();
    let [neighbourhood, setNeighbourhood] = useState();
    let [ date, setDate] = useState();
    let [gender, setGender]  = useState("male");
    let [scholarship, setScholarship]  = useState(false);
    let [hipertension, setHipertension]  = useState(false);
    let [diabetes, setDiabetes]  = useState(false);
    let [alcoholism, setAlcoholism]  = useState(false);
    let [handicap, setHandicap]  = useState(false);
    let [sms, setSms]  = useState(false);

    function ageChangeHandler(e){
        age = e.target.value;
    }

    function neighbourhoodChangeHandler(e){
        neighbourhood = e.target.value;
    }

    function dateChangeHandler(e){
        date = e.target.value;
    }

    function genderChangeHandler(e){
        gender = e.target.value;
    }

    function scholarshipHandler(e){
        scholarship = e.target.value;
    }

    function hipertensionHandler(e){
        hipertension=e.target.value;
    }
    function diabetesHandler(e){
        diabetes=e.target.value;
    }
    function alcoholismHandler(e){
        alcoholism=e.target.value;
    }
    function handicapHandler(e){
        handicap=e.target.value;
    }
    function smsHandler(e){
        sms=e.target.value;
    }
    async function submitHandler(e){
        e.preventDefault(); 
        var patientData = {age, neighbourhood, date, gender, scholarship, hipertension, diabetes, alcoholism, handicap, sms};
        const formData = new FormData();
        // var pa = ["rupak", "deepak"]
        // await formData.append('patientData', pa);
        // await formData.append('patientDataa', "deepak");
        await formData.append('age', age)
        await formData.append('neighbourhood', neighbourhood)
        await formData.append('date', date)
        await formData.append('gender', gender)
        await formData.append('scholarship', scholarship)
        await formData.append('hipertension', hipertension)
        await formData.append('diabetes', diabetes)
        await formData.append('alcoholism', alcoholism)
        await formData.append('handicap', handicap)
        await formData.append('sms', sms)
        const response = await axios.post("http://127.0.0.1:5000/predict", formData);
        
        console.log(patientData);
        console.log(response);
    }
    return(
        <form className="patient-form">
            <div className="form-group">
                <label htmlFor="age">
                    Age
                </label>
                <input type="number" id="age" name="age" placeholder="Enter the age of patient" onChange={ageChangeHandler}/>
            </div>

            <div className="form-group">
                <label htmlFor="neigh">
                    Neighbourhood
                </label>
                <input type="text" id="neigh" name="neighbourhood" placeholder="where you want to take appointment" onChange={neighbourhoodChangeHandler}/>
            </div>

            <div className="form-group">
                <label htmlFor="appointed">
                    Appointment Date
                </label>
                <input type="date" id="appointed" name="appointment-date" placeholder="Date you want to take appointment" onChange={dateChangeHandler}/>
            </div>

            <div className="form-group">
                <label htmlFor="gender">
                    Gender
                </label>
                <div className="radio-groups">
                <div className="radio-group">
                    <label htmlFor="male">Male:</label>
                    <input type="radio" name="gender" id="male" value="male"  onChange={genderChangeHandler} />
                </div>
                <div className="radio-group">
                    <label htmlFor="female">Female:</label>
                    <input type="radio" name="gender" id="female" value="female" onChange={genderChangeHandler}/>
                </div>
                <div className="radio-group">
                    <label htmlFor="other">Other:</label>
                    <input type="radio" name="gender" id="Other" value="other" onChange={genderChangeHandler}/>
                </div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="scholarship">
                    Scholarship
                </label>
                <div className="radio-groups">
                <div className="radio-group">
                    <label htmlFor="yes">yes:</label>
                    <input type="radio" name="scholarship" id="yes" value="true" onChange={scholarshipHandler}/>
                </div>
                <div className="radio-group">
                    <label htmlFor="no">no:</label>
                    <input type="radio" name="scholarship" id="no" value="false" onChange={scholarshipHandler} />
                </div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="hiper">
                    Hipertension
                </label>
                <div className="radio-groups">
                <div className="radio-group">
                    <label htmlFor="y">yes:</label>
                    <input type="radio" name="hipertension" id="y"  value="true" onChange={hipertensionHandler}/>
                </div>
                <div className="radio-group">
                    <label htmlFor="n">no:</label>
                    <input type="radio" name="hipertension" id="n" value="false"  onChange={hipertensionHandler}/>
                </div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="dia">
                    Diabetes
                </label>
                <div className="radio-groups">
                <div className="radio-group">
                    <label htmlFor="diy">yes:</label>
                    <input type="radio" name="diabetes" id="diy"  value="true" onChange={diabetesHandler}/>
                </div>
                <div className="radio-group">
                    <label htmlFor="din">no:</label>
                    <input type="radio" name="diabetes" id="din" value="false" onChange={diabetesHandler}/>
                </div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="accho">
                    Alcoholism
                </label>
                <div className="radio-groups">
                <div className="radio-group">
                    <label htmlFor="aly">yes:</label>
                    <input type="radio" name="alcoholism" id="aly" value="true"  onChange={alcoholismHandler}/>
                </div>
                <div className="radio-group">
                    <label htmlFor="aln">no:</label>
                    <input type="radio" name="alcoholism" id="aln" value="false" onChange={alcoholismHandler}/>
                </div>
                </div>
            </div>

            

            <div className="form-group">
                <label htmlFor="Hand">
                    Handicap
                </label>
                <div className="radio-groups">
                <div className="radio-group">
                    <label htmlFor="hay">yes:</label>
                    <input type="radio" name="handicap" id="hay" value="true" onClick={handicapHandler}/>
                </div>
                <div className="radio-group">
                    <label htmlFor="han">no:</label>
                    <input type="radio" name="handicap" id="han" value="false" onClick={handicapHandler} />
                </div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="sms">
                    SMS Recieved
                </label>
                <div className="radio-groups">
                <div className="radio-group">
                    <label htmlFor="smy">yes:</label>
                    <input type="radio" name="sms" id="smy" value="true" onClick={smsHandler}/>
                </div>
                <div className="radio-group">
                    <label htmlFor="smn">no:</label>
                    <input type="radio" name="sms" id="smn" value="false" onClick={smsHandler} />
                </div>
                </div>
            </div>
            <button type="submit" onClick={submitHandler}>submit</button>
        </form>
    )
};

export default PatientDetail;