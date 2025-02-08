'use client'
import Cookies from "js-cookie";
import { Theme } from "../types";

function getBody(): HTMLBodyElement {
    return document.getElementsByTagName('body')[0];
}

function handleDarkModeClick(): void {
    setThemeCookie('dark')
    getBody().classList.add('dark');
    getBody().classList.remove('light');
}

function handleLightModeClick(): void {
    setThemeCookie('light')
    getBody().classList.add('light');
    getBody().classList.remove('dark');
}

function setThemeCookie(theme: Theme): void {
    localStorage.setItem('theme', theme);
    Cookies.set('theme', theme);
}

function LightModeIcon() {
    return (
        <div className="mode-button mode-button--light" onClick={handleLightModeClick}>
            <div className="mode-button__light"></div>
        </div>
    )
}

function DarkModeIcon() {
    return (
        <div className="mode-button mode-button--dark" onClick={handleDarkModeClick}>
            <img className="mode-button__dark" src="/dark-mode.svg" alt="dark mode" />
        </div>
    )
}


function ModeIcon() {
    return (
        <>
            <LightModeIcon />
            <DarkModeIcon />
        </>
    )
}

export default ModeIcon;
