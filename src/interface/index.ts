import { AxiosPromise } from "axios";
import React from "react";
import {
  DeepRequired,
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Api } from "../services/Api/api";

export type iLogged = string | boolean | null;

export interface iFormRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface iFormLogin {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface iChildren {
  children: React.ReactNode;
}

export interface iCreateTech {
  title: string;
  status: string;
}

export interface iContextUser {
  registerUser: (data: iFormRegister) => Promise<void>;
  loginUser: (data: iFormLogin) => Promise<void>;
  logged: iLogged;
  setLogged: React.Dispatch<React.SetStateAction<iLogged>>;
  user?: iApiUserResponse;
  logoutUser: () => void;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  update: boolean;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface iContextModal {
  createTech: (data: iCreateTech) => Promise<void>;
  editOrDeleteTech: (data: iModalEditDelete) => Promise<void>;
  modalCreateIsOpen: boolean;
  setModalCreateIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalEditDeleteIsOpen: boolean;
  setModalEditDeleteIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentCard: React.Dispatch<React.SetStateAction<string>>;
  setCurrentAction: React.Dispatch<React.SetStateAction<string>>;
  setInputName?: React.Dispatch<React.SetStateAction<string>>;
  inputName: boolean | string;
}

export interface iModalAddict {
  actionFuction: (data: any) => Promise<void>;
  titleModal: string;
  inputLabel: string;
  selectLabel: string;
  closeFunction: React.Dispatch<React.SetStateAction<boolean>>;
  typeModal?: string;
}

export interface iRegisterForm {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrorsImpl<DeepRequired<iFormRegister>>;
  handleSubmit: UseFormHandleSubmit<iFormRegister>;
  registerUser: (data: iFormRegister) => Promise<void>;
}

export interface iLoginFormFunction {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrorsImpl<DeepRequired<iFormLogin>>;
  handleSubmit: UseFormHandleSubmit<iFormLogin>;
  loginUser: (data: iFormLogin) => Promise<void>;
}

export interface iModalEditDelete {
  title?: string;
  status?: string;
}

export interface iInputSelectModal {
  labelText: string;
  elementError: any;
  placeholder?: string;
  element: string;
  register: UseFormRegister<FieldValues>;
}

export interface iInputSelect {
  elementErrors?: FieldError | undefined;
  register: UseFormRegister<FieldValues>;
}

export interface iInputWithConfirm {
  labelText: string;
  placeholder: string;
  errors: FieldErrorsImpl<{
    email: string;
    password: string;
    confirmPassword: string;
  }>;
  register: UseFormRegister<iFormLogin>;
}

export interface iTechsUserResponse {
  id?: string;
  title: string;
  status: string;
}

interface iWorksUserResponse {
  title: string;
  description: string;
}

export interface iApiUserResponse {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: iTechsUserResponse[];
  works: iWorksUserResponse[];
  created_at: string;
  updated_at: string;
  avatar_url: null;
}

export const profileApi = (): AxiosPromise<iApiUserResponse> => {
  const userRequired = Api("/profile");
  return userRequired;
};
