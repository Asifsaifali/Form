import styled from "styled-components";

const Style = {

    Container : styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `,

    Tablet :styled.div`
        width: 85%;
        height: 92%;
        border: 1px solid black;
        background-color: #fff;
    `,
    Box : styled.div`
        width: 70%;
        height: 70vh;
        border: 1px solid gray;
        border-radius: 30px;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        background-color: rgba(225,225,225,255);
        padding-right: 20px;
    `,

    LowerLine:styled.div`
       width: 1000px;
       height: 0px;
        border: 1px solid gray;
        margin-top: 70px;
    `,
    Picture : styled.div`
       position: absolute;
        bottom: 28px;
        width: 300px;
        height: 500px;
        border: 1px solid black;
        right: 300px;                
        background-image:url('../../assets/boy.png');                              
    `,
    Line: styled.div`
        width: 1%;
        height: 50%;
        background-color: black;
        border-radius: 2.188rem;
    `,
    HeadingBox : styled.div`
        width: 100%;
        height: 20%;
    `,
    Heading : styled.h1`
        font-size: 35px;
        font-family: 'Times New Roman', Times, serif;
        text-decoration: underline;
        font-weight: normal;
        margin: 0;
    `,
    SubHeading : styled.h2`
        font-size: 20px;
        font-family: 'Times New Roman', Times, serif;
        line-height: 0px;
        text-decoration: underline;
    `,
    H3:styled.h3`
        font-size: 15px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        text-align: left;
    `,
    ContentBox : styled.div` 
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid gray;
    `,
    SmallContent : styled.div`
        width: 100%;
        height: 40px;
        background-color: rgba(255,115,92,255);
        display: flex;
        font-weight: 550;
        color: #ffff;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        align-items: center;
        text-align: left;
        font-size: 0.875rem;
    `,

    SmallContentBox : styled.div`
        width: 300px;
        height: 80px;
        display: flex;
        flex-direction: column;
        border-radius: 30px ;
    `,

    Input : styled.input`
    width: 200px;
    height: 40px;
    border-radius: 10px;
    background-color: #f5f5f5;
    outline: none;
    padding-left: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border: none;
    font-size: 15px;
    color: black;
    `,
    Label : styled.label`
        font-size: 15px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        text-align: left;
        font-weight: 500;
        margin: 10px 0px 0 10px;
    `,
}

export default Style;