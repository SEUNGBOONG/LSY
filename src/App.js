import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Today from './pages/today';
import Ch from './pages/ch';
import Ring from './pages/ring';
import Com from './pages/com';


const App = () => {
	return (
	
			<BrowserRouter>
				<Routes>
					<Route path="/today" element={<Today/>}/>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="/ch" element={<Ch/>}/>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="/ring" element={<Ring/>}/>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="/com" element={<Com/>}/>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
				</Routes>
			</BrowserRouter>
		
	);
};

export default App;