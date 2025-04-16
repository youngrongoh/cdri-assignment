import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type SlotMap = Record<string, ReactNode>;
const slotContext = createContext<[SlotMap, Dispatch<SetStateAction<SlotMap>>]>(
  [{}, () => ({})],
);
const SlotProvider = ({ children }: { children: ReactNode }) => {
  const [slots, setSlots] = useState<SlotMap>({});
  return (
    <slotContext.Provider value={[slots, setSlots]}>
      {children}
    </slotContext.Provider>
  );
};
const useSlot = (name: keyof SlotMap) => {
  const [slots, setSlots] = useContext(slotContext);
  const Slot = useMemo(() => slots[name], [slots, name]);
  const addSlot = useCallback(
    (slot: ReactNode) => {
      setSlots((prev) => ({ ...prev, [name]: slot }));
    },
    [setSlots, name],
  );

  return {
    Slot,
    addSlot,
  };
};

export { SlotProvider, useSlot };
