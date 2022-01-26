import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import "./login.css";
import {actionTypes} from "./reducer";
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });

        }).catch(error=>alert(error.message))
    }

  return <div className='login'>
<div className="login__logo">
    <img src="data:image/png;base64,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" alt="" />
    <img src="data:image/png;base64,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" alt="" />

</div>
<Button type="submit" onClick={signIn}>
    Sign-in
</Button>

  </div>;
}

export default Login;
