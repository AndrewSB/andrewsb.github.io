view Main {
  <h1>hey, I'm andrew</h1>

  let arr = [
    {
      url: "https://github.com/AndrewSB",
      image: "http://i.imgur.com/F26YRqx.jpg",
    },
    {
      url: "https://twitter.com/Andrew_Breck",
      image: "http://i.imgur.com/F26YRqx.jpg",
    }
  ]

  <center>
    <SocialIcon
      url="https://github.com/AndrewSB"
      image="http://i.imgur.com/F26YRqx.jpg"
      />
    <SocialIcon
      url="https://twitter.com/Andrew_Breck"
      image="http://i.imgur.com/F26YRqx.jpg"
      />
  </center>

  <bottomRight>
    <p>you can find me here</p>
  </bottomRight>

  var displayStyle = 'none';
  setTimeout(() => displayStyle = 'flex', 1.5 * 1000)

  $ = {
    height: '100vh',
    width: '100vw',
    color: 'white',
    background: '#66308a',
    padding: 20,
    position: 'absolute',
    overflow: 'hidden',
  }

  $center = {
    display: displayStyle,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100vw',
    height: '100vh',
  }

  $bottomRight = {
    display: displayStyle,
    position: 'fixed',
    bottom: 0,
    right: '20px',
    justifyContent: 'flex-end',
  }

  $h1 = {
    position: 'absolute'
  }

  $p = {
    verticalAlign: 'bottom',
    textAlign: 'right',
  }
}
