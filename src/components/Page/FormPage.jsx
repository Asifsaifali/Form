import { useState } from "react";
import Style from "./Css";
// import Pic from '../.././assets/boy.png'
import { Link } from "react-router-dom";
import data from "../JSON_data/data";

const Obj = {
   Fname: "",
   Lname: "",
   Guardians_name: "",
   dob: "",
   Mob_No: "",
}
const FormPage = () => {

   
   const [Fname, setFname] = useState()
   const [Lname, setLname] = useState()
   const [guard, setGuard] = useState()
   const [dob, setDob] = useState()
   const [number, setNumber] = useState()

   const submitHandler = (event) => {
     event.preventDefault()
     Obj.Fname = Fname
     Obj.Lname = Lname
     Obj.Guardians_name = guard
     Obj.Mob_No = number
     Obj.dob = dob
   }

   return (
      <>
         <Style.Container>
            <Style.HeadingBox>
               <Style.Heading>ACME CAREER POINT</Style.Heading>
               <Style.SubHeading>THE ZONE OF CONCEPT</Style.SubHeading>
            </Style.HeadingBox>
            <Style.Form onSubmit={submitHandler}>
            <Style.Box>
              
               <Style.LineBox>
                  <Style.Line></Style.Line>
               </Style.LineBox>
               <Style.Tablet>
                  <Style.OuterSmallContent><Style.SmallContent>&nbsp;&nbsp;&nbsp;REGISTRATION FORM</Style.SmallContent></Style.OuterSmallContent>
                  <Style.InputBox>
                     <Style.ValueBox>
                        <Style.Label>First Name</Style.Label>
                        <Style.Input type="text" 
                        onChange={(e) => setFname(e.target.value)}
                         placeholder="Enter your first name"
                         name="fname"
                         />
                     </Style.ValueBox>
                     <Style.ValueBox>
                        <Style.Label>Last Name</Style.Label>
                        <Style.Input type="text" 
                        onChange={(e) => setLname(e.target.value)}
                         placeholder="Enter your last name"
                         name="lname" />
                     </Style.ValueBox>
                  </Style.InputBox>
                  <Style.InputBox>
                     <Style.ValueBox>
                        <Style.Label>GUARDIAN'S NAME</Style.Label>
                        <Style.Input type="text" 
                        onChange={(e) => setGuard(e.target.value)}
                         name="fname" placeholder="Enter your guardian's name" />
                     </Style.ValueBox>
                     <Style.ValueBox>
                        <Style.Label>D.O.B</Style.Label>
                        <Style.Input type="date" 
                        onChange={(e) => setDob(e.target.value)}
                         name="fname" placeholder="Enter your d.o.b" />
                     </Style.ValueBox>
                  </Style.InputBox>
                  <Style.InputBox>
                     <Style.ValueBox>
                        <Style.Label>PERSONAL MOB NO</Style.Label>
                        <Style.Input type="number" 
                        onChange={(e) => setNumber(e.target.value)}
                         name="fname"  placeholder="Enter your number" />
                     </Style.ValueBox>
                     <Style.ValueBox>
                        <Style.Label>CLASS</Style.Label>
                        <Style.Input  placeholder="Enter your class" />
                     </Style.ValueBox>
                  </Style.InputBox>
                  <Style.InputBox>
                     <Style.ValueBox>
                        <Style.Label>SCHOOL NAME</Style.Label>
                        <Style.Input placeholder="Enter your school name" />
                     </Style.ValueBox>
                     <Style.ValueBox>
                        <Style.Label>SCHOOL SHIFT</Style.Label>
                        <Style.Input placeholder="Enter your school shift" />
                     </Style.ValueBox>
                  </Style.InputBox>
                  <Style.InputBox>
                     <Style.ValueBox>
                        <Style.Label>SCHOOL NAME</Style.Label>
                        <Style.Input placeholder="Enter your name" />
                     </Style.ValueBox>
                     <Style.ValueBox>
                        <Style.Label>SCHOOL SHIFT</Style.Label>
                        <Style.Input placeholder="Enter your name" />
                     </Style.ValueBox>
                  </Style.InputBox>
                  <Style.InputBox>
                     <Style.ValueBox>
                        <Style.Label>SCHOOL NAME</Style.Label>
                        <Style.Input placeholder="Enter your name" />
                     </Style.ValueBox>
                     <Style.ValueBox>
                        <Style.Label>SCHOOL SHIFT</Style.Label>
                        <Style.Input placeholder="Enter your name" />
                     </Style.ValueBox>
                  </Style.InputBox>
                  <button onClick={submitHandler}>Submit</button>
               </Style.Tablet>
            </Style.Box>
            </Style.Form>

            <Style.LowerLine></Style.LowerLine>
         </Style.Container>
      </>
   )
}


export { FormPage, Obj} ;
