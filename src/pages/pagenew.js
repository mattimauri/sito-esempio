import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PageNew = () => (
  <Layout>
    <h1>Questa è la nostra nuova page</h1>
    <p>Welcome to page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default PageNew
