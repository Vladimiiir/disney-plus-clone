import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="./images/home-icon.svg"/>
                    <span>Home</span>
                </a>
                <a>
                    <img src="./images/search-icon.svg"/>
                    <span>Search</span>
                </a>
                <a>
                    <img src="./images/watchlist-icon.svg"/>
                    <span>Watchlist</span>
                </a>
                <a>
                    <img src="./images/original-icon.svg"/>
                    <span>Originals</span>
                </a>
                <a>
                    <img src="./images/movie-icon.svg"/>
                    <span>Movies</span>
                </a>
                <a>
                    <img src="./images/series-icon.svg"/>
                    <span>Series</span>
                </a>
            </NavMenu>
            <UserImg src="./images/Vladimir_Picture.JPEG" />
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