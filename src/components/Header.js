import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from '../features/user/userSlice';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                navigate("/");
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            navigate("/");
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(setSignOut());
            navigate("/login");
        })
    }

    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            { !userName ? (
                <LoginContainer>
                    <Login onClick={signIn}>login</Login>
                </LoginContainer>
                ) :
                <>
                    <NavMenu>
                        <a>
                            <img src="./images/home-icon.svg" alt=''/>
                            <span>Home</span>
                        </a>
                        <a>
                            <img src="./images/search-icon.svg" alt=''/>
                            <span>Search</span>
                        </a>
                        <a>
                            <img src="./images/watchlist-icon.svg" alt=''/>
                            <span>Watchlist</span>
                        </a>
                        <a>
                            <img src="./images/original-icon.svg" alt=''/>
                            <span>Originals</span>
                        </a>
                        <a>
                            <img src="./images/movie-icon.svg" alt=''/>
                            <span>Movies</span>
                        </a>
                        <a>
                            <img src="./images/series-icon.svg" alt=''/>
                            <span>Series</span>
                        </a>
                    </NavMenu>
                    <UserImg 
                    onClick={signOut}
                    src="./images/me.jpeg" />
                </>
            }
        </Nav>
  )
}

export default Header

const Nav = styled.div`
    height: 70px;
    // min-width:800px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    }
`

const Logo = styled.img`
    width: 80px;
    
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 50px;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            text-transform: uppercase;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                // top: 0;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.96) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0,0,0,0.6);
    transition: all 0.2s ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;

    }
`

const LoginContainer = styled.div`
    display: flex;    
    flex: 1;
    justify-content: flex-end;
`