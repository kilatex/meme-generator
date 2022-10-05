import { useState } from 'react';
import meme from '../assets/meme-template.jpg'
import memes from '../assets/memes.js';
const Main = () => {

    
    const [topText, setTopText] = useState();
    const [botText, setBotText] = useState();
    const [image,setImage] = useState(memes[Math.floor(Math.random() * memes.length)]);
    const handlerSetImage = (e) =>{
        e.preventDefault();
       setImage(memes[Math.floor(Math.random() * memes.length)]);
    }
    return (
        <main className="main">
            <form>
                <div className="inputs--container">
                    <div className="left--input">
                        <input type={'text'}  value={topText} onChange={e => setTopText(e.target.value)} placeholder="Top Text"/>
                    </div>
                    <div className="right--input">
                        <input type={'text'}  value={botText}  onChange={e => setBotText(e.target.value)} placeholder="Bottom Text" />
                    </div>
                </div>
                <div className="submit--container">
                <input onClick={e => handlerSetImage(e)}  className="submit"  type={'submit'} value="Get A new Image 🖼️"/>
                </div>
            </form>

            <div className="meme--container">
                <span className='top--text'>{topText}</span>    
                <img src={image.image} alt="MEME"/>
                <span className='bottom--text'>{botText}</span>
            </div>
        </main>
    );
}
export default Main;