import { makeStyles } from "@mui/styles";



const Styles=makeStyles({
    nav:{
       /*  width:'100%',
        padding:'5px',
        //background:'rgb(44,44,44)',
        background:'rgb(0,100,0, 0.5)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center' */
    },
    navOpen:{
        '@media(max-width:1052px)':{
            left:'0 !important',
            transition:'all 1.2s',
            
        }
      
    },
    navClose:{
        '@media(max-width:1052px)':{
            left:'-1700px !important',
          transition:'all 1.2s'
        }
          
    },
    link:{
        color:'rgb(255,255,255)',
        margin:'0px 30px 0px 30px',
        //fontWeight:'bold',
        fontSize:'1em',
        textDecoration:'none',
        '&:hover':{
            color:'orangered'
        },
        '@media (max-width:1052px)':{
            marginBottom:'20px !important',
            color:'orangered',
            fontSize:'1.1em',
            '&:hover':{
                color:'orange'
            },
        }
    },
    btnSesion:{
        textDecoration:'none',
        padding:'5px 10px',
        background:'white',
        color:'rgb(20,20,20)',
        borderRadius:'5px',
        //fontWeight:'bold'
        fontSize:'1em !important'
    }

})


export default Styles;