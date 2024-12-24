'use client';

import {createContext, FC, ReactNode, useEffect, useState, useTransition} from 'react';
import {
  IdenificatorsInputProvider,
  startTracking,
  stopTracking,
  updateTrackValue,
} from '@/src/types/Providers/inputProvider';

export const InputControl = createContext<IdenificatorsInputProvider>({ inputField: {} });

export const InputControlProvider: FC<{ children: ReactNode}> = ({ children }) => {
  const [trackObj, setTracking] = useState<IdenificatorsInputProvider>({
    inputField: {},
  });
  const [, startTransition] = useTransition()

  const startTracking: startTracking = (key) => {
    if (!trackObj.inputField[key]) {
      setTracking((prev) => ({
        ...prev,
        inputField: { ...prev.inputField, [key]: { name: key, value: '' } },
      }));
    }
  };

  const stopTracking: stopTracking = (key) => {
   trackObj.inputField[key];
   setTracking(trackObj)
  };

  const updateTrackValue: updateTrackValue = (key, value) => {
    startTransition(()=>setTracking((prev) => {

      return {
        ...prev,
        inputField: {
          ...prev.inputField,
          [key]: {
            ...prev.inputField[key],
            value, // Обновляем значение
          },
        },
      };

    }))
  };


    useEffect(() => { setTracking((prevState) => ({ ...prevState, trackInstrument: { startTracking, stopTracking, updateTrackValue}, })); }, []);
  return <InputControl.Provider value={trackObj}>{children}</InputControl.Provider>;
};
export default InputControlProvider;
