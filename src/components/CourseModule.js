import React from 'react';
import { useForm } from "react-hook-form";

const CourseModule = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <section className='p-3'>
            <h2 style={{ color: '#12348d' }} className='fs-5 fw-bold'>কোর্স মডিউল</h2>
            <div id='default-focused' className='default-focused col-sm-2'></div>
            <div className='focused'></div>

            <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">

                        <label htmlFor="name">Email address</label>
                        <input {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </div>

                    <input type="submit" />
                </form>
            </div>
        </section>
    );
};

export default CourseModule;