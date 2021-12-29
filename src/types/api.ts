export type LogoProps = {
  data: {
    attributes: {
      alternativeText: string
      url: string
    }
  }
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    url: string
    label: string
  }
  image: LogoProps
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
}
