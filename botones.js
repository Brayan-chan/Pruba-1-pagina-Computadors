const btn = document.querySelector('.btn');
btn.addEventListener('mauseover', function(e) {
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    const btnFill = document.querySelector('.btn-fill');
    btnFill.style.top = y + 'px';
    btnFill.style.left = x + 'px';
})