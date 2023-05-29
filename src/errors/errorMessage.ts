import colors from 'colors'

export const errorMessage = ()=>{
function messageCool(){
    throw new Error('Error detected')
}

try{
    messageCool();
   }catch (error){
        console.log(colors.bgMagenta(error.message));
}
}