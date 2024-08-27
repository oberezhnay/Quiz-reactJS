import React, { useEffect, useState } from 'react';

const Setup2FA = () => {
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    const [secret, setSecret] = useState('');

    const handleGenerate = async () => {
        const response = await fetch('/path/to/2fa.php');
        const data = await response.json();
        setQrCodeUrl(data.qrCodeUrl);
        setSecret(data.secret);
    };

    useEffect(() => {
        handleGenerate();
    }, []);

    return (
        <div>
            <h1>Настройка двухфакторной аутентификации</h1>
            {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
            <p>Секрет: {secret}</p>
        </div>
    );
};
export default Setup2FA;
