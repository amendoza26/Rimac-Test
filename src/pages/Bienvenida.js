import React, { useContext } from 'react'
import Header2 from '../components/Header2'

import imagen from '../assets/Illustration.png'
import bg3 from '../assets/bg-3-mobile.png'
import { UserContext } from '../UserContext'
import Footer from '../components/Footer'

const Bienvenida = () => {

    const { user } = useContext(UserContext)

  return (
    <>
        <Header2 />
        <div className='border-t border-gray5 flex xs:flex-col sm:flex-row'>
            <div className='bg-gray7 xs:w-full sm:w-1/3 sm:h-screen'>
                <img className='absolute max-w-md ml-32 mt-24 xs:hidden sm:block' src={imagen} alt='imagen' />
                <img className='w-full max-w-md xs:block sm:hidden' src={bg3} alt='imagen' />
            </div>
            <div className='sm:max-w-lg sm:ml-44 sm:mt-40 xs:mt-12 xs:mb-14 xs:px-8'>
                <div className='xs:text-3xl sm:text-4xl text-gray1-t'><span className='text-red-rimac'>¡Te damos la bienvenida! </span>Cuenta con nosotros para proteger tu vehículo</div>
                <div className='mt-4 xs:text-gray2-p'>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</div>
                <div>{user.mail}</div>
                <button className='uppercase mt-10 px-10 py-5 bg-red-rimac text-white rounded-lg xs:w-full sm:w-auto'>cómo usar mi seguro</button>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Bienvenida