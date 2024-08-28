import { useState } from "react";

const useDisclosure = () => {
  const [state, setState] = useState<Boolean>(false);

  const onOpen = (): void => {
    setState(true);
  };
  const onClose = (): void => {
    setState(false);
  };

  const onToggle = (): void => {
    setState((prev) => !prev);
  };

  return { onOpen, onClose, onToggle, isOpen: state };
};

export default useDisclosure;
