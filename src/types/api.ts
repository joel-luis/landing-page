export type LogoProps = {
  data: {
    attributes: {
      alternativeText: string
      url: string
    }
  }
}

export type LandingPageProps = {
  logo: LogoProps
}
