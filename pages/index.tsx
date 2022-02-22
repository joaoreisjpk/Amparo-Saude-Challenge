import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { push } = useRouter();
  useEffect(() => {
    const api = async () => {
      const response  = await fetch('http://localhost:3000/api/prices')
      console.log(await response.json())
    }
    api()
  }, [])

  return (
    <div>
      <h1>O que deseja fazer?</h1>
      <button onClick={() => push('/price-table')}>Consultar a tabela de preços</button>
      <button onClick={() => push('/calculadora')}>Descobrir quanto economizaria!</button>
    </div>
  )
}

export default Home
