const app = Vue.createApp({
    data(){
        return{
            title:"بوف کور",
            author:"صادق هدایت",
            mount:0,
           
        }
        
    } , 
    methods:{ 
        chengeTitel(books){
         this.title=books ;          
        }
    }
    
})

app.mount("#app")


const button = function(i){
    for(let i= 0; i>0;i++){
        if(i>0){
        console.log("i=0")
        }else{
            console.log("i++")
        }
        }
}