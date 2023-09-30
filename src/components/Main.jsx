import './main.css'
const Main = () => {
  return (
    <main className='w-full h-auto bg-[#FAF8F7]'>
      <section className='w-full text-center h-auto pt-[80px] pb-[30px]'>
        <div className="" id="main--container-image"></div>
        <div className="w-[90%] min-w-[100px] max-w-[900px] mx-auto">
            <h2 className=' font-bold text-xl  mt-12 mb-[20px] text-[2.4rem] leading-[2.6rem] text-black '>Visibilizamos todas las tasas de cambio.</h2>
            <p className='text-sm mb-[30px] text-[1.4rem] text-[#757575] leading-[1.6rem]'>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
        </div>
        <section>
          <div id='main--currency-table' className=' w-[70%] min-w-[235px] max-w-[500px] h-[360px]'>
            <p className='mb-[15px] text-[1.4rem] font-bold leading-[2.3rem] text-[#f7931a]'>Monedas</p>
            <div className='w-[100%]  h-[250px]' id='container-table'>
              <table className='min-w-[170px] max-w-[280px]  h-full'>
                <tr>
                  <td className=' rounded-tl-[15%] text-[#bdbcbc]'>Bitcoin</td>
                  <td className=' rounded-tr-[15%] text-[.9rem] font-normal leading-[1.7rem] text-[#757575]'>$1.96 <span className='down'></span></td>
                </tr>

                <tr>
                  <td className='text-[#bdbcbc]'>Ethereum</td>
                  <td className='text-[.9rem] font-normal leading-[1.7rem] text-[#757575]'>$0.07 <span className='up'></span></td>
                </tr>

                <tr>
                  <td className='text-[#bdbcbc]'>Ripple</td>
                  <td className='text-[.9rem] font-normal leading-[1.7rem] text-[#757575]'>$2.15 <span className='down'></span></td>
                </tr>

                <tr>
                  <td className='rounded-bl-[15%] text-[#bdbcbc]'>Stellar</td>
                  <td className='rounded-br-[15%] text-[.9rem] font-normal leading-[1.7rem] text-[#757575]'>$4.96 <span className='down'></span></td>
                </tr>
              </table>
              <p className='py-2 rounded-full bg-[#FFE9D4] w-[50%]' id='paragraph-updates'>Actualizado: 19 Julio 23:45</p>
            </div>
          </div>
        </section>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  )
}

export default Main