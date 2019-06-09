const bookmarklet_for_pc = (()=>{
    const interval = 1000;
    const ID = setInterval(() => {
        const elem = document.getElementsByClassName("action_pager_next")[0].getElementsByTagName("a");
        if(elem === undefined){
            clearInterval(ID);
        }else{
            elem[0].click();
        }
    },interval);
}).replace(/\s+/g," ").replace("\n","");

const bookmarklet_for_sp = (()=>{
    const interval = 1000;
    const ID = setInterval(() => {
        const elem = document.getElementsByClassName("next_button_wrap");
        if(elem === undefined){
            clearInterval(ID);
        }else{
            elem[0].click();
        }
    },interval);
}).toString().replace(/\s+/g," ").replace("\n","");

document.getElementById("bookmarklet_for_pc").href = `javascript:${bookmarklet_for_pc}`;
document.getElementById("bookmarklet_for_sp").href = `javascript:(${bookmarklet_for_sp})()`;
