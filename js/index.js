window.onload = () => {
    let swiper = document.querySelector('.swiper');
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    let ul = document.querySelector('ul');
    let ol = document.querySelector('ol');
    let olli = ol.querySelectorAll('li')
    let w = ul.querySelector('li').offsetWidth;
    let position = ul.offsetLeft;
    let num = 0;
    let index = 0;
    let flag = true;
    let timer = setInterval(() => {
        left.click()
    }, 2000);

    function changestyle() {
        for (let i = 0; i < ol.querySelectorAll('li').length; i++) {
            ol.querySelectorAll('li')[i].className = '';
        }
        ol.querySelectorAll('li')[index].className = 'slected';
    }
    left.addEventListener('click', () => {
        if (flag) {
            flag = false;
            num++;
            index++;
            if (index == 5) {
                index = 0
            }
            changestyle();
            ul.style.transition = 'all .5s';
            ul.style.left = position - num * w + 'px';

        }
    })
    ul.addEventListener('transitionend', () => {
        if (num == -1) {
            num = 4;
            ul.style.transition = 'none';
            ul.style.left = position - num * w + 'px';
        } else if (num == 5) {
            num = 0;
            ul.style.transition = 'none';
            ul.style.left = position - num * w + 'px';
        }
        flag = true
    })
    right.addEventListener('click', () => {
        if (flag) {
            flag = false
            num--;
            index--;
            if (index == -1) {
                index = 4
            }
            changestyle();
            ul.style.transition = 'all .5s';
            ul.style.left = position - num * w + 'px'
        }
    })

    swiper.addEventListener('mouseover', () => {
        clearInterval(timer);
        timer = null
    })
    swiper.addEventListener('mouseout', () => {
        timer = setInterval(() => {
            left.click()
        }, 2000);
    })
    for (let i = 0; i < olli.length; i++) {
        olli[i].addEventListener('click', () => {
            num = i;
            index = i;
            changestyle();
            ul.style.transition = 'all .5s';
            ul.style.left = position - num * w + 'px'
        })
    }
}