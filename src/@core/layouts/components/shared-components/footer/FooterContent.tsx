// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Feito por `}
        <Link target='_blank' href='https://github.com/wandersonsousa'>
          WanderCode
        </Link>
      </Typography>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <Link
            target='_blank'
            href='https://api.whatsapp.com/send?phone=558661748014&text=ola,%20tudo%20bem.%20estou%20com%20duvidas%20sobre%20a%20plataforma%20listadecnpj'
          >
            Suporte
          </Link>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
