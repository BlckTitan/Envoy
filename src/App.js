//router links
import RouteEngine from './organism/router/RouteEngine';

import Styled from 'styled-components';
//global styles
import { _GlobalStyle } from './GlobalStyle.js/GlobalStyle';

const _Container = Styled.div`

  background-color: #FBFBFB;
  position: relative;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <_Container>
      <_GlobalStyle/>
      <RouteEngine/>
    </_Container>
  );
}

export default App;