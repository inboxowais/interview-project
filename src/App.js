
import './App.scss';
import Main from './containers/main/index'
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core'
import { jubileeTheme } from './theme.configuration/pheonix.material.theme'

import DashboardMain from './containers/dashboard.main/index'

function App() {
  return (
    <div className="global">
      <ThemeProvider theme={jubileeTheme} >
        <Switch>
          <Main>
            <Route exact  path="/" component={DashboardMain} />
          
            {/* < /> */}
          </Main>
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
