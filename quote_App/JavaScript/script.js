function Generate()
{
    fetch("https://api.breakingbadquotes.xyz/v1/quotes").
    then(resp=>resp.json()).
    then((res)=>{
        document.querySelector("#quote").innerHTML = "Quote:"+" "+res[0].quote;
        document.querySelector("#author").innerHTML ="Author:"+" "+ res[0].author;
        console.log(res);
    }).catch(err=>console.log(err));
    
    
}