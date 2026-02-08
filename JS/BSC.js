const saveLine = document.querySelector('.save-line');


saveLine.addEventListener('click', () => {
    saveLine.classList.add('active');
    setTimeout(() => {
        saveLine.classList.remove('active');
    }, 3000);
});