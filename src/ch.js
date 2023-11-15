import './App.css';
import React, { useState } from 'react';
import HomeImage from './ch_main.png';
import TodayImage from './today.png';
import CHImage from './ch.png';
import RingImage from './ring.png';
import ComImage from './com.png';
import "@testing-library/jest-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState('메인'); // 기본값: '메인'


  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between', // 수직 방향 중앙 정렬
    height: '100vh',
    flexGrow: 1, // 컨텐츠가 더 커져도 화면 크기만큼 컨텐츠 영역을 확장

  };


  const contentWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
    background: '#F7D358',
    padding : '40px 0 120px 0'
  };
 

  const centerWhiteStyle = {
    width: '80%',
    height: 'auto',
    background: 'white',
    display: 'flex',
    margin: '0 auto', // 가운데 정렬을 위해 margin 추가
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // 테두리 추가
  };

  const homeWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const homeImageStyle = {
    width: '42px',
    height: '42px',
  };
  
  const homeTextStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: '6px',
  };

  const tabImageStyle = {
    width: '35px',
    height: '35px',
    margin: '7px',
    padding: '5px 20px 20px 20px'
  };

  const tabtext = {
    fontSize: '15px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '-25px 0 3px 0',
  };

  const bottomTabStyle = {
    width: '100%',
    height: 'auto',
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px',
    position: 'fixed',
    bottom: '0',
    zIndex: '1',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // 테두리 추가

  };

  const appBackgroundStyle = {
    width: '450%', // 여기서 10px만 더 좁게 조정합니다.
    height: 'auto',
    background: 'transparent',
    border: '1px solid grey',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '10px',
    wordWrap: 'break-word', // 추가
    zIndex: '0',
    position: 'relative',
    margin:'10px', // 변경된 위치 속성
    whiteSpace: 'pre-line', // 수정
  };
  const tabContent = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    padding: '20px',
  };

  const tabDividerStyle = {
    width: '100%',
    height: '1px',
    background: '#ccc',
    alignItems: 'center',
    margin: '10px 0 0 0',
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };


  const handleHomeImageClick = () => {
    window.location.href = '/App.js';
  };

  const handleTodayImageClick = () => {
    window.location.href = '/App.js';
  };

  const handleCHImageClick = () => {
    window.location.href = '/ch.js';
  };

  const handleRingImageClick = () => {
    window.location.href = '/ring.js';
  };

  const handleComImageClick = () => {
    window.location.href = '/com.js';
  };

  
  return (
    <div className="App" style={containerStyle}>
     

      <div style={contentWrapperStyle}>
        <div style={centerWhiteStyle}>
          <div style={homeWrapperStyle}>
            <img
              src={HomeImage}
              alt="home"
              style={{  ...homeImageStyle }}
              onClick={handleHomeImageClick}
            />
            <span style={homeTextStyle}>금융상품</span>
          </div>

          <div style={{ paddingTop: '5px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              {/* 탭 메뉴 */}
              {['메인', '연금', '저축', '재테크', '대출'].map((tab) => (
                <div
                  key={tab}
                  style={{
                    cursor: 'pointer',
                    fontWeight: selectedTab === tab ? 'bold' : 'normal',
                  }}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div style={tabDividerStyle}></div> {/* 탭 메뉴 밑에 선 추가 */}

            {/* 선택된 탭의 내용 */}
            <div style={tabContent}>
            {selectedTab === '메인' && (
              <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <div style={appBackgroundStyle}><p>메인 1</p></div>
    <div style={appBackgroundStyle}><p>메인 2</p></div>
    <div style={appBackgroundStyle}><p>메인 3</p></div>
    <div style={appBackgroundStyle}><p>메인 4</p></div>
    <div style={appBackgroundStyle}><p>메인 5</p></div>
    <div style={appBackgroundStyle}><p>메인 6</p></div>
    <div style={appBackgroundStyle}><p>메인 7</p></div>
    <div style={appBackgroundStyle}><p>메인 8</p></div>
  </div>
)}
              {selectedTab === '연금' && (
  <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={appBackgroundStyle}><p>연금 1</p></div>
    <div style={appBackgroundStyle}><p>연금 2</p></div>
    <div style={appBackgroundStyle}><p>연금 3</p></div>
    <div style={appBackgroundStyle}><p>연금 4</p></div>
    <div style={appBackgroundStyle}><p>연금 5</p></div>
    <div style={appBackgroundStyle}><p>연금 6</p></div>
    <div style={appBackgroundStyle}><p>연금 7</p></div>
    <div style={appBackgroundStyle}><p>연금 8</p></div>
  </div>
)}
              {selectedTab === '저축' && (
  <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={appBackgroundStyle}><p>저축 1</p></div>
    <div style={appBackgroundStyle}><p>저축 2</p></div>
    <div style={appBackgroundStyle}><p>저축 3</p></div>
    <div style={appBackgroundStyle}><p>저축 4</p></div>
    <div style={appBackgroundStyle}><p>저축 5</p></div>
    <div style={appBackgroundStyle}><p>저축 6</p></div>
    <div style={appBackgroundStyle}><p>저축 7</p></div>
    <div style={appBackgroundStyle}><p>저축 8</p></div>
  </div>
)}
              {selectedTab === '재테크' && (
  <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <div style={appBackgroundStyle}><p>재테크 1</p></div>
    <div style={appBackgroundStyle}><p>재테크 2</p></div>
    <div style={appBackgroundStyle}><p>재테크 3</p></div>
    <div style={appBackgroundStyle}><p>재테크 4</p></div>
    <div style={appBackgroundStyle}><p>재테크 5</p></div>
    <div style={appBackgroundStyle}><p>재테크 6</p></div>
    <div style={appBackgroundStyle}><p>재테크 7</p></div>
    <div style={appBackgroundStyle}><p>재테크 8</p></div>
  </div>
)}
              {selectedTab === '대출' && (
  <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={appBackgroundStyle}><p>대출 1</p></div>
    <div style={appBackgroundStyle}><p>대출 2</p></div>
    <div style={appBackgroundStyle}><p>대출 3</p></div>
    <div style={appBackgroundStyle}><p>대출 4</p></div>
    <div style={appBackgroundStyle}><p>대출 5</p></div>
    <div style={appBackgroundStyle}><p>대출 6</p></div>
    <div style={appBackgroundStyle}><p>대출 7</p></div>
    <div style={appBackgroundStyle}><p>대출 8</p></div>
  </div>
)}
            </div>
          </div>

     

          
      </div>
      </div>
      <div style={bottomTabStyle}>
        <div>
          <img
            src={TodayImage}
            alt="Today"
            style={tabImageStyle}
            onClick={handleTodayImageClick}
          />
          <p style={tabtext}>투데이</p>
        </div>
        <div>
          <img
            src={CHImage}
            alt="CH"
            style={tabImageStyle}
            onClick={handleCHImageClick}
          />
          <p style={tabtext}>추천</p>
        </div>
        <div>
          <img
            src={RingImage}
            alt="Ring"
            style={tabImageStyle}
            onClick={handleRingImageClick}
          />
          <p style={tabtext}>알림</p>
        </div>
        <div>
          <img
            src={ComImage}
            alt="Com"
            style={tabImageStyle}
            onClick={handleComImageClick}
          />
          <p style={tabtext}>소통</p>
        </div>
      </div>
    </div>
  );
}

export default App;
