import * as Yup from "yup"

// This function validate campaign form inputs
export const validation = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be minimum of two characters")
    .max(40, "Name must be maximum of 40 characters"),
  from_date: Yup.date()
    .typeError(() => "Invalid start date")
    .required("Please enter a start date"),
  to_date: Yup.date()
    .typeError(() => "Invalid end date")
    .required("Please enter an end date"),
  daily_budget: Yup.number("Value must be a number")
    .positive("Number must be positive")
    .required("Daily budget is required")
    .min(1, "Mininum amount is $1")
    .max(100, "Max amount is $100"),
  total_budget: Yup.number("Value must be a number")
    .min(10, "Mininum amount is $10")
    .max(1000, "Max amount is $1000")
    .positive("Number must be positive")
    .required("Total budget is required"),
})
