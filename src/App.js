import './App.css';
import NevBar from './component/NevBar';
import Page1 from './component/page1';
import Page2 from './component/page2';
import Page3 from './component/page3';
import Page4 from './component/page4';
import Page5 from './component/page5';
import Footer from './component/footer';
import Pageslider from './component/Pageslider';
function App() {
  return (
   <>
  <NevBar></NevBar>
  <Page1></Page1>
  <Page2></Page2>
  <Page3></Page3>
  <Pageslider></Pageslider>
  <Page4></Page4>
  <Page5></Page5>
  <Footer></Footer>

   </>
  );
}

export default App;
