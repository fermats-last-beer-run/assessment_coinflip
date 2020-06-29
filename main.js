let coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random()*2);
    },
    toString: function() {
        if(this.state === 0)
            return "Tails"
        return "Heads"
    },
    toHTML: function() {
        let image = document.createElement('img');
        if(this.state === 1) {
            image.src = "./assets/heads.jpg"
        } else {
            image.src = "./assets/tails.jpg"
        }
        return image;
    }
}

const display20flips = (coin) => {
    for (let i = 0; i < 20; i++) {
        coin.flip()
        let p = document.createElement('p')
        p.innerHTML = `${coin.toString()}`
        document.body.appendChild(p)
    }
}

const display20images = (coin) => {
    for (let i = 0; i < 20; i++) {
        coin.flip()
        document.body.appendChild(coin.toHTML())
    }
}
