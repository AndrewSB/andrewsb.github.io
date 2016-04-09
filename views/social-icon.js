import { device } from '../constants'

view SocialIcon {
  <a href={view.props.url}>
    <img src={view.props.image} />
  </a>

  $ = {
    paddingLeft: 8,
    paddingRight: 8,
  }

  $img = {
    width: '10vw',
    height: '10vw',

    // these dont work for some reason
    [device.small]: {
      width: '50vw',
      height: '50vw',
    }
  }
}
