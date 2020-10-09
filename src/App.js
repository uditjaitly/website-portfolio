import React from 'react';
import './App.css';
import  {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';
function App() {
  return (
    <div>
      {/* Always shows a header, even in smaller screens. */}
      <div style={{height: '300px', position: 'relative'}}>
          <Layout fixedHeader>
              <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                  <Navigation>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                      <a href="#">Link</a>
                  </Navigation>
              </Drawer>
              <Content>
                <Main/>
              </Content>
          </Layout>
      </div>
    </div>
  );
}

export default App;
