export default class Router {

  static route(search, pathname) {

    let s = search.substr(1) // remove leading /
    let p = pathname.substr(1) // remove leading ?

    switch (s || p) {
      case 'lucid':
        const lucidWireframes = "http://i.imgur.com/hJmweFb.jpg"
        return lucidWireframes
        break;
      default:
        return undefined
    }

  }

}
