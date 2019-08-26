class Rem {
    private font_size: number
    constructor(design: number, ratio: number) {
        this.font_size = 16;
        this._init(design, ratio)
        this._resize(design, ratio);
    }

    private _init (design: number, ratio: number): void {
        const device_width: number = document.documentElement.clientWidth || window.screen.width;
        this.font_size = device_width / design * ratio;
        document.getElementsByTagName('html')[0].style.fontSize = `${ this.font_size }px`;
        window ? (window as any).font_size = this.font_size : false;
        this._showLog();
    }

    private _resize(design: number, ratio: number): void {
        window ? window.onresize = () => this._init(design, ratio) : false;
    }

    private _showLog ():void {
        console.log(`%c setting font-size <${ this.font_size }px> complete. `, 'background: #458C67; color: #fff');
    }

}

export default Rem;
