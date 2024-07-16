exports.mail = (service_type)=>{
    switch(service_type){
        case "GMAIL": return require("./gmail")
    }
}