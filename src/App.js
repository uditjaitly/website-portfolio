import React from 'react';
import './App.css';
import  {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
function App() {
  return (
      <div style={{height: '3000px', position: 'relative'}}>
          <Layout fixedHeader>
              <Header className="header-color" title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/about">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <Link to="/resume"></Link>
                      <Link to="/about">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                <Main/>
              </Content>
          </Layout>
      </div>

    );
}

export default App;
