import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import {
    Switch,
    Redirect,
    HashRouter
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {



    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {

        firebase.auth().onAuthStateChanged( async(user) => {

            if ( user?.uid) {
                dispatch(login( user.uid, user.displayName))
                setIsLoggedIn(true)
                dispatch( startLoadingNotes( user.uid ))
            } else {
                setIsLoggedIn(false)
            }

            setChecking(false)

        })

    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <h1>Wait a minute...</h1>
        )
    }

    return (
        <HashRouter>
            <div>
                <Switch>
                    <PublicRoute 
                        isAutenticated={ isLoggedIn }
                        path="/auth"
                        component={ AuthRouter }
                    />

                    <PrivateRoute
                        isAutenticated={ isLoggedIn }
                        exact
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </HashRouter>
    )
}
