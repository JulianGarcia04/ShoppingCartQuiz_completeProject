import React from 'react';
import '../styles/carrousell.scss';
import background1 from '../assets/background-carrousell-1.webp';
import background2 from '../assets/background-carrousell-2.webp';
import background3 from '../assets/background-carrousell-3.webp';
import arrowLeft from '../assets/arrowLeft.svg';
import arrowRight from '../assets/arrowRight.svg';

class carrousell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {numNodesActive: 0};
    }

    //functions carrousell
    rightScroll=async()=>{
        let numNodes = document.getElementsByClassName('itemCarrousel');

        if (this.state.numNodesActive < numNodes.length-1) {

            numNodes[this.state.numNodesActive].classList.remove('active');

            await this.setState((state)=>({
                numNodesActive : state.numNodesActive + 1
            }))

            numNodes[this.state.numNodesActive].classList.add('active');
        }
    }

    leftScroll=async(e)=>{
        let numNodes = document.getElementsByClassName('itemCarrousel');

        if (this.state.numNodesActive <= numNodes.length-1 && this.state.numNodesActive >0) {
            numNodes[this.state.numNodesActive].classList.remove('active');
            await this.setState((state)=>({
                numNodesActive : state.numNodesActive -1
            }))
            numNodes[this.state.numNodesActive].classList.add('active');
        }
    }


    //render to carrousell
    render(){
        return (
            <section className='sectionCarrousell'>
                <div>
                    <img src={arrowLeft} alt="" className='arrowContainer' id='arrowLeft' onClick={this.leftScroll}/>
                </div>
                <div className='containerPrincipalCarrousell' id='containerPrincipalCarrousell'>
                    <div className='itemCarrousel active'>
                        <img src={background1} alt="" />
                    </div>
                    <div className='itemCarrousel'>
                        <img src={background2} alt="" />
                    </div>
                    <div className='itemCarrousel'>
                        <img src={background3} alt="" />
                    </div>
                </div>
                <div>
                    <img src={arrowRight} alt="" className='arrowContainer' id='arrowRight' onClick={this.rightScroll}/>
                </div>
            </section>
        );
    }
}

export default carrousell;