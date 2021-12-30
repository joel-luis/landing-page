import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  fragment imageData on UploadFileEntityResponse {
    data {
      attributes {
        alternativeText
        url
      }
    }
  }

  fragment logo on LandingPageEntityResponse {
    data {
      attributes {
        logo {
          ...imageData
        }
      }
    }
  }

  fragment header on LandingPageEntityResponse {
    data {
      attributes {
        header {
          title
          description
          button {
            label
            url
          }
          image {
            ...imageData
          }
        }
      }
    }
  }

  fragment sectionAboutProject on LandingPageEntityResponse {
    data {
      attributes {
        sectionAboutProject {
          title
          description
          image {
            ...imageData
          }
        }
      }
    }
  }

  fragment sectionTech on LandingPageEntityResponse {
    data {
      attributes {
        sectionTech {
          title
          techIcons {
            title
            icon {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }

  fragment sectionConcepts on LandingPageEntityResponse {
    data {
      attributes {
        sectionConcepts {
          title
          concepts {
            title
          }
        }
      }
    }
  }

  fragment sectionModules on LandingPageEntityResponse {
    data {
      attributes {
        sectionModules {
          title
          modules {
            title
            subtitle
            description
          }
        }
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
    }
  }
`
export default GET_LANDING_PAGE
