import QrCode from 'react-qrcode-svg';

const Qrcodetosvg = (data) => {

    // render() {
        return (
        <QrCode
        data="google.com"
        height="250"
        width="250"
        fgColor="#000000"
        bgColor="#ffffff"
        />
        );
    // };
}

export default Qrcodetosvg;