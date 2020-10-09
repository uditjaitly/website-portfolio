import React , {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
class LandingPage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                         src="https://i.ibb.co/7CH4myJ/Round-Photo-Oct082020-234434.png"
                         alt="my-pic"
                         className="my-pic-img"
                        />
                        <div className="banner-text">
                            
                            <h1>Software Engineer</h1>
                            <hr/>

                            <p>SKILLS OF MINE</p>
                            <div className="social-links">
                                
                                <a href="https://www.linkedin.com/in/udit-jaitly-757222109/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                <a href="https://github.com/uditjaitly/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                <a href="https://twitter.com/uditjaitly258/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>


                </Grid>
            </div>
        )
    }
}

export default LandingPage;