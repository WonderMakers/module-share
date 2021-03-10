import confing from './config'

export class Share {
  constructor (options, isDev) {
    this.isDev = isDev
    this.options = options
  }

  open (social, params = {}) {
    const data = Share.getData(params)
    const createLink = confing.socials[social]
    if (createLink) {
      const link = createLink(data)
      Share.popup(link)
    }
  }

  static getData (params) {
    const metaDescription = document.querySelector('meta[name="description"]')
    const metaImage = document.querySelector('meta[name="og:image"]')
    const defaultDescription = metaDescription ? metaDescription.content : ''
    const defaultImage = metaImage ? metaImage.content : ''

    const url = encodeURIComponent(params.url || location.href)
    const title = encodeURIComponent(typeof params.title === 'string' ? params.title : document.title)
    const description = encodeURIComponent(typeof params.description === 'string' ? params.description : defaultDescription)
    const image = encodeURIComponent(typeof params.image === 'string' ? params.image : defaultImage)

    return { url, title, description, image }
  }

  static popup (link) {
    const windowParams = 'width=630&height=340&personalbar=0&toolbar=no&scrollbars=no&resizable=yes&location=no'
    const left = Math.floor((window.screen.width / 2) - (630 / 2))
    const right = Math.floor(window.screen.height / 5)
    if (link) {
      window.open(link, 'share_dialog', `${windowParams.replace(/&/g, ',')},left=${left},top=${right}`)
    }
  }
}
