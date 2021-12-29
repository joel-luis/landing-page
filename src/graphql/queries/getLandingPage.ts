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

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
    }
  }
`
export default GET_LANDING_PAGE
