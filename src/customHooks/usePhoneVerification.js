/* eslint-disable prettier/prettier */
import { React, useState } from 'react';

const usePhoneVerification = () => {

    const [code, setCode] = useState('');
    const [isError, setIsError] = useState(false);
    return {
        code,
        setCode,
        isError,
        setIsError,
    };


};

export default usePhoneVerification;

