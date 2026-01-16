"use client"

import React, { createContext, useContext, useState, ReactNode } from "react";

type ProductInformation = {
  sku: number,
  name: string,
  quantity: number,
  size: string,
}

type FormData = {
  reference_number: number,
  client_first_name: string,
  client_last_name: string,
  client_email: string,
  client_phone_number: string,
  advisor_name: string,
  products: ProductInformation[],
}

type FormContextType = {
  data: FormData;
  updateFormData: (field: keyof FormData, value: any) => void;
  resetFormData: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<FormData>({
    reference_number: 0,
    client_first_name: "",
    client_last_name: "",
    client_email: "",
    client_phone_number: "",
    advisor_name: "",
    products: [],
  });

  const updateFormData = (field: keyof FormData, value: any) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const resetFormData = () => {
    setData({
      reference_number: 0,
      client_first_name: "",
      client_last_name: "",
      client_email: "",
      client_phone_number: "",
      advisor_name: "",
      products: [],
    });
  };

  return (
    <FormContext.Provider value={{ data, updateFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};