import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./Image.module.scss"
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => 
      <div className={styles.image__container}>
        <Img className={`${styles.image} ${styles.body__image}`} fluid={data.placeholderImage.childImageSharp.fluid} />
        <caption className="image__caption">Don't modify this caption's className</caption>
      </div>
    }
  />
)
export default Image
