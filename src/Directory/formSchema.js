import * as yup from "yup";

const formSchema = yup.object().shape({
  customerName: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  pizzaSize: yup
    .string()
    .oneOf(
      ["small", "medium", "large", "extra large"],
      "Pizza size is required"
    ),
  pepperoni: yup.boolean(),
  cheese: yup.boolean(),
  sausage: yup.boolean(),
  bacon: yup.boolean(),
  pineapple: yup.boolean(),
  onion: yup.boolean(),
  olives: yup.boolean(),
  other: yup.string().trim(),
});

export default formSchema;
