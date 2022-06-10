import { useState } from "react"
import { Pet } from '../../@types/Pet';

export function useIndex(){
   const [listaPets, setListaPets] = useState(
      [
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
      ]
   ),

      [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
      [email, setEmail] = useState(''),
      [valor, setValor] = useState('');

   return {
      listaPets,
      petSelecionado,
      setPetSelecionado,
      email,
      setEmail,
      valor,
      setValor
   };

}