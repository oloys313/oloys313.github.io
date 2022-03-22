window.onload = function() {
    let wrapper = document.getElementById('wrapper')
    let circles = 8

    for (let index = 0; index < circles; index++) {
        leftPos = Math.floor(Math.random() * 101)
        topPos = Math.floor(Math.random() * 81)

        const randomColor = () => {
            let color = '#';
            for (let i = 0; i < 6; i++){
                const random = Math.random();
                const bit = (random * 16) | 0;
                color += (bit).toString(16);
            };
            return color;
         };

        let div = document.createElement('div')
        div.className = 'circles'
        div.style.top = (topPos + "vh")
        div.style.left = (leftPos + "vw")
        div.style.backgroundColor = randomColor()
        wrapper.appendChild(div)
    }
}