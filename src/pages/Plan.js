import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import arrow from '../assets/arrow.png'
import back from '../assets/back.png'
import back_white from '../assets/back_white.png'
import check from '../assets/check.png'
import person from '../assets/person.png'
import Header2 from '../components/Header2'
import { UserContext } from '../UserContext'

const Plan = () => {
    const { user, setUser } = useContext(UserContext)

    const [data, setData] = useState({
        object: [
            {
                titulo: 'Llanta robada',
                content: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
                img: 'robo',
                monto: 15.00,
                add: false
            },
            {
                titulo: 'Choque y/o pasarte la luz roja ',
                content: 'Contenido choque',
                img: 'choque',
                monto: 20.00,
                add: false
            },
            {
                titulo: 'Atropello en la vía Evitamiento ',
                content: 'Contenido atropello',
                img: 'atropello',
                monto: 50.00,
                add: false
            },
        ]
    })
        
    const [selected, setSelected] = useState(null)
    const [added, setAdded] = useState(null)
    const [monto, setMonto] = useState(user.monto)
    const [suma, setSuma] = useState(14300.00)
    

    const monto1 = (i) => {
        let arrayCopy = [...data.object]

        arrayCopy[i].add
            ? (arrayCopy[i].add = false)
            : (arrayCopy[i].add = true)
        
        setData({ ...data, object: arrayCopy})

        if (arrayCopy[i].add) {
            setUser({...user, monto : user.monto + data.object[i].monto})
            setMonto(!monto)
        } else {
            setUser({...user, monto : user.monto - data.object[i].monto})
            setMonto(!monto)
        }
        if (added === i) {
            return setAdded(null)
            
        } else {
            
        }
        setAdded(i)
        
    }

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    const addplan = () => {
        if (suma < 16500) {
            setSuma(suma + 100)
        }
    }

    const subplan = () => {
        if (suma > 12500) {
            setSuma(suma - 100)
        }
    }

    

  return (
    <>
        <Header2 />
        <div className='flex border-t border-gray5 xs:flex-col sm:flex-row'>
            <section className='sm:bg-gray7 xs:w-full sm:w-1/4 sm:pl-16 xs:px-8 sm:pt-12 '>
                <div className='flex flex-col xs:hidden sm:block'>
                    <div className='flex flex-row'>
                        <div className='border border-gray4 text-gray4 rounded-full w-6 h-6 flex justify-center'>1</div>
                        <div className='ml-4 text-gray3'>Datos</div>
                    </div>
                    <div className='flex justify-center h-10 w-0 ml-3 border border-gray5 border-dashed'></div>
                    <div className='flex flex-row'>
                        <div className='border border-gray4 text-white bg-acian2-hover rounded-full w-6 h-6 flex justify-center'>2</div>
                        <div className='ml-4 text-gray1-t'>Arma tu plan</div>
                    </div>
                </div>
                <div className='xs:block sm:hidden'>
                    <div className='flex py-3 space-x-3 items-center'>
                        <img src={back_white} alt='back' />
                        <span className='uppercase text-xs min-w-max'>Paso 2 de 2</span>
                        <div className='h-1 bg-acian2 w-full'></div>
                    </div>
                </div>
            </section>
            <section className='flex xs:flex-col sm:flex-row xs:w-full sm:w-3/4 xs:px-0 sm:px-24 xs:pt-0 sm:pt-12 xs:pb-3 pb-16 sm:space-x-24'>
                {/* left */}
                <div className='xs:w-full sm:w-1/2'>
                    <div className='xs:hidden sm:flex items-center'>
                        <button><img src={back} alt='back' /></button>
                        <span className='text-gray3 ml-4'>VOLVER</span>
                    </div>
                    <div className='text-4xl text-gray1-t xs:hidden sm:block'>¡Hola, <span className='text-red-rimac'>{user.name}!</span></div>
                    <div className='xs:text-3xl sm:text-4xl text-gray1-t xs:block sm:hidden xs:bg-gray7 xs:pt-10 xs:px-8'>Mira las coberturas</div>
                    <div className='text-gray2-p xs:pt-3 sm:mt-3 xs:bg-gray7 sm:bg-white xs:px-8 sm:px-0'>Conoce las coberturas para tu plan</div>
                    <div className='xs:bg-gray7 sm:bg-white xs:pt-11 xs:pb-14 sm:py-0 sm:mt-11 xs:px-8 sm:px-0'>
                        <div className='border-2 rounded-xl border-gray6 flex justify-between xs:pl-8 xs:bg-white '>
                            <div className='sm:pl-8 pt-10 xs:pb-11 sm:pb-14 '>
                                <div className='text-xs text-gray3'>Placa: {user.placa}</div>
                                <div className='text-xl w-48'>Wolkswagen 2019 Golf</div>
                            </div>
                            <div className='sm:pr-3'>
                                <img src={person} alt='person' />
                            </div>
                        </div>
                    </div>
                    <div className='flex xs:flex-col sm:flex-row xs:mx-8 sm:mx-0 justify-between mt-16 sm:items-center'>
                        <div>
                            <div>Indica la suma asegurada</div>
                            <div className='flex text-xs text-gray2-p'>
                                <div className='pr-2'>MIN $12,500</div>
                                <div className='pl-2 border-l xs:mt-0 sm:mt-0'>MAX $16,500</div>
                            </div>
                        </div>
                        <div className='border rounded px-4 py-3 border-gray4 xs:mt-4 xs:flex xs:justify-between'>
                            <button onClick={subplan} className='text-acian2-hover'>-</button>
                            <span className='px-3'>$ {suma}</span>
                            <button onClick={addplan} className='text-acian2-hover'>+</button>
                        </div>
                    </div>
                    <div className='border-b border-gray5 mt-11'></div>
                    <div className='text-xl mt-14 xs:mx-8 sm:mx-0'>Agrega o quita coberturas</div>
                    <div className='mt-8 flex text-center text-xs'>
                        <div className='pb-6 w-1/3 p-4 border-b border-red-rimac uppercase'>Protege a tu auto</div>
                        <div className='pb-6 w-1/3 p-4 border-b border-gray5 uppercase'>Protege a los que te rodeaN</div>
                        <div className='pb-6 w-1/3 p-4 border-b border-gray5 uppercase'>mejora tu plan</div>
                    </div>
                    <div className='flex items-center'>
                        <div className='max-w-lg xs:mx-8 sm:mx-0'>
                            {data.object.map((item, i) => (
                                <div key={i} className='flex space-x-3 mt-8 pb-8 border-b border-gray5'>
                                    <div><img className='w-10 h-10' src={require('../assets/'+ item.img + '.png')} alt='img' /></div>
                                    <div className='flex-1'>
                                        <h2 className='cursor-pointer text-xl text-gray1-t' onClick={() => toggle(i)}>{item.titulo}</h2>
                                        <div className='mt-3'>
                                            <button className='flex ' onClick={() => monto1(i)}>
                                                <div className='rounded-full border border-acian1 w-6 text-acian1 '>{item.add  ? '-' : '+'}</div>
                                                <div className='pl-3 text-acian2-hover'>{item.add  ? 'Quitar' : 'Agregar'}</div>
                                                {/* <div >{item.add ? 'mas' : 'menos'}</div> */}
                                            </button>
                                        </div>
                                        <div className={`mt-4 text-gray1-t text-sm ${selected === i ? 'max-h-0 overflow-hidden transition-all' : 'h-auto max-h-full'}`}>{item.content}</div>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <span onClick={() => toggle(i)}>{selected === i ? <img className='rotate-180' src={arrow} alt='arrow' ></img> : <img src={arrow} alt='arrow' ></img>}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='xs:w-full sm:w-56 xs:flex xs:justify-between px-8 sm:block'>
                    <div className='flex flex-col xs:justify-end xs:pb-0 sm:pb-5 border-b border-gray5'>
                        <div className='uppercase text-xs text-gray1-t mb-2 xs:hidden sm:block'>Monto</div>
                        <div className='text-3xl xs:text-2xl'>${user.monto}</div>
                        <div className='text-xs text-gray2-p'>mensuales</div>
                    </div>
                    <div className='mt-6 text-gray1-t xs:hidden sm:block'>El precio incluye:</div>
                    <div className='mt-3 text-gray2-p text-sm xs:hidden sm:block'>
                        <div className='flex'><img src={check} alt='check' /><span className='ml-4'>Llanta de repuesto</span></div>
                        <div className='flex'><img src={check} alt='check' /><span className='ml-4'>Analisis de motor</span></div>
                        <div className='flex'><img src={check} alt='check' /><span className='ml-4'>Aros gratis</span></div>
                    </div>
                    <div>
                        <Link to='/bienvenida'><button className='w-full px-8 py-4 xs:py-3 bg-red-rimac text-white rounded-lg mt-8'>LO QUIERO</button></Link>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Plan