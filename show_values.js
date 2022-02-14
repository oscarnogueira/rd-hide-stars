var observer = new MutationObserver(function (mutations) {
    var count = 0;
    mutations.forEach(function (mutation) {
        for (var i = 0; i < mutation.addedNodes.length; i++)
            if (mutation.addedNodes[i].nodeName.toUpperCase() == 'MD-LIST') {
                var mdEl = mutation.addedNodes[i];

                //if mdEl.

                parEl.querySelector('.pipeline-recorrencia').querySelectorAll('div').forEach(function (el) {
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