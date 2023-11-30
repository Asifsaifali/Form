import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const PDFfile = () => {
    const styles = StyleSheet.create({
        body: {
          paddingTop: 35,
          paddingBottom: 65,
          paddingHorizontal: 35,
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
        },
        box: {
        width: '100%',
        height: '100%',
        border:' 1px solid black',
        display: 'flex',
        flexDirection: 'column' ,
        padding:' 30px',
        alignItems: 'center',
        textAlign:'center'
        },
        title: {
          fontSize: 24,
          textAlign: 'center',
          fontFamily: 'Oswald'
        },
        author: {
          fontSize: 12,
          textAlign: 'center',
          marginBottom: 40,
        },
        subtitle: {
          fontSize: 18,
          margin: 12,
          fontFamily: 'Oswald'
        },
        text: {
          margin: 12,
          fontSize: 14,
          textAlign: 'justify',
          fontFamily: 'Times-Roman'
        },
        image: {
          marginVertical: 15,
          marginHorizontal: 100,
        },
        header: {
          fontSize: 32,
          marginBottom: 20,
          textAlign: 'center',
          color: 'grey',
        },
        pageNumber: {
          position: 'absolute',
          fontSize: 12,
          bottom: 30,
          left: 0,
          right: 0,
          textAlign: 'center',
          color: 'grey',
        },
      });
  return (
    <Document>
        <Page size="A4" style={styles.body}>
            <div style={styles.box}>
            <View style={{flexDirection:'column',alignItems:"center",marginTop:-10}}>
            <Text style={styles.header}>ACME CAREER POINT</Text>
                <Text>Luego volvía diciendo, como si verdaderamente fuera enamorado: —¡Oh
        princesa Dulcinea, señora deste cautivo corazón! Mucho agravio me
        habedes fecho en despedirme y reprocharme con el riguroso afincamiento
        de mandarme no parecer ante la vuestra fermosura. Plégaos, señora, de
        membraros deste vuestro sujeto corazón, que tantas cuitas por vuestro
        amor padece. Con estos iba ensartando otros disparates, todos al modo de
        los que sus libros le habían enseñado, imitando en cuanto podía su
        lenguaje. Con esto caminaba tan despacio, y el sol entraba tan apriesa y
        con tanto ardor, que fuera bastante a derretirle los sesos, si algunos
        tuviera</Text>
            </View>
            </div>
        </Page>
        </Document>
  );
};


export default PDFfile;
