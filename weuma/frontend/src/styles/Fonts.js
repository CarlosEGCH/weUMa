import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Heading Font Name';
        font-weight: 900;
        src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
    }
    @font-face {
        font-family: 'Body Font Name';
        font-weight: 900;
        src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
    }
      `}
  />
)

export default Fonts