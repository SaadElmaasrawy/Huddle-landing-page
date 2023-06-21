import logo from './images/logo.svg'
import hero from './images/illustration-mockups.svg'

function App() {
  return (
    <div className=" bg-[#674BB1] min-h-screen w-[100%] bg-[url('./images/bg-mobile.svg')] bg-no-repeat bg-top text-white p-10 flex flex-col gap-[10vh] md:bg-[url('./images/bg-desktop.svg')] md:bg-center md:bg-cover">
      <div>
      <img src={logo} alt='logo' className=' w-[40%] md:w-[10%]'></img>
      </div>
      <div className=' flex flex-col gap-[10vh] md:flex-row '>
        <div className=' md:w-[100%]'>
        <img src={hero} alt='hero'></img>
        </div>
        <div className=' flex flex-col justify-center gap-6 md:text-left md:items-start'>
          <h1 className=' text-2xl font-bold text-center leading-10'>Build The Community Your Fans Will Love</h1>
          <p className=' text-center text-[15px] md:text-left'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
          <button className=' bg-white text-[#674BB1] w-[60%] py-3 rounded-3xl mx-auto hover:bg-[#E980E7] hover:text-white md:w-[25%] md:m-0'>Register</button>
        </div>
      </div>
      <div className='flex justify-center gap-10 md:justify-end'>
      <i className="fa-brands fa-facebook-f border-2 rounded-[100%]  w-10 h-10 text-center py-2.5 hover:text-[#E980E7] hover:border-[#E980E7]"></i>
      <i className="fa-brands fa-twitter border-2 rounded-[100%]  w-10 h-10 text-center py-2.5 hover:text-[#E980E7] hover:border-[#E980E7]"></i>
      <i className="fa-brands fa-instagram border-2 rounded-full  w-10 h-10 text-center py-2.5 hover:text-[#E980E7] hover:border-[#E980E7]"></i>
      </div>
      
    </div>
  );
}

export default App;
