let btns = document.querySelectorAll('button');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        console.log(btns);
        document.querySelector('.pink').className = '';
        this.className = 'pink';
    })

}