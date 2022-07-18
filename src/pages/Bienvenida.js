import React, { useContext } from 'react'
import Header2 from '../components/Header2'

import imagen from '../assets/Illustration.png'
import { UserContext } from '../UserContext'

const Bienvenida = () => {

    const { user } = useContext(UserContext)

  return (
    <>
        <Header2 />
        <div className='border-t border-gray5 flex'>
            <div className='bg-gray7 w-1/3 h-screen'>
                <img className='absolute max-w-md ml-32 mt-24' src={imagen} alt='imagen' />
            </div>
            <div className='max-w-lg ml-44 mt-40'>
                <div className='text-4xl text-gray1-t'><span className='text-red-rimac'>¡Te damos la bienvenida! </span>Cuenta con nosotros para proteger tu vehículo</div>
                <div className='mt-4'>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</div>
                <div>{user.mail}</div>
                <button className='uppercase mt-10 px-10 py-5 bg-red-rimac text-white rounded-lg'>cómo usar mi seguro</button>
            </div>
        </div>
    </>
  )
}

export default Bienvenida