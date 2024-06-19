import './App.css';
import logo from './images/logo.svg';
import illustration from './images/illustration-mockups.svg';

function App() {
  return (
    <>
    <div className='background'>
      <svg className='bg-desktop' width="1318" height="800" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="-45.25%" y1="-88.077%" x2="97.789%" y2="100%" id="a"><stop stop-color="#FF52C1" offset="0%"/><stop stop-color="#F952C5" offset="4.09%"/><stop stop-color="#9952FF" stop-opacity="0" offset="100%"/></linearGradient><linearGradient x1="-64.06%" y1="-121.906%" x2="97.789%" y2="100%" id="b"><stop stop-color="#FF52C1" offset="0%"/><stop stop-color="#F952C5" offset="4.09%"/><stop stop-color="#9952FF" stop-opacity="0" offset="100%"/></linearGradient><linearGradient x1="100%" y1="111.373%" x2="-24.893%" y2="-55.159%" id="c"><stop stop-color="#FF52C1" offset="0%"/><stop stop-color="#9952FF" offset="100%"/></linearGradient><linearGradient x1="21.681%" y1="5.006%" x2="145.861%" y2="145.591%" id="d"><stop stop-color="#FF52C1" offset="0%"/><stop stop-color="#9952FF" offset="100%"/></linearGradient><linearGradient x1="6.375%" y1="-15.195%" x2="91.754%" y2="105.701%" id="e"><stop stop-color="#FF52C1" offset="0%"/><stop stop-color="#9952FF" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd">
        <path fill="url(#a)" transform="matrix(-1 0 0 1 834.817 0)" d="M0 0h409.224l425.593 376v156.83z"/><path fill="url(#b)" transform="rotate(180 528.65 584)" d="M0 367l641.153.138L1057.3 673.299V801z"/><circle stroke="url(#c)" stroke-width="17" cx="704" cy="563" r="49"/><rect fill="url(#d)" opacity=".558" transform="rotate(45 1107.87 708.87)" x="1088.87" y="689.87" width="38" height="38" rx="3"/><rect fill="url(#d)" opacity=".503" transform="rotate(45 1279.598 103.598)" x="1251.598" y="75.598" width="56" height="56" rx="3"/><rect fill="url(#d)" opacity=".558" transform="rotate(45 934.627 63.627)" x="918.627" y="47.627" width="32" height="32" rx="3"/><rect fill="url(#d)" opacity=".558" transform="rotate(45 703.627 186.627)" x="687.627" y="170.627" width="32" height="32" rx="3"/><rect fill="url(#d)" opacity=".387" transform="rotate(45 1237.02 606.02)" x="1228.521" y="597.521" width="17" height="17" rx="1"/><path d="M91.477 739.477v-16.5a5 5 0 0 1 10 0v16.5h16.5a5 5 0 0 1 0 10h-16.5v16.5a5 5 0 1 1-10 0v-16.5h-16.5a5 5 0 1 1 0-10h16.5z" fill="url(#e)" opacity=".211" transform="rotate(45 96.477 744.477)"/></g>
      </svg>
    </div>

    <div className='page-content'>
      <img className='logo' src={logo} alt=""/>
      <div className='content-body'  >
        <img className='illustration' src={illustration} alt=""/>
        <div className='body-text'>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>Huddle re-imagines the way we build communities. 
             You have a voice, but so does your audience. Create 
             connections with your users as you engage in genuine 
             discussion.</p>
          <button type="submit">Register</button>
        </div>
      </div>
      <div className='social-links'>
        <svg className='facebook' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path  id='svgHover' fill="#ffffff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
        </svg>
        <svg className='twitter' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path id='svgHover' fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
        </svg>
        <svg className='instagram' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path id='svgHover' fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
        </svg>

      </div>
    </div>



    </>
  );
}

export default App;
