import Style from "./Css";

const FormPage = () => {

    return (
        <>
            <Style.Container>
                <Style.HeadingBox>
                    <Style.Heading>ACME CAREER POINT</Style.Heading>
                    <Style.SubHeading>THE ZONE OF CONCEPT</Style.SubHeading>
                </Style.HeadingBox>
                    <Style.Box>
                        <Style.Line></Style.Line>
                        <Style.Tablet>
                            <Style.SmallContent>&nbsp;&nbsp;&nbsp;REGISTRATION FORM</Style.SmallContent>
                        </Style.Tablet>
                    </Style.Box>
                    <Style.Picture></Style.Picture>
                    <Style.LowerLine></Style.LowerLine>
            </Style.Container>
        </>
    )
}


export default FormPage;