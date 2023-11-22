import styled from 'styled-components'

const Style = {
     Container : styled.div`
     justify-content: center;
     align-items: center;
     display: flex;
    `,
     Box : styled.div`
        width: 70%;
        height: 100vh;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        padding: 30px;
        align-items: center;
    `,
    HeadingBox : styled.div`
            width: 81%;
            height: 20%;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
    `,
    Heading : styled.h1`
     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     line-height: 5px;
     margin: 10px;
     font-size: 50px;
    `,
    H2 : styled.h3`
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        margin: 15px;
        font-size: 20px;
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
        width: 95%;
        height: 80%;
        border: 1px solid gray;
    `,
    PicBox : styled.div`
        width: 100%;
        height: 150px;
        background-color: #f6f6f6;
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        flex:1;
    `,
    ContentBox : styled.div`
        width: 120px;
        height: 120px;
        border: 1px solid black;
        margin: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex:1;
    `,
    Content : styled.div`
        width: 100%;
        height: 150px;
        border: 1px solid black;
        display: flex;
    `

}

export default Style;