import { useField } from "formik";

const Radio = ({label, ...props}) => {
    const [field] = useField({...props, type: 'radio'})
    //console.log(field)
    return (
        <div>
            <label>
                <input type='radio' {...field} {...props}/>
                {label}
            </label>
        </div>
    )
}

export default Radio