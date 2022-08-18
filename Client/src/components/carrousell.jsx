import React from 'react';
import '../styles/carrousell.scss';
import background1 from '../assets/background-carrousell.webp';
import background2 from '../assets/farmacy.webp';
import background3 from '../assets/web-farmacy.webp';
import arrowLeft from '../assets/arrowLeft.svg';
import arrowRight from '../assets/arrowRight.svg';

class carrousell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {numScroll:0}
    }

    rightScroll=()=>{
        let CPC = document.getElementById('containerPrincipalCarrousell');
        let maxScroll = CPC.scrollWidth - CPC.clientWidth;
        if (CPC.scrollLeft >= 0 && CPC.scrollLeft<=maxScroll) {
            document.getElementById('containerPrincipalCarrousell').scrollTo(this.state.numScroll,0);
            this.setState((state)=>({
                numScroll: state.numScroll + 620
            }));
        }
    }

    leftScroll=()=>{
        
    }

    render(){
        return (
            <section className='sectionCarrousell'>
                <div>
                    <img src={arrowLeft} alt="" className='arrowCotainer'/>
                </div>
                <div className='containerPrincipalCarrousell' id='containerPrincipalCarrousell'>
                    <div>
                        <img src={background1} alt="" />
                    </div>
                    <div>
                        <img src={background2} alt="" />
                    </div>
                    <div>
                        <img src={background3} alt="" />
                    </div>
                </div>
                <div>
                    <img src={arrowRight} alt="" className='arrowCotainer' onClick={this.rightScroll}/>
                </div>
            </section>
        );
    }
}

export default carrousell;