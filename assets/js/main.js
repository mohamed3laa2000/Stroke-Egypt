
window.onload = setTimeout(() => {
    document.getElementById('loader').style.opacity = 0;
    document.getElementById('landing').style.top = 0;
    setTimeout(() => { document.getElementById('loader').style.display = 'none'; }, 1000)
}, 1000)
