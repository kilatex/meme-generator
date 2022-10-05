import memeLogo from '../assets/logo-meme.png'
const Header = () => {
    return (
        <header className="header">
            <div className="left">
                <img src={memeLogo} alt="meme-logo" className="meme-logo"/>
                <div>Meme Generator</div>
            </div>

            <div className="right">
                React Course - FreeCodeCamp
            </div>

        </header>
    );
}

export default Header;