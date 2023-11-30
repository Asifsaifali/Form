import Style from "./Css";

const FormPage = ()=>{

    return(
        <>
            <Style.Container>
                <Style.Box>
                    <Style.HeadingBox>
                        <Style.Heading>ACME CAREER POINT</Style.Heading>
                        <Style.SubHeading>THE ZONE OF CONCEPT</Style.SubHeading>
                    </Style.HeadingBox>
                    <Style.ContentBox>
                        <Style.SmallContent>&nbsp;&nbsp;&nbsp;REGISTRAION FORM</Style.SmallContent>
                    </Style.ContentBox>
                    <Style.SmallContentBox>
                        <Style.H3>NAME&nbsp;*</Style.H3>
                        <Style.Input placeholder="Your Name" />
                    </Style.SmallContentBox>
                </Style.Box>
            </Style.Container>
        </>
    )
}


export default FormPage;