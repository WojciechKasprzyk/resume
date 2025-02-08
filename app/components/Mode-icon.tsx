'use client'

function getBody() {
    return document.getElementsByTagName('body')[0];
}

function handleDarkModeClick() {
    getBody().classList.add('dark');
    getBody().classList.remove('light');
}

function handleLightModeClick() {
    getBody().classList.add('light');
    getBody().classList.remove('dark');
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
