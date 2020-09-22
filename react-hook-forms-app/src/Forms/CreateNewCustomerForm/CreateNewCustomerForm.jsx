import React from 'react'
import { useForm } from 'react-hook-form';


const CreateNewCustomerForm = () => {

    const { register, handleSubmit, watch, formState } = useForm({
        mode: 'onChange'
    });

    const [formSubmissionData, setFormSubmissionData] = React.useState({})
    const onSubmit = (data) => setFormSubmissionData(data)    

    return  (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select name="customer-type" defaultValue="" ref={register}>
                    <option value="" disabled >Select Customer</option>
                    <option value="private">Private</option>
                    <option value="public">Public</option>
                    <option value="individual">Individual</option>
                </select>

                <label>
                    Customer Name
                    <input name="customer-name" defaultValue="" ref={register({ required: true })}/>
                </label>
                {
                    watch('customer-type') === 'private' && (
                        <label>
                            Private Only Field
                            <input name="private-only" defaultValue="" ref={register({ required: true })}/>
                        </label>
                    ) 
                }
                {
                    watch('customer-type') === 'public' && (
                        <label>
                            Public Only Field
                            <input name="public-only" defaultValue="" ref={register({ required: true })}/>
                        </label>
                    ) 
                }
                {
                    watch('customer-type') === 'individual' && (
                        <label>
                            Individual Only Field
                            <input name="individual-only" defaultValue="" ref={register({ required: true })}/>
                        </label>
                    ) 
                }
                <button type="submit" disabled={!formState.isValid}>Submit Form????</button>
            </form>
            <div>
                <ul>
                {
                    Object.entries(formSubmissionData).map(([key, val]) => (
                        <li key={key}>
                            <b>{key}</b>: {val}
                        </li>
                    ))
                }
                </ul>
            </div>
        </>
    )
}

export default CreateNewCustomerForm