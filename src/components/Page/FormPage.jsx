import { useState } from "react";
import Style from "./Css";
// import Pic from '../.././assets/boy.png'
import { Link } from "react-router-dom";

const FormPage = () => {
      const path = '../Form/Form.jsx'
   // const navigate = useNavigate();

   let Obj = {
      name : "",
   }
   const[name,setName] = useState() 


   const Changehandler = (e) =>{
      Obj.name = e.target.value;
   }
   console.log(Obj)
    return (
        <>
            <Style.Container>
                <Style.HeadingBox>
                    <Style.Heading>ACME CAREER POINT</Style.Heading>
                    <Style.SubHeading>THE ZONE OF CONCEPT</Style.SubHeading>
                </Style.HeadingBox>
                    <Style.Box>
                       <Style.LineBox>
                            <Style.Line></Style.Line>
                       </Style.LineBox>
                        <Style.Tablet>
                           <Style.OuterSmallContent><Style.SmallContent>&nbsp;&nbsp;&nbsp;REGISTRATION FORM</Style.SmallContent></Style.OuterSmallContent>
                            <Style.InputBox>
                                 <Style.ValueBox>
                                    <Style.Label>First Name</Style.Label>
                                    <Style.Input value={name} onChange={Changehandler} placeholder="Enter your first name"/>
                                 </Style.ValueBox>
                                 <Style.ValueBox>
                                    <Style.Label>Last Name</Style.Label>
                                    <Style.Input placeholder="Enter your last name"/>
                                 </Style.ValueBox>
                            </Style.InputBox> 
                            <Style.InputBox>
                                 <Style.ValueBox>
                                    <Style.Label>GUARDIAN'S NAME</Style.Label>
                                    <Style.Input placeholder="Enter your guardian's name"/>
                                 </Style.ValueBox>
                                 <Style.ValueBox>
                                    <Style.Label>D.O.B</Style.Label>
                                    <Style.Input placeholder="Enter your d.o.b"/>
                                 </Style.ValueBox>
                            </Style.InputBox> 
                            <Style.InputBox>
                                 <Style.ValueBox>
                                    <Style.Label>PERSONAL MOB NO</Style.Label>
                                    <Style.Input placeholder="Enter your number"/>
                                 </Style.ValueBox>
                                 <Style.ValueBox>
                                    <Style.Label>CLASS</Style.Label>
                                    <Style.Input placeholder="Enter your class"/>
                                 </Style.ValueBox>
                            </Style.InputBox> 
                            <Style.InputBox>
                                 <Style.ValueBox>
                                    <Style.Label>SCHOOL NAME</Style.Label>
                                    <Style.Input placeholder="Enter your school name"/>
                                 </Style.ValueBox>
                                 <Style.ValueBox>
                                    <Style.Label>SCHOOL SHIFT</Style.Label>
                                    <Style.Input placeholder="Enter your school shift"/>
                                 </Style.ValueBox>
                            </Style.InputBox> 
                            <Style.InputBox>
                                 <Style.ValueBox>
                                    <Style.Label>SCHOOL NAME</Style.Label>
                                    <Style.Input placeholder="Enter your name"/>
                                 </Style.ValueBox>
                                 <Style.ValueBox>
                                    <Style.Label>SCHOOL SHIFT</Style.Label>
                                    <Style.Input placeholder="Enter your name"/>
                                 </Style.ValueBox>
                            </Style.InputBox>
                            <Style.InputBox>
                                 <Style.ValueBox>
                                    <Style.Label>SCHOOL NAME</Style.Label>
                                    <Style.Input placeholder="Enter your name"/>
                                 </Style.ValueBox>
                                 <Style.ValueBox>
                                    <Style.Label>SCHOOL SHIFT</Style.Label>
                                    <Style.Input placeholder="Enter your name"/>
                                 </Style.ValueBox>
                            </Style.InputBox> 
                      <Link to = '/formPage'>  <button>Submit</button> </Link> 
                        </Style.Tablet>
                    </Style.Box>
                    <Style.LowerLine></Style.LowerLine>
            </Style.Container>
        </>
    )
}


export default FormPage;