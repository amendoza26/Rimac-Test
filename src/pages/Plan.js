import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import back from '../assets/back.png'
import check from '../assets/check.png'
import person from '../assets/person.png'
import Header2 from '../components/Header2'
import { UserContext } from '../UserContext'

const Plan = () => {
    const { user, setUser } = useContext(UserContext)

    const data = [
        {
            titulo: 'Llanta robada',
            content: 'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más',
            img: 'robo',
            monto: 10
        },
        {
            titulo: 'Choque y/o pasarte la luz roja ',
            content: 'Contenido choque',
            img: 'choque',
            monto: 20
        },
        {
            titulo: 'Atropello en la vía Evitamiento ',
            content: 'Contenido atropello',
            img: 'atropello',
            monto: 40
        },
    ]

    const [selected, setSelected] = useState(null)
    const [added, setAdded] = useState(null)

    const add = (i) => {
        if (added === i) {
            return setAdded(null)
            
        }
        // setUser({ monto : user.monto + i.monto })
        setAdded(i)
    }

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    const addplan = () => {
        setUser({ monto : user.monto + 100})
    }

    const subplan = () => {
        setUser({ monto : user.monto - 100})
    }

    

  return (
    <>
        <Header2 />
        <div className='flex border-t border-gray5 '>
            <section className='bg-gray7 w-1/4 pl-16 pt-12 '>
                <div className='flex flex-col'>
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
            </section>
            <section className='flex w-3/4 px-24 pt-12 pb-16 space-x-24'>
                {/* left */}
                <div className='w-1/2'>
                    <div className='flex items-center'>
                        <button><img src={back} alt='back' /></button>
                        <span className='text-gray3 ml-4'>VOLVER</span>
                    </div>
                    <div className='text-4xl text-gray1-t'>¡Hola, <span className='text-red-rimac'>{user.name}!</span></div>
                    <div className='text-gray2-p mt-3'>Conoce las coberturas para tu plan</div>
                    <div className='border-2 rounded-xl border-gray6 flex justify-between mt-11'>
                        <div className='pl-8 pt-10 pb-14'>
                            <div className='text-xs text-gray3'>Placa: {user.placa}</div>
                            <div className='text-xl w-48'>Wolkswagen 2019 Golf</div>
                        </div>
                        <div className='pr-3'>
                            <img src={person} alt='person' />
                        </div>
                    </div>
                    <div className='flex justify-between mt-16'>
                        <div>
                            <div>Indica la suma asegurada</div>
                            <div className='flex text-xs text-gray2-p'>
                                <div className='pr-2'>MIN $12,500</div>
                                <div className='pl-2 border-l'>MAX $16,500</div>
                            </div>
                        </div>
                        <div className='border rounded px-4 py-3 border-gray4'>
                            <button onClick={subplan} className='text-acian2-hover'>-</button>
                            <span className='px-3'>$ {user.monto}</span>
                            <button onClick={addplan} className='text-acian2-hover'>+</button>
                        </div>
                    </div>
                    <div className='border-b border-gray5 mt-11'></div>
                    <div className='text-xl mt-14'>Agrega o quita coberturas</div>
                    <div className='mt-8 flex text-center text-xs'>
                        <div className='pb-6 w-1/3 p-4 border-b border-red-rimac uppercase'>Protege a tu auto</div>
                        <div className='pb-6 w-1/3 p-4 border-b border-gray5 uppercase'>Protege a los que te rodeaN</div>
                        <div className='pb-6 w-1/3 p-4 border-b border-gray5 uppercase'>mejora tu plan</div>
                    </div>
                    <div className='flex items-center'>
                        <div className='max-w-lg'>
                            {data.map((item, i) => (
                                <div key={i} className='flex space-x-3 mt-8 pb-8 border-b border-gray5'>
                                    <div><img className='w-10 h-10' src={require('../assets/'+ item.img + '.png')} alt='img' /></div>
                                    <div className='flex-1'>
                                        <h2 className='cursor-pointer text-xl text-gray1-t' onClick={() => toggle(i)}>{item.titulo}</h2>
                                        <div className='mt-3'>
                                            <button className='flex ' onClick={() => add(i)}>
                                                <div className='rounded-full border border-acian1 w-6 text-acian1 '>{added === i ? '+' : '-'}</div>
                                                <div className='pl-3 text-acian2-hover'>{added === i ? 'Agregar' : 'Quitar'}</div>
                                                {/* {added === i ? 'Agregar' : 'Quitar'} */}
                                            </button>
                                        </div>
                                        <div className={`mt-4 text-gray1-t text-sm ${selected === i ? 'max-h-0 overflow-hidden transition-all' : 'h-auto max-h-full'}`}>{item.content}</div>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <span onClick={() => toggle(i)}>{selected === i ? '+' : '-'}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='w-56'>
                    <div className='flex flex-col pb-5 border-b border-gray5'>
                        <div className='uppercase text-xs text-gray1-t mb-2'>Monto</div>
                        <div className='text-3xl'>${user.monto}</div>
                        <div className='text-xs text-gray2-p'>mensuales</div>
                    </div>
                    <div className='mt-6 text-gray1-t'>El precio incluye:</div>
                    <div className='mt-3 text-gray2-p text-sm'>
                        <div className='flex'><img src={check} alt='check' /><span className='ml-4'>Llanta de repuesto</span></div>
                        <div className='flex'><img src={check} alt='check' /><span className='ml-4'>Analisis de motor</span></div>
                        <div className='flex'><img src={check} alt='check' /><span className='ml-4'>Aros gratis</span></div>
                    </div>
                    <div>
                        <Link to='/bienvenida'><button className='w-full px-8 py-4 bg-red-rimac text-white rounded-lg mt-8'>LO QUIERO</button></Link>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Plan