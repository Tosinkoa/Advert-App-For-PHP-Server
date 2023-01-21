import { useField } from "formik"

export default function MyInput({ label, type, labelClassName, ...props }) {
  const [field, meta] = useField(props)
  return (
    <>
      <label className={`${labelClassName ? labelClassName : "mylabel"}`}>{label}</label>
      <input type={type} {...field} {...props} />

      {meta.touched && meta.error ? <div className="text-primary-600">{meta.error}</div> : ""}
    </>
  )
}
