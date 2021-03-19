import { graphql } from "gatsby"
import React, { useEffect } from "react"
import PinnableItemConnection, {
  PinnableItemConnectionProps,
<<<<<<< HEAD
} from "../components/pinnableItemConnection"
import User, { UserProps } from "../components/user"
=======
} from "../components/PinnableItemConnection"
import User, { UserProps } from "../components/User"
>>>>>>> f74b74906b3cdbb009924899700e77dd22acdb0c

interface ViewerProps extends UserProps {
  pinnedItems: PinnableItemConnectionProps
}

interface IndexPageProps {
  data: {
    github: {
      viewer: ViewerProps
    }
  }
}

const IndexPage = ({
  data: {
    github: { viewer },
  },
<<<<<<< HEAD
}: IndexPageProps) => {
  useEffect(() => {
    document.title = viewer.name
      ? `${viewer.login} (${viewer.name})`
      : viewer.login
  }, [])

  return (
    <main>
      <div className="container-xl px-3 px-md-4 px-lg-5">
        <div className="gutter-condensed gutter-lg flex-column flex-md-row d-flex">
          <User
            avatarUrl={viewer.avatarUrl}
            bio={viewer.bio}
            login={viewer.login}
            name={viewer.name}
            url={viewer.url}
          />
          <PinnableItemConnection nodes={viewer.pinnedItems.nodes} />
        </div>
=======
}: IndexPageProps) => (
  <main>
    <title>
      {viewer.name ? `${viewer.login} (${viewer.name})` : viewer.login}
    </title>
    <div className="container-xl px-3 px-md-4 px-lg-5">
      <div className="gutter-condensed gutter-lg flex-column flex-md-row d-flex">
        <User
          avatarUrl={viewer.avatarUrl}
          bio={viewer.bio}
          login={viewer.login}
          name={viewer.name}
          url={viewer.url}
        />
        <PinnableItemConnection nodes={viewer.pinnedItems.nodes} />
>>>>>>> f74b74906b3cdbb009924899700e77dd22acdb0c
      </div>
    </div>
  </main>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    github {
      viewer {
<<<<<<< HEAD
        pinnedItems(first: 6) {
=======
        pinnedItems(first: 6, types: REPOSITORY) {
>>>>>>> f74b74906b3cdbb009924899700e77dd22acdb0c
          ...PinnableItemConnectionFragment
        }
        ...UserFragment
      }
    }
  }
`
