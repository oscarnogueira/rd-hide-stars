var observer = new MutationObserver(function (mutations) {
    var count = 0;
    mutations.forEach(function (mutation) {
        for (var i = 0; i < mutation.addedNodes.length; i++)
            if ( mutation.addedNodes[i].nodeName.toUpperCase() == 'STARS' ) {
                var parEl = mutation.addedNodes[i].parentElement;

                parEl.removeChild(mutation.addedNodes[i]);

                parEl.querySelector('.pipeline-recorrencia').querySelectorAll('div').forEach(function (el){
                    el.style.width = '100%';
                });
            }
    })
});
observer.observe(document.documentElement, {
    childList: true
    , subtree: true
    , attributes: false
    , characterData: false
})