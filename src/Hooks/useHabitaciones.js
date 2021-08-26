const { graphql, useStaticQuery } = require("gatsby")
const UseHabitaciones = () => {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          id
          titulo
          contenido
          slug
          imagen {
            gatsbyImageData(
              layout: FULL_WIDTH
              width: 100
              placeholder: BLURRED
            )
          }
        }
      }
    }
  `)
  return informacion.allDatoCmsHabitacion.nodes.map((habitacion)=>(
    {   id:habitacion.id,
        contenido: habitacion.contenido,
        imagen: habitacion.imagen,
        slug: habitacion.slug,
        titulo: habitacion.titulo,
    }
))
    

}
export default UseHabitaciones

