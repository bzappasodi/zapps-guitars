import React from "react";
import styles from "../../styles/Details.module.scss";
import Link from "next/link";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";

// display either amps or guitars
const DisplayEquipmentDetails = ({ specsOfEquipmentSelected }) => {
  return (
    <>
      <div className={styles.layout}>
        <div>
          <Image
            src={`/inventory/${specsOfEquipmentSelected.image}`}
            alt={specsOfEquipmentSelected.name}
            width={272}
            height={595}
          />
        </div>
        <div>
          <div className={styles.name}>
            {specsOfEquipmentSelected.year} {specsOfEquipmentSelected.name}
          </div>
          <table>
            <thead></thead>
            <tbody>
              {specsOfEquipmentSelected.specs.map((spec) => (
                <tr key={spec}>
                  <td>
                    <li>{spec}</li>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Link className="mt-4" href="/">
            Back to main page<>&#8594;</>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DisplayEquipmentDetails;
