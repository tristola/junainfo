import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Liputuspäivät" />
    <div>
      <h2>Helmikuu</h2>
      <ul>
        <li>5.2. J.L. Runebergin päivä</li>
        <li>28.2. Kalevalan päivä, suomalaisen kulttuurin päivä</li>
      </ul>
      <h2>Maaliskuu</h2>
      <ul>
        <li>19.3. Minna Canthin päivä, tasa-arvon päivä</li>
      </ul>
      <h2>Huhtikuu</h2>
      <ul>
        <li>9.4. Mikael Agricolan päivä, suomen kielen päivä</li>
        <li>27.4. Kansallinen veteraanipäivä</li>
      </ul>
      <h2>Toukokuu</h2>
      <ul>
        <li>1.5. Vappu, suomalaisen työn päivä</li>
        <li>9.5. Eurooppa-päivä</li>
        <li>10.5. Äitienpäivä</li>
        <li>12.5. J.V. Snellmanin päivä, suomalaisuuden päivä</li>
        <li>17.5. Kaatuneitten muistopäivä</li>
      </ul>
      <h2>Kesäkuu</h2>
      <ul>
        <li>4.6. Puolustusvoimain lippujuhlan päivä</li>
        <li>20.6. Juhannus, Suomen lipun päivä</li>
      </ul>
      <h2>Heinäkuu</h2>
      <ul>
        <li>6.7. Eino Leinon päivä, runon ja suven päivä</li>
      </ul>
      <h2>Lokakuu</h2>
      <ul>
        <li>10.10. Aleksis Kiven päivä, suomalaisen kirjallisuuden päivä</li>
        <li>24.10. YK:n päivä</li>
      </ul>
      <h2>Marraskuu</h2>
      <ul>
        <li>6.11. Ruotsalaisuuden päivä, Kustaa Aadolfin päivä</li>
        <li>8.11. Isänpäivä</li>
        <li>20.11. Lapsen oikeuksien päivä</li>
      </ul>
      <h2>Joulukuu</h2>
      <ul>
        <li>6.12. Itsenäisyyspäivä</li>
        <li>8.12. Jean Sibeliuksen päivä, suomalaisen musiikin päivä</li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
