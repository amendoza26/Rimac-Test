import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ilustracion from '../assets/ilustracion.png'
import iluMobile from '../assets/ilustracion-mobile.png'

import Header from '../components/Header'
import { UserContext } from '../UserContext'
import { useContext } from 'react'

const Login = () => {

    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = 'https://jsonplaceholder.typicode.com/users/2' 
            
            axios.get(url).then(res => {
                let data = res.data
                setUser({...user, name : data.name, mail: data.email})
            });

            await navigate("/arma-tu-plan", { replace: true });
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <div className='px-32 xs:px-10'><Header /></div>
        <div className='flex xs:flex-col sm:flex-row'>
            <section className='xs:w-full sm:w-2/5 sm:bg-login-desktop xs:bg-gray7 bg-cover bg-no-repeat bg-left-top flex-none sm:h-screen xs:pt-24 xs:pb-14 sm:py-24'>
                <div className='flex flex-col mr-16 ml-auto max-w-xs'>
                    <div className=' flex justify-end xs:absolute xs:right-0 sm:static sm:right-auto'><img className='xs:hidden sm:block' src={ilustracion} alt='ilustracion' /><img className='xs:block sm:hidden' src={iluMobile} alt='ilustracion' /></div>
                    <div className='text-gray1-t text-xs mt-6'>¡NUEVO!</div>
                    <div className='text-4xl mt-1'>Seguro <span className='text-red-rimac'>Vehicular Tracking</span></div>
                    <div className='mt-4 xs:w-3/4'>Cuéntanos dónde le harás seguimiento a tu seguro</div>
                    {/* <div className='mb-10'>© 2021 RIMAC Seguros y Reaseguros.</div> */}
                </div>
            </section>
            <section className='flex-1 '>
                <div className='container mx-auto max-w-xs'>
                    <form onSubmit={handleSubmit}>
                        <div className='xs:mt-10 sm:mt-28 text-3xl text-gray1-t'>Déjanos tus datos</div>
                        <div className='flex mt-6'>
                            <select className='rounded-l w-2/5 shadow border border-gray4 focus:outline-none focus:shadow-outline p-4'>
                                <option>DNI</option>
                                <option>RUC</option>
                            </select>
                            <input value={user.document} name='document' onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } placeholder='Nro. de doc' type='number' className='w-full rounded-r shadow border-y border-r border-gray4 p-4 rounded' required={true} ></input>
                        </div>
                        <div className='mt-4'>
                            <input value={user.phone} name='phone' onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) } className='border border-gray4 w-full p-4 rounded' type='phone' placeholder='Celular' required={true} ></input>
                        </div>
                        <div className='mt-4'>
                            <input value={user.placa} name='placa' onChange={(e) => setUser({...user, [e.target.name]:e.target.value}) }  type='text' placeholder='Placa' className='border border-gray4 w-full p-4 rounded' required={true}></input>
                        </div>
                        <div className='mt-6'>
                            <input type='checkbox' className='accent-green2 w-5 h-5 float-left' required={true} />
                            <label className='text-gray2-p flex pl-3 text-xs'>Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.</label>
                        </div>
                        <div className='mt-14'>
                            <button type='submit' className='bg-red-rimac py-5 px-12 rounded-lg text-white xs:w-full sm:w-auto'>COTÍZALO</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </>
  )
}

export default Login