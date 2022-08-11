import {useEffect, useState} from "react";

export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

export const cleanObject = (object?: { [key: string]: unknown }) => {
  if (!object) {
    return {};
  }
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    let timeout = setTimeout(() => setDebounceValue(value), delay)
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debounceValue
}

export const useMount = (callBack: () => void) => {
  useEffect(() => {
    callBack()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
