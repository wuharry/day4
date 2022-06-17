; (function name(params) {
    console.log('js有在運作');
    const obj = document.querySelectorAll('.panel');//選取所有的panel
    const textobj1 = document.querySelectorAll('.panel > *:first-child');
    const textobj2 = document.querySelectorAll('.panel > *:last-child');
    console.log(obj);
    console.log(textobj1, textobj2);
    function anime() {
        this.classList.toggle('open');
    }
    function animeend(e) {
        // console.log(e);//可以看到有兩個東西觸發到font siz,flex-grow
        //假如flex-grow有被觸發到，則執行以下動作(2段式動畫)
        if (e.propertyName.indexOf('flex') !== -1) {
            console.log(`flex有動畫效果`);
            this.classList.toggle('secondanime');
        }
    }

    obj.forEach(obj => {
        //toggle==觸發的意思，當func觸發時添加上class，再次點擊，再次觸發
        //給所有的panel加上監聽器,指定處發函式
        obj.addEventListener('click', anime);
        obj.addEventListener('transitionend', animeend);//當panel transition結束時，做以下動作
    });


})()