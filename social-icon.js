view SocialIcon {
  <a href={view.props.url}>
    <img src={view.props.image} />
  </a>

  $ = {
    paddingLeft: 8,
    paddingRight: 8,
  }

  on.scroll(window, (e)=> console.log(e))

  $img = {
    width: 'calc(max(10vh, 10vw))',
    height: 'calc(max(10vh, 10vw))',
  }
}
