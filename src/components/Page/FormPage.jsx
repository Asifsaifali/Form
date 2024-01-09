import { useState } from "react";
import Style from "./Css";
// import Pic from '../.././assets/boy.png'

const obj = {
  Fname: '',
};
const FormPage = () => {
  const [Fname, setFName] = useState();


  console.log(obj);
  const dataHandler = () => {
    obj.Fname = Fname;
    console.log(obj)
  };
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
            <Style.OuterSmallContent>
              <Style.SmallContent>
                &nbsp;&nbsp;&nbsp;REGISTRATION FORM
              </Style.SmallContent>
            </Style.OuterSmallContent>
            <Style.InputBox>
              <Style.ValueBox>
                <Style.Label>First Name</Style.Label>
                <Style.Input
                  value={Fname}
                  onChange={(e) => {
                    setFName(e.target.value)
                  }}
                  placeholder="Enter your first name"
                />
              </Style.ValueBox>
              {/* <Style.ValueBox>
                <Style.Label>Last Name</Style.Label>
                <Style.Input placeholder="Enter your last name" />
              </Style.ValueBox>
            </Style.InputBox>
            <Style.InputBox>
              <Style.ValueBox>
                <Style.Label>GUARDIAN&apos;S NAME</Style.Label>
                <Style.Input placeholder="Enter your guardian's name" />
              </Style.ValueBox>
              <Style.ValueBox>
                <Style.Label>D.O.B</Style.Label>
                <Style.Input type="date" placeholder="Enter your d.o.b" />
              </Style.ValueBox>
            </Style.InputBox>
            <Style.InputBox>
              <Style.ValueBox>
                <Style.Label>PERSONAL MOB NO</Style.Label>
                <Style.Input placeholder="Enter your number" />
              </Style.ValueBox>
              <Style.ValueBox>
                <Style.Label>
                    <label htmlFor="nn">Class</label>
                </Style.Label>
                <select>
                        <option value="select">Select class</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
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
              </Style.ValueBox> */}
            </Style.InputBox>
            <button onClick={dataHandler}>Submit</button>
          </Style.Tablet>
        </Style.Box>
        <Style.LowerLine></Style.LowerLine>
      </Style.Container>
    </>
  );
};

export { FormPage, obj };
