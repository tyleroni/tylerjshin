import './index.scss';
import impromptu from '../../assets/images/impromptu.png';
import nextbutton from '../../assets/images/next-button.png'
import backbutton from '../../assets/images/back-button.png'







const Impromptu = () => {
    return (
    <>
        <div className = 'impromptu-layout'>
            <div className = 'container impromptu-page'>
                <div className = 'backgroundclr-impromptu'>
                <h1 className = 'text-zone-h1 casestudyh'>Impromptu</h1>
                <a href = '/mind/treasure/case/study' className = 'button backbutton'>
                    <img src = {backbutton} alt = 'Back Button'></img>
                </a>
                <a href = '/quickfit/case/study' className = 'button nextbutton'>
                    <img src = {nextbutton} alt = 'Next Button'></img>
                </a>
                <a href = 'figma link' target = '_blank'>
                    <img src = {impromptu} alt = 'Mind Treasures Banner' className = 'mindtreasurebanner'></img>
                </a>
                <h1 className = 'text-zone-h1'>Overview</h1>
                <p className = 'text-zone-p'>Our goal with Impromptu was to improve BeReal's user experience through novel interactions while also keeping emphasis on the importance of authenticity among users. </p>
                <p className = 'text-zone-p'>In order to encourage more expressive social interaction among users, we implemented ways to seek out different aspects of life through prompts. Through user testing and feedback we saw that it provided little variability for what could be displayed, so we developed the “doodle” interaction. </p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Impromptu