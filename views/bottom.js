import { device } from '../constants'

view Bottom {
  <p>you can find me here</p>

  $ = {
    display: view.props.display,
    position: 'fixed',
    bottom: 0,
    right: '20px',
    justifyContent: 'flex-end',
  }

  $p = {
    verticalAlign: 'bottom',
    textAlign: 'right',

    [device.small]: {
      fontSize: '6vw',
    },
  }
}
