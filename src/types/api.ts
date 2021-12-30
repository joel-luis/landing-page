import SectionAgenda from 'components/SectionAgenda'

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

export type Modules = {
  title: string
  subtitle: string
  description: string
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

export type SectionConceptsProps = {
  title: string
  concepts: {
    title: string
  }[]
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
}
