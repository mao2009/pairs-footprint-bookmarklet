const bookmarklet = (()=>{
    const interval = 1000;
    const ID = setInterval(() => {
        const elem = document.getElementsByClassName("action_pager_next")[0].getElementsByTagName("a");
        if(elem === undefined){
            clearInterval(ID);
        }else{
            elem[0].click();
        }
    },interval);
}).toString().replace(/\s+/g," ").replace("\n","");

document.getElementById("bookmarklet").href = `javascrpt:(${bookmarklet})()`;
