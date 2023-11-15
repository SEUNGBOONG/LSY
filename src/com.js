import React, { useState } from 'react';
import './App.css';
import HomeImage from './home.png';
import TodayImage from './today.png';
import CHImage from './ch.png';
import RingImage from './ring.png';
import ComImage from './com.png';

function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100vh',
    flexGrow: 1,
  };

  const contentWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
    background: '#F7D358',
    padding: '40px 0 120px 0',
  };

  const centerWhiteStyle = {
    width: '80%',
    height: 'auto',
    background: 'white',
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  };

  const homeWrapperStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const homeImageStyle = {
    width: '45px',
    height: '45px',
  };

  const homeTextStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: '4px',
  };

  const tabImageStyle = {
    width: '35px',
    height: '35px',
    margin: '7px',
    padding: '5px 20px 20px 20px',
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
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  };

  const appBackgroundStyle = {
    width: '90%',
    height: 'auto',
    background: 'white',
    border: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: '0',
    position: 'relative',
    margin: '10px',
  };

  const likeButtonStyle = {
    cursor: 'pointer',
    color: 'gray',
    alignSelf: 'flex-start',
    marginTop: '10px',
  };

  const writeButtonStyle = {
    cursor: 'pointer',
    color: 'blue',
    alignSelf: 'flex-start',
    marginTop: '10px',
  };

  const [likes, setLikes] = useState(Array(8).fill(false));

  const handleLikeClick = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] = !updatedLikes[index];
    setLikes(updatedLikes);
  };

  const handleWriteButtonClick = () => {
    window.location.href = './write.js'; // 이동할 페이지 경로에 맞게 수정
  };
  const handleHomeImageClick = () => {
    window.location.href = './App.js';
  };

  const handleTodayImageClick = () => {
    window.location.href = './App.js';
  };

  const handleCHImageClick = () => {
    window.location.href = './ch.js';
  };

  const handleRingImageClick = () => {
    window.location.href = './ring.js';
  };

  const handleComImageClick = () => {
    window.location.href = './com.js';
  };


  return (
    <div className="App" style={containerStyle}>
      <div style={contentWrapperStyle}>
        <div style={centerWhiteStyle}>
          <div style={homeWrapperStyle}>
            <img
              src={HomeImage}
              alt="home"
              style={{ ...homeImageStyle }}
              onClick={handleHomeImageClick}
            />
            <span style={homeTextStyle}>커뮤니티</span>
          </div>

          <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {[...Array(8)].map((_, index) => (
              <div key={index} style={appBackgroundStyle}>
                <p style={{ textAlign: 'left' }}>내용 {index + 1}</p>
                <span
                  style={likeButtonStyle}
                  onClick={() => handleLikeClick(index)}
                >
                  {likes[index] ? '❤️ 좋아요 취소' : '🤍 좋아요'}
                  </span>
              </div>
            ))}
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