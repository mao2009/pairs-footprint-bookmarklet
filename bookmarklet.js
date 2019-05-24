const interval = 1000;
setInterval(() => {
            const elem = pairsTab.getElementsByClassName("action_pager_next")[0].getElementsByTagName("a");
            elem[0].click();
        },interval);