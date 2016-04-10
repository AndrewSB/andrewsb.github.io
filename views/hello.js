import { device } from '../constants'

view Hello {
  <h1>hey, i'm <name>andrew</name> </h1>

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
    paddingLeft: '7px',
    color: 'rgb(150, 65, 164)',

    [device.small]: {
      paddingLeft: '10px',
    }
  }
}
