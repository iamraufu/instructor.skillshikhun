import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const converter = require('number-to-words');

const CourseModule = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => courseModuleHandler(data);

    const [courseModule, setCourseModule] = useState({});
    const [courseModules, setCourseModules] = useState([]);

    useEffect(() => {
        fetch(`https://api-skillshikhun.herokuapp.com/courseModules`)
            .then(res => res.json())
            .then(data => {
                setCourseModules(data)
            })
    }, [])

    useEffect(() => {
        fetch(`https://api-skillshikhun.herokuapp.com/courseModules/Digital Marketing`)
            .then(res => res.json())
            .then(data => setCourseModule(data))
    }, [])

    const courseModuleHandler = data => {

        const courseModuleDetails = {
            "name": data.name,
            "outline": [
                {
                    "id": converter.toWords(data.id),
                    "title": data.title,
                    "description": data.description,
                    "video": [{
                        "subtitle": data.subtitle,
                        "videoId": data.videoId
                    }]
                }
            ]
        }

        fetch('https://api-skillshikhun.herokuapp.com/addCourseModules', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(courseModuleDetails)
        })
            .then(res => res.json())
            .then(data => {
                document.getElementById('course_module_form').reset()
                data.status === true ?
                    Swal.fire({
                        icon: 'success',
                        title: `${data.message}`
                    }) :
                    Swal.fire({
                        icon: 'error',
                        title: `${data.message}`
                    })
            })
    }

    const moduleHandler = () => {
        document.getElementById('module_controller').style.display = 'block';
    }

    const classHandler = () => {
        document.getElementById('class_controller').style.display = 'block';
    }

    return (
        <section className='p-3'>
            <h2 style={{ color: '#12348d' }} className='fs-5 fw-bold'>কোর্স মডিউল</h2>
            <div id='default-focused' className='default-focused col-sm-2'></div>
            <div className='focused'></div>

            <div className="row">
                <div className="mt-5 col-sm-8">
                    <form id='course_module_form' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3 col-sm-4">
                            <label htmlFor="name">কোর্সের নাম</label>
                            <input className='form-control' id='name' placeholder='Digital Marketing' {...register("name", { required: true })} />
                            {errors.name && <span className='text-danger fw-bold'>*কোর্সের নাম লিখুন</span>}
                        </div>

                        <h2 className='fs-5 fw-bold mt-5'>মডিউল</h2>
                        <button onClick={() => moduleHandler()} className='btn btn-primary'>+ একটি মডিউল তৈরী করুন</button>

                        {/* Module Controller */}
                        <div style={{ display: 'none', paddingLeft: '30px' }} id='module_controller'>
                            <div className="form-group my-3 col-sm-4">
                                <label htmlFor="id">মডিউল নাম্বার</label>
                                <input type="number" className="form-control" placeholder='উদাহরণ স্বরূপ: 1' id='id' {...register("id", { required: true })} />
                                {errors.id && <span className='text-danger fw-bold'>*নাম্বার দিন</span>}
                            </div>

                            <div className="form-group my-3 col-sm-4">
                                <label htmlFor="title">মডিউল টাইটেল</label>
                                <input type="text" className="form-control" placeholder='উদাহরণ স্বরূপ: ইন্ট্রডাকশন (Introduction)' id='title' {...register("title", { required: true })} />
                                {errors.title && <span className='text-danger fw-bold'>*টাইটেল দিন</span>}
                            </div>

                            <div className="form-group my-3 col-sm-4">
                                <label htmlFor="description">মডিউল বর্ণনা</label>
                                <textarea type="text" className="form-control" placeholder='উদাহরণ স্বরূপ: এই ক্লাসে HTML5 এর ... শিখবো' id='description' {...register("description", { required: true })} />
                                {errors.description && <span className='text-danger fw-bold'>*বর্ণনা দিন</span>}
                            </div>

                            <button onClick={() => classHandler()} className='btn btn-secondary'>+ একটি ক্লাস যোগ করুন</button>

                            {/* Class Controller */}
                            <div style={{ display: 'none', paddingLeft: '60px' }} id="class_controller">
                                <div className="form-group my-3 col-sm-4">
                                    <label htmlFor="subtitle">ক্লাস টাইটেল</label>
                                    <input type="text" className="form-control" placeholder='উদাহরণ স্বরূপ: ক্লাস ১ - ইন্ট্রডাকশন (Introduction)' id='subtitle' {...register("subtitle", { required: true })} />
                                    {errors.subtitle && <span className='text-danger fw-bold'>*টাইটেল দিন</span>}
                                </div>

                                <div className="form-group my-3 col-sm-4">
                                    <label htmlFor="videoId">ভিডিও আইডি</label>
                                    <input type="text" className="form-control" placeholder='উদাহরণ স্বরূপ: L7BR8G0MmaA' id='videoId' {...register("videoId", { required: true })} />
                                    {errors.videoId && <span className='text-danger fw-bold'>*ভিডিও আইডি দিন</span>}
                                </div>

                            </div>
                        </div>

                        <br />
                        <input type="submit" className='btn btn-success mt-5' />
                    </form>

                </div>
                <div className="mt-5 col-sm-4">
                    <h2 className='fs-5 fw-bold'>{courseModule.name}</h2>
                    {
                        courseModules?.outline?.map((item, index) =>
                            <div style={{ border: '1px solid lightgrey', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 5px 15px #c4c4c44d' }} className="accordion-item mx-2 my-3 p-3" key={item.id}>
                                <h2 className="accordion-header" id={`flush-heading${item.id}`}>
                                    <button style={{ backgroundColor: '#ca4570', color: 'white', borderRadius: '15px', fontSize: '13px', fontWeight: '500', textAlign: 'justify' }} className="accordion-button collapsed course-video-title_hover p-2" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.id}`} aria-expanded="false" aria-controls={`flush-collapse${item.id}`}>
                                        Module {index + 1}: {item?.title}
                                    </button>
                                </h2>

                                <div id={`flush-collapse${item.id}`} className="accordion-collapse collapse p-2" aria-labelledby={`flush-heading${item.id}`} data-bs-parent="#accordionFlushExample">
                                    {item?.description}
                                    {
                                        item.video.map((item, index) =>
                                            <div key={index} style={{ backgroundColor: '#f1f1f1', marginTop: '-0.5rem', borderRadius: '15px', cursor: 'pointer', fontSize: '12px', textAlign: 'justify' }} className="accordion-body course-video-item_hover mt-2 p-2">
                                                {item.subtitle}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default CourseModule;