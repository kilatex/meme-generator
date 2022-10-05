import { useState } from 'react';
import meme from '../assets/meme-template.jpg'

const Main = () => {

    
    const [topText, setTopText] = useState();
    const [botText, setBotText] = useState();



    return (
        <main className="main">
            <form>
                <div className="inputs--container">
                    <div className="left--input">
                        <input type={'text'} required value={topText} onInput={e => setTopText(e.target.value.toUpperCase())} placeholder="Top Text"/>
                    </div>
                    <div className="right--input">
                        <input type={'text'} required value={botText}  onInput={e => setBotText(e.target.value)} placeholder="Bottom Text" />
                    </div>
                </div>
                <div className="submit--container">
                <input   className="submit"  type={'submit'} value="Get A new Image 🖼️"/>
                </div>
            </form>

            <div className="meme--container">
                <span className='top--text'>{topText}</span>    
                <img src={meme} alt="MEME"/>
                <span className='bottom--text'>{botText}</span>
            </div>
        </main>
    );
}
export default Main;