import { useState } from "react";
import data from "../JSON_data/data";
import Style from "./Css";
const Form = () => {


  const Printhandler = () => {
    window.print()
  }
  const [value, setValue] = useState("___________________________")

  return (
    <>
      <Style.Container>
        <Style.Box>
          <Style.HeadingBox>
            <Style.Heading>ACME CAREER POINT</Style.Heading>
            <Style.H2>THE ZONE OF CONCEPT</Style.H2>
            <Style.H3>REGISTRAION FORM</Style.H3>
            <Style.H4>Session 2023-24</Style.H4>
          </Style.HeadingBox>
          <Style.FormBox>
            <Style.ContentPic>
              <Style.ContentBox>
                {
                  data.map((val) => (
                    <>
                      <Style.H3>
                        CANDIDATE&apos;S NAME:&nbsp;<u>{val.Fname}</u>
                      </Style.H3>
                      <Style.H3>
                        CANDIDATE&apos;S NAME:&nbsp;<u>{val.Lname}</u>
                      </Style.H3>
                      <Style.H3>
                        GUARDIAN&apos; NAME:&nbsp;<u>{val.Guardians_name}</u>
                      </Style.H3>
                      <Style.H3>
                        D.O.B:&nbsp;<u>{value}</u>
                      </Style.H3>
                      <Style.H3>
                        GUARDIAN&apos; MOB NO:&nbsp;<u>{value}</u>
                      </Style.H3>
                    </>
                  ))}
              </Style.ContentBox>
              <Style.PicBox>
                <Style.Pic>PHOTO</Style.Pic>
              </Style.PicBox>
            </Style.ContentPic>
            <Style.AllContent>
              <Style.H3>
                PERSONAL MOB NO&nbsp;(If Any):&nbsp;<u>{value}</u>
              </Style.H3>
              <Style.H3>
                CLASS:&nbsp;<u>{value}</u>
              </Style.H3>
              <Style.H3>
                SCHOOL NAME:&nbsp;<u>{value}</u>
              </Style.H3>
              <Style.H3>SCHOOL SHIFT:</Style.H3>
              <Style.H3>
                &nbsp;&nbsp;&nbsp;&nbsp;MORNING &nbsp;
                <input type="checkbox" />
                &nbsp;&nbsp; EVENING &nbsp;
                <input type="checkbox" />
              </Style.H3>
              <Style.H3 >
                ADDRESS:<u></u>
              </Style.H3>
              <Style.H3>
                EMAIL:<u>{value}</u>
              </Style.H3>
              <Style.H3>COURSE:</Style.H3>
              <Style.H3>
                &nbsp;&nbsp;&nbsp;&nbsp;SCHOOL&nbsp;
                <input type="checkbox" />
                &nbsp;&nbsp; JEE&nbsp;
                <input type="checkbox" />
                &nbsp;&nbsp;NEET&nbsp;
                <input type="checkbox" />
              </Style.H3>
            </Style.AllContent>
          </Style.FormBox>
        </Style.Box>
      </Style.Container>
      <button onClick={Printhandler}>Print</button>
    </>
  );
};


export default Form;
