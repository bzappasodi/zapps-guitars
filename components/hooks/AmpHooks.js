import { useState } from "react";

function AmpHooks() {
  const [loading, setLoading] = useState(false);

  return {
    loading,
    setLoading,
  };
}

export default AmpHooks;
