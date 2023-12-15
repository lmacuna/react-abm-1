const servicesRegister=async(data,metodo,url)=>{

    var res=await fetch(url,{
        method:metodo,
        body:data,
        headers: { 'Content-Type': 'application/json' },
        
    })

    res=await res.json()

    return res

}


export {servicesRegister}