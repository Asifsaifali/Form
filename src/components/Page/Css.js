import styled from "styled-components";

const Style = {

    Container : styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    Box : styled.div`
        width: 70%;
        height: 100%;
        border: 1px solid gray;
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
        height: 50px;
        background-color: rgba(255,115,92,255);
        display: flex;
        font-weight: 550;
        color: #ffff;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        align-items: center;
        text-align: left;
    `,

    SmallContentBox : styled.div`
        width: 300px;
        height: 80px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        padding-left: 30px;
    `,

    Input : styled.input`
    width: 200px;
    height: 70px;
    border-radius: 5px;
    background-color: #f5f5f5;
    outline: none;
    padding-left: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border: none;
    font-size: 15px;
    color: black;
    `,

}

export default Style;