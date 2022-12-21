import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { useMediaQuery, Box } from '@mui/material';
import MobileDrawer from './components/MobileDrawer';
import PcDrawer from './components/PcDrawer';
import { NavItems } from './components/constants';
import { ProfilePage } from './pages';
let theme = createTheme();
function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <BrowserRouter>
      <Routes>
        {NavItems.map((item) => (
          <Route
            key={item.key}
            path={item.path}
            element={
              <Box sx={{ p: 1, pl: { xs: 1, sm: 9 }, mt: { xs: 7, sm: 0 } }}>
                {isMobile ? <MobileDrawer /> : <PcDrawer page={`${item.id}`} />}
                {item.element}
              </Box>
            }
          />
        ))}
        <Route
          path={'/profile'}
          element={
            <Box sx={{ p: 1, pl: { xs: 1, sm: 9 }, mt: { xs: 7, sm: 0 } }}>
              {isMobile ? <MobileDrawer /> : <PcDrawer page={9} />}
              <ProfilePage />
            </Box>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
