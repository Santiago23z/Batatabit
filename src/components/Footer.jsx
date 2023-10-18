import batata from '../assets/icons/footer.svg'
const Footer = () => {
  return (
    <footer className='flex w-full h-[150px] bg-[#f7931a]'>
      <section className=' flex justify-center items-center w-[50%]'>
        <ul>
          <li><a href="">Linkedin</a></li>
          <li><a href="">Crunhbase</a></li>
          <li><a href="">Hackernews</a></li>
        </ul>
      </section>
      <section className=' flex justify-center items-center w-[50%]'>
        <img src={batata} alt="logo batata" />
      </section>
    </footer>
  )
}

export default Footer
