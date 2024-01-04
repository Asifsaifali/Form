import styled from 'styled-components'


const Style = {
  Container: styled.div`
     justify-content: center;
     align-items: center;
     display: flex;
     flex-direction: column;
     /* overflow-x: hidden; */
    `,
  Box: styled.div`
        width: 100%;
        height: 100%;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        padding: 30px;
        align-items: center;
    `,
  HeadingBox: styled.div`
            width: 80%;
            height: 15%;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
    `,
  Heading: styled.h1`
     font-family: 'Times New Roman', Arial, sans-serif;
     line-height: 5px;
     margin: 10px;
     font-size: 46px;
    `,
  H2: styled.h2`
        font-family: 'Callibri', 'Arial Narrow', Arial, sans-serif;
        margin: 25px;
        font-size: 25px;
        font-weight: normal;
        line-height: 15px;
    `,
  H3: styled.h3`
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-weight: normal;
        font-size:16px;
    `,
  H4: styled.h4`
        font-family: 'Callibri', 'Arial Narrow', Arial, sans-serif;
       margin: 5px;
    `,

  FormBox: styled.div`
        width: 100%;
        height: 80%;
    `,
  ContentPic: styled.div`
        width: 100%;
        height: 170px;
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        flex:1;

    `,
  ContentBox: styled.div`
        width: 100%;
        height: 100%;
        // border: 1px solid black; 
        display: flex;
        line-height:10px;
        flex-direction: column;
        flex:2;
        text-align:left;
    `,
  PicBox: styled.div`
        width: 100%;
        height: 100%;
        // border: 1px solid black; 
        display: flex;
        flex:1;
        justify-content: flex-end;
    `,
  Pic: styled.div`
        width: 130px;
        height: 150px;
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
    `,

  AllContent: styled.div`
        width: 100%;
        height: 80%;
        // border:1px solid gray; 
        line-height:5px;
        display: flex;
        flex-direction: column;
        text-align:left;
`,

}

export default Style;