import React from 'react'
import styled from 'styled-components'


const MainContainer = styled.div([], {
  position: "relative",
  height: "100vh",
  width: "1280px",
  minHeight: "720px",
  paddingTop: "100px"
});

const MainLayout = ({ children }) => {
  return (
    <MainContainer>
      <div
        style={{
          position: "relative",
          zIndex: 2,
          verticalAlign: "middle",
          marginTop: "284px",
          transform: "translateY(-50%)",
          backgroundImage: 'url(https://i.postimg.cc/rpXb85GY/FBDC.png)',
          width: '100%',
          height: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        {children}
      </div>
    </MainContainer>
  );
};

export default MainLayout