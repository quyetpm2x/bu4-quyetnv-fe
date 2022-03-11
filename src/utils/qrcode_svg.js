import QrCode from 'react-qrcode-svg';

const Qrcodetosvg = (data) => {

        return (
            <div>
                <QrCode
        data="google.com"
        height="250"
        width="250"
        fgColor="#000000"
        bgColor="#ffffff"
        />
            </div>
        
        );
}

export default Qrcodetosvg;