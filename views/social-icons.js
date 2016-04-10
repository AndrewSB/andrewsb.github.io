import { device, socialLinks } from '../constants'

view SocialIcons {
  <icons repeat={socialLinks}>
    <SocialIcon {..._}/>
  </icons>


  $ = {
    display: view.props.display,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100vw',
    height: '100vh',
  }
}

view SocialIcon {
  <a href={view.props.url}>
    <img src={view.props.image} />
  </a>

  $ = {
    padding: [0, 8],
  }

  $img = {
    width: '10vmax',
    height: '10vmax',

    [device.small]: {
      width: '25vmin',
      height: '25vmin',
    }
  }
}
