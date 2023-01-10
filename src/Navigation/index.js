import React, { useEffect, useState } from 'react';
import AuthStack from './AuthStack/AuthStack';
import AppStack from './AppStack/AppStack';
import { useSelector } from 'react-redux';

const index = () => {
    const loginKey = useSelector((state) => state?.app?.loginKey);

    return (<>{loginKey ? <AppStack /> : <AuthStack />}</>)
};

export default index;
