import { makeStyles } from "@material-ui/core";

const Styles=makeStyles({
    footer:{
        width:'100%',
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        maxWidth:'1300px',
        minHeight:'80px',
        flexWrap:'wrap',
        padding:'15px',
       background:'rgb(0,0,0,0.6)',
       gap:'1.1em'
    },
    linkFooter:{
        flexBasis:'6em',
        textDecoration:'none'
    }
})


export default Styles;


