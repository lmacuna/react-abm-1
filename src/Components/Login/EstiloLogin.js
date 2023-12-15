import { makeStyles } from "@mui/styles";




const Styles=makeStyles({
    boxForm:{
        width:'100%',
        height:'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        paddingTop:'30px',
        
    },
    form:{
        width:'20em',
        height:'22em',
        padding:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        background:'rgb(0,0,0,0.7)',
        //background:'rgb(255,0,0,0.9)',
        //border:'1px solid rgb(156, 8, 52)',
        border:'1px solid rgb(55,55,55)',
        borderRadius:'20px',
        marginBottom:'20px'
        
    },
    input:{
        //background:'rgb(1, 5, 18)',
        //background:'rgb(255,255,255,0.5)',
        background:'rgb(0,0,0,0.6)',
        border:'1px solid rgb(55,55,55)',
        borderRadius:'10px',
        color:'rgb(55,55,55) !important',
        textAlign:'center',
        padding:'5px',
        fontSize:'16px',
        fontWeight:'bold',
     
    },
    btnLogin:{
        padding:'7px 15px',
        background:'rgb(55,55,55)',
        color:'rgb(255,255,255)',
        //fontWeight:'bold',
        fontSize:'14px !important',
        border:'none',
        borderRadius:'5px'
    },
    btnRegistrate:{
        padding:'7px 15px',
        //background:'rgb(55,55,55)',
        color:'rgb(255,255,255)',
        //fontWeight:'bold',
        background:'transparent',
        fontSize:'16px !important',
        border:'none',
        borderRadius:'5px',
        textDecoration:'underline',
        cursor:'pointer'
    }
})


export default Styles;