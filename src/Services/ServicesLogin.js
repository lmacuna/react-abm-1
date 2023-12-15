const services=async(data,metodo,url)=>{

     try {
        var res=await fetch(url,{
            method:metodo,
            body:data,
            headers: { 'Content-Type': 'application/json' },
            
        })
    
        res=await res.json()
    
        return  res
     } catch (error) {
        if(error.code==='ECONNRESET'){
            console.error("resetear error de conexion revisa tu servidor y el networking")
        }else{
            console.error(error.message)
        }
     }
 
   

}


export {services}