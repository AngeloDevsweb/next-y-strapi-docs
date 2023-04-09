import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [employees, setEmployees] = useState([]);

  const consultaApi = async() =>{
    // const res = await axios.get("http://localhost:1337/api/comidas?populate=*")
    // console.log(res.data);
    // const comidas = res.data
    const {data} = await axios.get("http://localhost:1337/api/comidas?populate=*")
    
    setEmployees(data.data)
    
  }

  useEffect(()=>{
    consultaApi()
  },[])

  console.log(employees);

  return (
    <div>
      listado de comidas
      {
        employees.map(({id, attributes}) => (
            <div key={id}>
                <h4>{attributes.nombre}</h4>
                <h5>{attributes.precio}</h5>
                {/* <img src={`http://localhost:1337${attributes.imagen.data.attributes.formats.thumbnail.url}`} alt="" height={200} width={200} /> */}
                <img src={`http://localhost:1337${attributes.imagen.data.attributes.url}`} alt="" height={200} width={200} />
            </div>
        ))
      }
    </div>
  )
}
