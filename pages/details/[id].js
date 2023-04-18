/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import GuitarHooks from "../../components/hooks/GuitarHooks";
import DisplayEquipmentDetails from "../../components/displayEquipmentDetails/DisplayEquipmentDetails";

export default function Details() {
  const { getGuitarDetails, getAmpDetails, radioButtonSelection } =
    GuitarHooks();

  const router = useRouter();

  const { id } = router.query;

  if (!id) return null;

  let specsOfEquipmentSelected = getGuitarDetails({ id });

  if (radioButtonSelection === "amps") {
    specsOfEquipmentSelected = getAmpDetails({ id });
  }

  return (
    <DisplayEquipmentDetails
      specsOfEquipmentSelected={specsOfEquipmentSelected}
    />
  );
}
