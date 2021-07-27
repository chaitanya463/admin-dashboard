import react from 'react';
import './authhome.css';
import AuthIntro from './AuthIntro';
import AuthForm from './AuthForm';

const AuthHome = () => {
    return (
        <div className='authContainer'>
            <div className='widgetLeft'>
                <AuthIntro/>
            </div>
            <div className='widgetRight'>
                <AuthForm/>
            </div>
        </div>
    );
}

export default AuthHome;