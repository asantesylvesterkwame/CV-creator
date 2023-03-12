import React, {useRef} from 'react';
import './CvForm.css';


const CvForm = () => {
    let elementInputRef = useRef();
    let fullNameHeader = useRef();

    let emailInputRef = useRef();
    let emailInputSpace = useRef();

    let phoneNumberRef = useRef();
    let phoneNumberInput = useRef();

    let schoolNameRef = useRef();
    let schoolNameInput = useRef();

    let titleOfStudyRef = useRef();
    let titleOfStudyInput = useRef();



    function submitForm(e) {
        let elementInputValue = elementInputRef.current.value;
        if (elementInputValue === '') {
            return null
        }else{
            fullNameHeader.current.innerHTML = elementInputValue

        }
        let emailInputValue = emailInputRef.current.value;

        if (emailInputValue === "") {
            return null
        } else {
            emailInputSpace.current.innerHTML = emailInputValue
        }

        let phoneNumberValue = phoneNumberRef.current.value

        if (phoneNumberValue === '') {
            return null
        } else {
            phoneNumberInput.current.innerHTML = phoneNumberValue
        }

        let schooNameInputValue = schoolNameRef.current.value;

        if (schooNameInputValue === '') {
            return null
        } else {
            schoolNameInput.current.innerHTML = schooNameInputValue
        }

        let titleOfStudyValue = titleOfStudyRef.current.value;

        if (titleOfStudyValue === '') {
            return null
        } else {
            titleOfStudyInput.current.innerHTML = titleOfStudyValue;
        }

    }
  return (
    <div className='container'>
        <div className='formCardDiv'>
            <div className="formCard">
                <h2>Personal Details</h2>
                <label htmlFor="">Full Name</label>
                <input ref={elementInputRef} className='cvInputDetail' type="text" name="" id="" placeholder='Full Name'/>

                <label htmlFor="">Email</label>
                <input ref={emailInputRef} className='cvInputDetail' type="email" name="" id="" placeholder='example@bibinii.com'/>
                
                <label htmlFor="">Phone Number</label>
                <input ref={phoneNumberRef} className='cvInputDetail' type="number" name="" id="" placeholder='0213456...'/>
                
                <hr />
                
                <h2>Education</h2>
                
                <label htmlFor="">School Name</label>
                <input ref={schoolNameRef} className='cvInputDetail' type="text" name="" id="" placeholder='Example International School'/>
                
                <label htmlFor="">Title Of Study</label>
                <input ref={titleOfStudyRef} className='cvInputDetail' type="text" name="" id="" placeholder='BSc. in Example Engineering'/>
                
                <label htmlFor="">Date of Study</label>
                <input  className='cvInputDetail' type="text" name="" id="" placeholder='From 2016 to 2020'/>

                
                
                <input type="button" value="Add" className='AddForm'/>

                <hr />
                
                <h2>Experience</h2>
                
                <label htmlFor="">Company Name</label>
                <input className='cvInputDetail' type="text" name="" id="" placeholder='Example International School'/>
                
                <label htmlFor="">Position</label>
                <input className='cvInputDetail' type="text" name="" id="" placeholder='Software Developer'/>
                
                <label htmlFor="">Role Description</label>
                <textarea className='cvInputDetail' type="text" name="" id="" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum.'/>

                <label htmlFor="">Period</label>
                <input className='cvInputDetail' type="text" name="" id="" placeholder='From 2016 to 2020'/>

                
                <input type="button" value="Add" className='AddForm'/>

                <div className='submitButtonDiv'>
                <input onClick={submitForm} type="submit" value="Submit" />
            </div>
            </div>
            <div className="CvDocument">
                <div className="header" id=''><h1  ref={fullNameHeader}>Full Name</h1></div>
                
                <hr />

                <div className='personalInfoDiv'>
                     <span className="email" ref={emailInputSpace}>example@gmail.com</span><span ref={phoneNumberInput}>01234567890</span>
                </div>

                <hr />
                <div className="educationDiv">
                <h1>Education</h1>
                <div className='educationalDetails'>
                    <div className='educationalDetails'>
                    School Name: <h5><strong ref={schoolNameInput}>Example University</strong></h5>
                    </div>
                    <div className='educationalDetails'>
                    Title of Study: <h5><strong ref={titleOfStudyInput}>Bsc. in Example</strong></h5>
                    </div>

                </div>

                </div>

                <hr />

                <div className="educationDiv">
                <h1>Experience</h1>
                <div className='educationalDetails'>
                    <div className='educationalDetails'>
                    Company Name: <h5><strong>Amplified.code</strong></h5>
                    </div>
                    <div className='educationalDetails'>
                    Position: <h5><strong>Software Developer</strong></h5>
                    </div>

                    <div className='educationalDetails'>
                    Role Description: <h5><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.</strong></h5>
                    </div>

                    <div className='educationalDetails'>
                    Period <h5><strong><span><p>From:</p></span><span><p>To:</p></span></strong></h5>
                    </div>

                </div>

                </div>

            </div>
            
        </div>
    </div>
  )
}

export default CvForm