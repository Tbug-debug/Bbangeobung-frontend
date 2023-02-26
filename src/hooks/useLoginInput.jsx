import { useState, useCallback } from "react";

const useLoginInput = (value, initial, reject, success, Reg, samePw) => {
  const [input, setInput] = useState(value);
  const [alert, setAlert] = useState(initial);
  const [checkReg, setCheckReg] = useState(false);

  const setInputHandler = useCallback(
    (e) => {
      setInput(e.target.value);
      if (!Reg.test(e.target.value)) {
        setAlert(reject);
        setCheckReg(false);
      } else {
        setAlert(success);
        setCheckReg(true);
      }
    },
    [Reg, reject, success]
  );

  const checkSame = (e) => {
    setInput(e.target.value);
    if (e.target.value !== samePw) {
      setAlert(reject);
      setCheckReg(false);
    } else {
      setAlert(success);
      setCheckReg(true);
    }
  };

  return [input, setInputHandler, alert, checkReg, checkSame];
};

export default useLoginInput;
