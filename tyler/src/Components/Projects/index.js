import './index.scss'
//import background from '../../assets/images/Portfolio_Background.png';
import mindTreasures from '../../assets/images/mind_treasures.png';
import quickfit from '../../assets/images/quickfit.png';
import impromptu from '../../assets/images/impromptu.png';
import sugarcube from '../../assets/images/sugarcube.png';


const Projects = () => {

    return (
        <div className = "projects-layout">
            <div className = "container projects-page">
                <div className = "backgroundclr">
                    <h1 className = 'text-zone-h1'>Projects</h1>
                    <div className = 'text-zone-p'>
                    
                        <p>
                            I'm an ambitious Front End Developer looking for an opportunity to showcase my skills, working to create a meaningful and lasting impact on the latest technologies and diverse projects. 
                        </p>
                        <p>
                            My confidence and curiousity allows me to put out my best work, while still taking in new things and experiences that help me grow as a Front End Developer and Designer. 
                        </p>
                        <p>
                            If you would like to learn more about my experiences and skillset, take a look at my Projects below!
                        </p>
                    </div>
                    <div className = "case-study case-study-1">
                        <div className = 'project mind-treasures'>
                            <img src = {mindTreasures} alt = 'Mind Treasures Display' className = 'mindtreasureimg'></img>
                            <h1 className = 'mindtreasureh'>Mind Treasures:</h1>
                            <p className = 'mindtreasurep'>At Mind Treasures, I worked as their Web Developer, working to revamp their website including a complete visual makeover, optimizing the layout, performing a content audit, and streamlining navigation, through HTML/CSS/JS, to ensure the best user experince possible while increasing the conversion rate for the financial literacy program that they offer. </p>
                            <a href = '/mindtreasure/case/study' className = 'project-button mindtreasureb'>Learn More!</a>
                        </div>
                        <div className = 'project impromptu'>
                            <img src = {impromptu} alt = 'Impromptu Display' className = 'impromptuimg'></img>
                            <h1 className = 'impromptuh'>Impromptu:</h1>
                            <p className = 'impromptup'>Impromptu is our team's take on a redesign of the app, BeReal. Our goal with this was to explore options for completely novel social interactions while still maintaining the general essence that BeReal was before. We were able to develop new features including prompts and doodles in which we were able to user test among participants to examine the user experience. </p>
                            <a href = '/impromptu/case/study' className = 'project-button impromptub'>Learn More!</a>
                        </div>
                    </div>
                    <div className = "case-study case-study-2">
                        <div className = 'project quickfit'>
                            <img src = {quickfit} alt = 'QuickFit Display' className = 'quickfitimg'></img>
                            <h1 className = 'quickfith'>QuickFit:</h1>
                            <p className = 'quickfitp'>One of the biggest problems identified through our research about why people don't go to the gym was due to worry about improper form. Our goal with our kiosk, QuickFit, was to provide an all inclusive guide that covers exercise form, work-out regiments, and specific muscle group exercises in order to help ease users into the gym with a welcoming experience</p>
                            <a href = '/quickfit/case/study' className = 'project-button quickfitb'>Learn More!</a>
                        </div>
                        <div className = 'project sugarcube'>
                            <img src = {sugarcube} alt = 'SugarCube Display' className = 'sugarcubeimg'></img>
                            <h1 className = 'sugarcubeh'>SugarCube:</h1>
                            <p className = 'sugarcubep'>Our goal with SugarCube was to approach issues surrounding underrepresented communities, specifically the financially disadvantaged. Through our user research and surveys we saw that about 40% of kids in highschool did not have easy access to reproducitve care products. Through SugarCube, we were able explore ways for discreet and easy access to contraceptives </p>
                            <a href = '/sugarcube/case/study' className = 'project-button sugarcubeb'>Learn More!</a>
                        </div>
                    
                    </div>
                </ div>
            </div>
        </div>
    )

}


export default Projects