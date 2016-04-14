view Main {
  var displayStyle = 'none';
  setTimeout(() => displayStyle = 'flex', 1.5 * 1000)

  <Hello />
  <SocialIcons display={displayStyle} />
  <Bottom display={displayStyle} />

  $ = {
    height: '100vh',
    width: '100vw',
    color: 'white',
    background: '#66308a',
    padding: 20,
    position: 'absolute',
    overflow: 'hidden',
  }
}
