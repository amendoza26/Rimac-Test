import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
import phone from '../assets/phone.png'

const Header = () => {
  return (
    <>
        <section className='w-4/5 mx-auto my-6 absolute'>
            <div className='flex justify-between'>
                <Link to='/'><div><img src={logo} alt='logo' /></div></Link>
                <div className='flex flex-row space-x-3'>
                    <div className='text-gray2-p'>¿Tienes alguna duda?</div>
                    <div className='flex flex-row w-max'>
                        <img className='' src={phone} alt='phone' />
                        <div className='text-acian2-hover text-sm w-full'>(01) 411 6001</div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Header