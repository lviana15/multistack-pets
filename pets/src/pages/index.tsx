import type { NextPage } from 'next';
import Lista from '../ui/components/Lista/Lista';
import Titulo from '../ui/components/Titulo/Titulo';
import { Dialog, Grid, TextField, DialogActions, Button, Snackbar } from '@mui/material';
import { useIndex } from '../data/hooks/pages/useIndex';

const Home: NextPage = () => {
   const { 
      listaPets,
      petSelecionado,
      setPetSelecionado
   } = useIndex();

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
            pets={listaPets}
            onSelect={ (pet) => setPetSelecionado(pet) }
         />


         <Dialog 
            open={petSelecionado !== null}
            fullWidth
            PaperProps={{ sx: { p: 5 }}}
            onClose={() => setPetSelecionado(null)}
         >
            <Grid container spacing={2}>

               <Grid item xs={12}>
                  <TextField 
                     label={'Email'} 
                     type={'email'}
                     fullWidth
                  />
               </Grid>

               <Grid item xs={12}>
                  <TextField
                     label={'Quantia por mês'}
                     type={'number'}
                     fullWidth
                  />
               </Grid>

            </Grid>

            <DialogActions sx={{mt: 5}}>
               <Button 
                  color={'secondary'}
                  onClick={() => setPetSelecionado(null)}
               >
                  Cancelar
               </Button>
               <Button 
                  variant={'contained'}
               >
                  Confirmar adoção
               </Button>
            </DialogActions>
         </Dialog>

         <Snackbar
            open={false}
            message={'kkkkk'}
         />
    </div>
  )
}

export default Home
