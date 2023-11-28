import styled from 'styled-components'
import {  StyleSheet } from "@react-pdf/renderer";

const Style = StyleSheet.create ({
     Container : styled.div`
     justify-content: center;
     align-items: center;
     display: flex;
     flex-direction: column;
     /* overflow-x: hidden; */
    `,
     Box : styled.div`
        width: 100%;
        height: 100%;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        padding: 30px;
        align-items: center;
    `,
    HeadingBox : styled.div`
            width: 80%;
            height: 15%;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
    `,
    Heading : styled.h1`
     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     line-height: 5px;
     margin: 10px;
     font-size: 46px;
    `,
    H2 : styled.h2`
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin: 15px;
        font-size: 20px;
        font-weight: none;
        line-height: 15px;
    `,
    H3 : styled.h3`
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin: 0;
    `,
    H4 : styled.h4`
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
       margin: 5px;
    `,

    FormBox : styled.div`
        width: 100%;
        height: 80%;
       
    `,
    ContentPic: styled.div`
        width: 100%;
        height: 180px;
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        flex:1;
    `,
    ContentBox : styled.div`
        width: 100%;
        height: 100%;
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        flex:1;
    `,
    PicBox : styled.div`
        width: 100%;
        height: 100%;
        /* border: 1px solid black; */
        display: flex;
        flex:1;
        justify-content: flex-end;
    `,
    Pic : styled.div`
        width: 130px;
        height: 130px;
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
    `,

    AllContent : styled.div`
        width: 100%;
        height: 80%;
        /* border:1px solid gray; */
        display: flex;
        flex-direction: column;
`,

})

export default Style;