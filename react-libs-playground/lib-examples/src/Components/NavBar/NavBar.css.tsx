import { createUseStyles, Styles } from 'react-jss'

const navText: Styles = {
  color: 'white',
  '&:visited': 'white',
}

const navItem: Styles = {
  ...navText,
  padding: '1em',
  transition: '0.1s',
  '&:hover': {
    background: '#242929',
    transition: '0.1s'
  }
}

const navBar: Styles = {
  '& nav': {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#282c34',
    '& div': navItem,
    '& a': { 
      ...navItem,
      textDecoration: 'none',
    },
  }
}    

const navLinks: Styles = {
  position: 'absolute',
  color: '#242929',
  maxWidth: '20em',
  width: '80%',
  background: 'white',
  padding: '1em',
  right: '0',
  marginTop: '0',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  listStyleType: 'none',
}

const navLink: Styles = { 
  color: '#242929',
  textDecoration: 'none',
  '&:visited': '#242929',
}

export const useStyles = createUseStyles({
  navBar,
  navLinks,
  navLink,
})
