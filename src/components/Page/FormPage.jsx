import { useState } from "react";
// import data from "../JSON_data/data";
import Style from "./Css";

const Obj = {
  Fname: "",
  Lname: "",
  Guardians_name: "",
  Dob: "",
  Mob_No: "",
  Class: "",
  School: "",
  Shift: "",
};

const FormPage = () => {
  const [Fname, setFname] = useState();
  const [Lname, setLname] = useState();
  const [guard, setGuard] = useState();
  const [dob, setDob] = useState();
  const [number, setNumber] = useState();
  const [section, setClass] = useState();
  const [school, setSchool] = useState();
  const [shift, setShift] = useState();


  const submitHandler = (event) => {
    event.preventDefault();
    Obj.Fname = Fname;
    Obj.Lname = Lname;
    Obj.Guardians_name = guard;
    Obj.Mob_No = number;
    Obj.Dob = dob;
    Obj.Class = section;
    Obj.School = school;
    Obj.Shift = shift;
    console.log(Obj);

  };

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
              <Style.OuterSmallContent>
                <Style.SmallContent>
                  &nbsp;&nbsp;&nbsp;<u>REGISTRATION FORM</u>
                </Style.SmallContent>
              </Style.OuterSmallContent>
              <Style.InputBox>
                <Style.ValueBox>
                  <Style.Label>First Name</Style.Label>
                  <Style.Input
                    type="text"
                    onChange={(e) => setFname(e.target.value)}
                    placeholder="Enter your first name"
                    name="fname"
                  />
                </Style.ValueBox>
                <Style.ValueBox>
                  <Style.Label>Last Name</Style.Label>
                  <Style.Input
                    type="text"
                    onChange={(e) => setLname(e.target.value)}
                    placeholder="Enter your last name"
                    name="lname"
                  />
                </Style.ValueBox>
              </Style.InputBox>
              <Style.InputBox>
                <Style.ValueBox>
                  <Style.Label>GUARDIANS NAME</Style.Label>
                  <Style.Input
                    type="text"
                    onChange={(e) => setGuard(e.target.value)}
                    name="fname"
                    placeholder="Enter your guardian's name"
                  />
                </Style.ValueBox>
                <Style.ValueBox>
                  <Style.Label>D.O.B</Style.Label>
                  <Style.Input
                    type="date"
                    onChange={(e) => setDob(e.target.value)}
                    name="fname"
                    placeholder="Enter your d.o.b"
                  />
                </Style.ValueBox>
              </Style.InputBox>
              <Style.InputBox>
                <Style.ValueBox>
                  <Style.Label>PERSONAL MOB NO</Style.Label>
                  <Style.Input
                    type="tel"
                    maxLength="10"
                    onChange={(e) => setNumber("+91-" + e.target.value)}
                    name="fname"
                    placeholder="Enter your number"
                  />
                </Style.ValueBox>
                <Style.ValueBox>
                  <Style.Label>CLASS</Style.Label>
                  <Style.Select
                    name="shift"
                    id="school-select"
                    onClick={(e) => setClass(e.target.value)}
                  >
                    <Style.Option value="">
                      --Please choose Class--
                    </Style.Option>
                    <Style.Option value="X">X</Style.Option>
                    <Style.Option value="XI">XI</Style.Option>
                    <Style.Option value="XII">XII</Style.Option>
                    <Style.Option value="JEE">JEE</Style.Option>
                    <Style.Option value="NEET">NEET</Style.Option>
                  </Style.Select>
                </Style.ValueBox>
              </Style.InputBox>
              <Style.InputBox>
                <Style.ValueBox>
                  <Style.Label>SCHOOL NAME</Style.Label>
                  <Style.Input
                    type="text"
                    onChange={(e) => setSchool(e.target.value)}
                    name="fname"
                    placeholder="Enter your school name"
                  />
                </Style.ValueBox>
                <Style.ValueBox>
                  <Style.Label>SCHOOL SHIFT</Style.Label>
                  <Style.Select
                    name="shift"
                    id="school-select"
                    onClick={(e) => setShift(e.target.value)}
                  >
                    <Style.Option value="">
                      --Please choose School shift--
                    </Style.Option>
                    <Style.Option value="morning">Morning</Style.Option>
                    <Style.Option value="evening">Evening</Style.Option>
                  </Style.Select>
                </Style.ValueBox>
              </Style.InputBox>
              <Style.InputBox>
                <Style.ValueBox>
                  <Style.Label>SCHOOL ADDRESS</Style.Label>
                  <Style.Input
                    type="text"
                    onChange={(e) => setSchool(e.target.value)}
                    name="saddress"
                    placeholder="Enter your school address"
                  />
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
  );
};

export { FormPage, Obj };
