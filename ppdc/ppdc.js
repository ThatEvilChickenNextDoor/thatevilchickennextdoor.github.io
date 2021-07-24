var app = new Vue({
    data: {
        pa: null,
        pn: null,
        dn: null,
        cn: null,
        buttonText: null,
        header: null
    },
    methods: {
        generate() {
            if (Math.random() < 0.01) {
                this.pa = 'Pero'
                this.pn = 'Pero'
                this.dn = 'Chu'
                this.cn = 'Chu'
                this.buttonText = 'PeroPero ChuChu';
                this.header = 'PeroPero ChuChu';
                return;
            }
            this.pa = randomize(P1, this.pa);
            this.pn = randomize(P2, this.pn);
            this.dn = randomize(D, this.dn);
            this.cn = randomize(C, this.cn);
            if (this.pa == 'pomu' && this.pn == 'power' && this.dn == 'distribution' && this.cn == 'center') {
                this.buttonText = "Wow, you actually found it";
                this.header = "It stood for:";
                alert('You found it.');
                return;
            }
            this.buttonText = randomize(B, this.buttonText);
            this.header = randomize(H, this.header);
        }
    },
    beforeMount() {
        this.generate()
    }
}).$mount("#app");

function randomize(lines, current) {
    let line = current;
    while(line == current) {
        line = lines[Math.floor(Math.random()*lines.length)];
    }
    return line;
 }
