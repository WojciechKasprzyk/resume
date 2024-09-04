'use client'

function getBody() {
    return document.getElementsByTagName('body')[0];
}

function handleDarkModeClick() {
    getBody().classList.add('dark');
    getBody().classList.remove('light');
};
function handleLightModeClick() {
    getBody().classList.add('light');
    getBody().classList.remove('dark');
};


function ModeIcon() {

    const lightModeIcon = <div className="mode-button mode-button--light" onClick={handleLightModeClick}></div>;
    const darkModeIcon = <img className="mode-button mode-button--dark" src="/dark-mode.svg" alt="dark mode" onClick={handleDarkModeClick}/>

    return (
        <>
            {darkModeIcon}
            {lightModeIcon}
        </>
    )
}

export default ModeIcon;
