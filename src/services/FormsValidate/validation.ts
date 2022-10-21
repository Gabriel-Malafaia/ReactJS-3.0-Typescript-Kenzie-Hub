import * as yup from "yup";

export const loginValidate = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email Obrigatório"),
  password: yup.string().required("Senha Obrigatória"),
});

export const registerValidate = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido")
    .required("Email Obrigatório")
    .max(64, "Deve ter no máximo 64 letras."),
  password: yup
    .string()
    .required("Senha Obrigatória")
    .matches(
      /^(?=.*[A-Z])(?=.*[-_!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,20}$/,
      "Senha inválida. Mínimo: 6 Letras, Máximo: 20 Letras, 1 Letra maíuscula e minúscula, 1 Número e 1 Símbolo (!#@$%&)"
    ),
  confirmPassword: yup
    .string()
    .required("Senha Obrigatória")
    .oneOf([yup.ref("password"), null], "Deve ser igual à senha"),
  name: yup
    .string()
    .required("Nome Obrigatório")
    .max(16, "Deve ter no máximo 16 letras."),
  contact: yup
    .string()
    .required("Contato Obrigatório")
    .max(64, "Deve ter no máximo 64 letras."),
  course_module: yup.string().required("Módulo Obrigatório"),
  bio: yup
    .string()
    .required("Biografia Obrigatória")
    .max(64, "Deve ter no máximo 64 letras."),
});

export const modalCreateValidate = yup.object().shape({
  title: yup
    .string()
    .required("Nome Obrigatório")
    .max(24, "Nome muito grande."),
  status: yup.string().required("Nível Obrigatório"),
});
