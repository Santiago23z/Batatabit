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
          <div id='main--currency-table' className=' min-w-[235px] max-w-[500px] h-[360px] '>
          <section className='flex h-[300px]  max-sm:overflow-hidden max-sm:overflow-x-auto max-sm:overscroll-x-contain max-sm:snap-proximity max-sm:snap-x   w-[100%] mt-[80px]  lg:justify-center'>
          <div className=' min-w-full max-w-[300px] min-h-[270px]'>
                <p className='mb-[25px] text-[1.4rem] font-bold leading-[2.3rem] text-[#f7931a]'>Monedas</p>
                <table className='min-w-[170px] max-w-[280px] h-[calc(100%-25px-37px)]'>
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
          </div> 
          <div className=' min-w-full max-w-[300px] min-h-[260px]'>
                <p className='mb-[25px] text-[1.4rem] font-bold leading-[2.3rem] text-[#52A9FA]'>Corredoras</p>
                <table className='min-w-[170px] max-w-[280px] h-[calc(100%-25px-37px)]'>
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
          </div> 
        </section>
            {/* <div className='w-[100%]  h-[250px] overflow-x-auto overscroll-x-contain snap-proximity snap-x flex bg-red-700' id='container-table'>

                <div className='w-[65%] min-w-[230px] py-10 max-w-[300px] min-h-[250px] mt-[50px] mx-[20px]'>
                <p className='mb-[15px] text-[1.4rem] font-bold leading-[2.3rem] text-[#f7931a]'>Monedas</p>

                <table className='min-w-[180px] max-w-[280px] h-full'>
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
                </div>

                <div className=' w-[65%] min-w-[230px] py-10 max-w-[300px] min-h-[250px] mt-[50px] mx-[20px]'>
                <p className='mb-[15px] text-[1.4rem] font-bold leading-[2.3rem] text-[#f7931a]'>Monedas</p>

                <table className='min-w-[180px] max-w-[280px] h-full'>
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
                </div>
             
              <div>
                <p>Corredoras</p>
                <table className='min-w-[170px] max-w-[280px] h-full'>
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
              </div> 
            </div>
            <p className=' rounded-full bg-[#FFE9D4] w-[200px] p-3 text-[.8rem] text-center ' id='paragraph-updates'>Actualizado: 19 Julio 23:45</p>


          </div> */}
          </div>
        </section>
      </section>
      <section className=' relative w-full min-w-[320px] h-auto py-[20px] px-[10px] bg-[#201E1C] mt-20 '>
        <span className='absolute w-[40px] h-[25px]' id='iconBatata'></span>
        <div className=' mt-20'>
          <h2 className='w-[90%] min-w-[280px] h-auto text-center font-bold text-2xl text-white' id='titleSection'>Creamos un producto sin comportación.</h2>
          <p className='text-center my-5 text-sm text-[#808080]'>Confiable y diseñado para su uso diario.</p>
        </div>
        <section className='flex  flex-wrap-reverse gap-3 max-w-[900px] content-center my-[0px] mx-auto'>
          <article className='w-full min-w-[288px] max-w-[400px] min-h-[150px] p-[15px] bg-[#282623] rounded-md'>
            <span id='iconClock'></span>
            <p className='text-xl text-white font-bold my-2'>Tiempo real</p>
            <p className='text-[#808080] text-sm'>Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
          </article>
          <article className='w-full min-w-[288px] max-w-[400px] min-h-[150px] p-[15px] bg-[#282623] rounded-md'>
            <span id='iconView'></span>
            <p className='text-xl text-white font-bold my-2'>No hay tasas escondidas</p>
            <p className='text-[#808080] text-sm'>Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
          </article>
          <article className='w-full min-w-[288px] max-w-[400px] min-h-[150px] p-[15px] bg-[#282623] rounded-md'>
            <span id='iconDinero'></span>
            <p className='text-xl text-white font-bold my-2'>Compara monedas</p>
            <p className='text-[#808080] text-sm'>Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
          </article>
          <article className='w-full min-w-[288px] max-w-[400px] min-h-[150px] p-[15px] bg-[#282623] rounded-md'>
            <span id='iconCheck'></span>
            <p className='text-xl text-white font-bold my-2'>Información confiable</p>
            <p className='text-[#808080] text-sm'>Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.</p>
          </article>
        </section>
      </section>
      <section className='w-full min-w-[320px] h-[80vh] ' id='imageOrange'>
        <h2 className='pt-[90px] text-[2rem] font-bold text-white leading-5 text-center'>Conocelo hoy!</h2>
      </section>
      <section id="plans" className=' w-full min-w-[320px] pb-[70px] text-center'>
        <div className='w-[90%] min-w-[288px] h-auto' id='plansTitle'>
          <h2 className='pt-[50px] text-[1.6rem] font-bold leading-[2.4rem] text-black'>Escoge el plan que mejor se ajuste a tí</h2>
          <p className='pt-[30px] text-[1rem] font-[500] leanding-[1.8rem] text-[#757575]'>Cualquier plan te da acceso a nuestra plataforma.</p>
        </div>
        <section className='flex h-[346px]  overflow-x-auto overscroll-x-contain snap-proximity snap-x   w-[100%] lg:justify-center'>
          <article className='relative w-[65%] min-w-[230px] py-10 max-w-[300px] min-h-[250px] mt-[50px] mx-[20px]  bg-white rounded-2xl snap-center	' id='articleCard'>
            <div className=''>
              <h3 className=' text-[1.2rem] font-[500] leading-loose'>Pago Anual</h3>
              <p className='py-[5px] relative px-[0px] text-5xl font-bold inline-block w-[95px]  leading-10 text-black'><span className='text-[1.2rem] font-light absolute top-0 left-0'>$</span>99</p>
              <p className=' text-[.8rem] text-[#757575] my-4'>* Ahorras $129 comparado el plan mensual.</p>
              <button className='text-center border-2 border-[#F7931A] rounded-md  w-[180px] h-[48px] bg-[#faf8f7] font-semibold'>Escoger este <span id='spanButton'></span></button>
            </div>
          </article>
          <article className='relative w-[65%] min-w-[230px] py-10 max-w-[300px] min-h-[250px] mt-[50px] mx-[20px]  bg-white rounded-2xl snap-center	' id='articleCard'>
            <p className='bg-[#F7931A] inline-block p-[10px] rounded-lg absolute font-[500] text-white' id='recomended'>Recomendado</p>
            <div className=''>
              <h3 className=' text-[1.2rem] font-[500] leading-loose'>Pago Anual</h3>
              <p className='py-[5px] relative px-[0px] text-5xl font-bold inline-block w-[95px]  leading-10 text-black'><span className='text-[1.2rem] font-light absolute top-0 left-0'>$</span>99</p>
              <p className=' text-[.8rem] text-[#757575] my-4'>* Ahorras $129 comparado el plan mensual.</p>
              <button className='text-center border-2 border-[#F7931A] rounded-md  w-[180px] h-[48px] bg-[#faf8f7] font-semibold'>Escoger este <span id='spanButton'></span></button>
            </div>
          </article>
          <article className='relative w-[65%] min-w-[230px] py-10 max-w-[300px] min-h-[250px] mt-[50px] mx-[20px]  bg-white rounded-2xl snap-center	' id='articleCard'>
            <div className=''>
              <h3 className=' text-[1.2rem] font-[500] leading-loose'>Pago Anual</h3>
              <p className='py-[5px] relative px-[0px] text-5xl font-bold inline-block w-[95px]  leading-10 text-black'><span className='text-[1.2rem] font-light absolute top-0 left-0'>$</span>99</p>
              <p className=' text-[.8rem] text-[#757575] my-4'>* Ahorras $129 comparado el plan mensual.</p>
              <button className='text-center border-2 border-[#F7931A] rounded-md  w-[180px] h-[48px] bg-[#faf8f7] font-semibold'>Escoger este <span id='spanButton'></span></button>
            </div>
          </article>

        </section>
      </section>
    </main>
  )
}

export default Main