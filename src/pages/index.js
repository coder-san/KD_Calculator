import React from "react";
import Layout from "../components/layout";
import KM_Form from '../components/KM_Form';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="KD Calculator" />
    <KM_Form />
  </Layout>
)

export default IndexPage
