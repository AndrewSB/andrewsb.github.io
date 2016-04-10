import { device } from '../constants'

view Hello {
  <h1>hey, I'm <name>andrew</name> </h1>

  $ = {
    display: 'flex',
    position: 'absolute'
  }

  $h1 = {
    display: 'flex',

    [device.small]: {
      fontSize: '10vw',
    }
  }

  $name = {
    paddingLeft: '6px',
    color: 'green',

    [device.small]: {
      paddingLeft: '10px',
    }
  }
}
