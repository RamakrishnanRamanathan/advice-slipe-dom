const blockQuoute=document.querySelector('blockquote');
const refreshButton=document.querySelector('button');


//https://api.adviceslip.com/advice//
const URL='https://api.adviceslip.com/advice';
//ToDo:1.Get API using Fetch method

async function getApiData(){
    try {
        const fetchResponse= await fetch(URL);
        const result= await fetchResponse.json();
       return result
    } catch (error) {
        console.error(error);
    }
}
const finalResult= await getApiData();
blockQuoute.innerText=finalResult.slip.advice;
refreshButton.addEventListener('click',()=>{
    location.href='/';
})