export type ImageProps = {
  data: {
    attributes: {
      alternativeText: string
      url: string
    }
  }
}

export type TechIcon = {
  title: string
  icon: {
    data: {
      attributes: {
        url: string
      }
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
  image: ImageProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
}
