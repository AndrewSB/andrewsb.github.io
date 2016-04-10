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
    {view.props.slug}
  </a>

  $ = {
    padding: [0, 8],
  }

  $a = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '4em',
    padding: [0, 9],
  }
}
