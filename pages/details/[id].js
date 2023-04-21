/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import EquipmentDetailsHooks from "../../components/hooks/EquipmentDetailsHooks";
import DisplayEquipmentDetails from "../../components/displayEquipmentDetails/DisplayEquipmentDetails";

export default function Details() {
  const { radioButtonSelection, getEquipmentSelectedSpecs } =
    EquipmentDetailsHooks();
  const router = useRouter();

  const id = router.query.id;


  if (!id) return null;

  let equipmentSelectedSpecs = getEquipmentSelectedSpecs(
    id,
    radioButtonSelection
  );

  return (
    <DisplayEquipmentDetails
      specsOfEquipmentSelected={equipmentSelectedSpecs}
    />
  );
}
