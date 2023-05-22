// import Head from "next/head";
// import { Container, Row, Col } from "react-bootstrap";
// import guitars from "../../json/guitars.json";
// import Image from "next/image";
// import styles from "../../styles/Details.module.scss";
// import React from "react";
//
// // Dynamically grab all the ids possible
// export async function getStaticPaths() {
//   const paths = guitars.map((guitar) => {
//     return {
//       params: {
//         id: guitar.id.toString(),
//       },
//     };
//   });
//
//   return {
//     paths,
//     fallback: false,
//   };
// }
// export async function getStaticProps(context) {
//   return {
//     props: {
//       data: guitars[context.params.id - 1],
//     },
//   };
// }
//
// // eslint-disable-next-line react/display-name,import/no-anonymous-default-export
// export default ({ data }) => {
//   return (
//     <div>
//       <Head>
//         <title>{(data && data.name) || ""}</title>
//       </Head>
//       <Container>
//         {data && (
//           <>
//             <h1>{data.name}</h1>
//             <Row>
//               <Col xs={4}>
//                 <Image
//                   src={`/inventory/${data.image}`}
//                   width={272}
//                   height={559}
//                   alt={data.name}
//                   className={styles.detailsImage}
//                 />
//               </Col>
//               <Col xs={8}>
//                 {Object.entries(data.specs).map(([key, value]) => (
//                   <Row key={key}>
//                     <Col xs={10}>
//                       <li>{value}</li>
//                     </Col>
//                   </Row>
//                 ))}
//               </Col>
//             </Row>
//           </>
//         )}
//       </Container>
//     </div>
//   );
// };
