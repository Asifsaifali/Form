import Style from "./Css"

const Form = () => {
  return (
    
    <Style.Container>
        <Style.Box>
            <Style.HeadingBox>
                <Style.Heading>ACME CAREER POINT</Style.Heading>
                <Style.H2>THE ZONE OF CONCEPT</Style.H2>
                <Style.H3>REGISTRAION FORM</Style.H3>
                <Style.H4>Session 2023-24</Style.H4>
            </Style.HeadingBox>
            <Style.FormBox>
               <Style.ContentBox>
                  <Style.ContentBox></Style.ContentBox>
                  {/* <Style.PicBox></Style.PicBox> */}
               </Style.ContentBox>
            </Style.FormBox>
        </Style.Box>
    </Style.Container>
    
  )
}

export default Form