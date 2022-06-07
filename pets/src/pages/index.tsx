import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Lista from '../ui/components/Lista/Lista'
import Titulo from '../ui/components/Titulo/Titulo'

const Home: NextPage = () => {
  return (
    <div>
         <Titulo 
            titulo='asf'
            subtitulo={
               <span>
                  Com um pequeno valor mensal, você <br/> pode <strong>adotar um pet virtualmente</strong>
               </span>} 
         />

         <Lista 
            pets={[
               {
                  id: 1,
                  nome: 'Bidu',
                  historia: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum dolores alias, similique, qui laudantium impedit repudiandae iure error atque possimus eum ut laboriosam numquam nihil beatae neque laborum perspiciatis officiis!',
                  foto: 'https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png'
               },
                  {
                     id: 2,
                     nome: 'Rex',
                     historia: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum dolores alias, similique, qui laudantium impedit repudiandae iure error atque possimus eum ut laboriosam numquam nihil beatae neque laborum perspiciatis officiis!',
                     foto: 'https://www.petz.com.br/blog/wp-content/uploads/2022/04/cachorro-e-vertebrado-ou-invertebrado2.jpg'
                  }
            ]}
            
         />
    </div>
  )
}

export default Home
