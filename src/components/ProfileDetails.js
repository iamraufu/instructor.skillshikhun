import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import editImage from '../images/edit.svg'

const ProfileDetails = ({ instructor }) => {

    const [show, setShow] = useState('block');
    const [hide, setHide] = useState('none');

    const { register, handleSubmit } = useForm();
    const onSubmit = data => updateInfo(data);

    const updateInfo = data => {
        console.log(data);
        fetch(`https://api-skillshikhun.herokuapp.com/instructor/${instructor._id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                if (res.status === true) {
                    setShow('block');
                    setHide('none');
                    Swal.fire({
                        icon: 'success',
                        title: 'Updated!',
                        text: `${res.message}`,
                    })
                }
                else {
                    setShow('none');
                    setHide('block');
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: `${res.message}`,
                    })
                }
            })
    }

    const editHandler = () => {
        if (hide === 'none') {
            setHide('block');
            setShow('none');
        }
        else {
            setHide('none');
            setShow('block');
        }
    }

    return (
        <section className='p-3'>
            <div className="d-flex justify-content-between align-items-center">
                <h2 style={{ color: '#12348d' }} className='fs-5 fw-bold'>ইন্সট্রাক্টর বিস্তারিত</h2>
                {instructor.email && <button onClick={() => editHandler()} className='btn btn-sm'><img className='img-fluid' width={30} src={editImage} alt="edit" /> এডিট</button>}
            </div>

            <div id='default-focused' className='default-focused col-sm-2'></div>
            <div className='focused'></div>

            {
                instructor.email ?
                    <div style={{ display: show }} className="">
                        <div className="row mt-3 p-2">
                            <div className="col-lg-3 p-2">
                                <h2 className='fs-6 text-muted'>প্রোফাইল ছবি</h2>
                                <img className='img-fluid' width={150} src={instructor.image} alt={instructor.first_name} />
                            </div>

                            <div className="col-lg-3 p-2">
                                <h2 className='fs-6 text-muted'>নাম</h2>
                                <h3 className='fs-6 fw-bold'>{instructor.first_name} {instructor.last_name}</h3>
                            </div>

                            <div className="col-lg-4 p-2">
                                <h2 className='fs-6 text-muted'>ই-মেইল</h2>
                                <p className='fs-6 fw-bold'>{instructor.email}</p>
                            </div>

                            <div className="col-lg-2 p-2">
                                <h2 className='fs-6 text-muted'>ফোন</h2>
                                <h3 className='fs-6 fw-bold'>{instructor.mobile}</h3>
                            </div>

                            <div className="col-lg-6 p-2">
                                <h2 className='fs-6 text-muted'>ঠিকানা</h2>
                                <p style={{ textAlign: 'justify' }} className='fs-6 fw-bold'>{instructor.address}</p>
                            </div>

                            <div className="col-lg-6 p-2">
                                <h2 className='fs-6 text-muted'>বিস্তারিত</h2>
                                <p style={{ textAlign: 'justify' }} className='fs-6 fw-bold'>{instructor.details}</p>
                            </div>

                            {/* <div className="col-lg-3 p-2"></div> */}

                            <div className="col-lg-6 p-2">
                                <h2 className='fs-6 text-muted'>ফেসবুক</h2>
                                <a href={instructor.social_profile.facebook} target="_blank" rel="noopener noreferrer">{instructor.social_profile.facebook}</a>
                            </div>

                            <div className="col-lg-6 p-2">
                                <h2 className='fs-6 text-muted'>লিংকড ইন</h2>
                                <a href={instructor.social_profile.linkedin} target="_blank" rel="noopener noreferrer">{instructor.social_profile.linkedin}</a>
                            </div>

                            <div className="col-lg-6 p-2">
                                <h2 className='fs-6 text-muted'>ইউটুব</h2>
                                <a href={instructor.social_profile.youtube} target="_blank" rel="noopener noreferrer">{instructor.social_profile.youtube}</a>
                            </div>

                            <div className="col-lg-6 p-2">
                                <h2 className='fs-6 text-muted'>টুইটার</h2>
                                <a href={instructor.social_profile.twitter} target="_blank" rel="noopener noreferrer">{instructor.social_profile.twitter}</a>
                            </div>
                        </div>
                    </div> :
                    <div className="d-flex mt-5">
                        <div className="spinner-border me-2" role="status"></div>
                        <span>লোড হচ্ছে...</span>
                    </div>
            }

            {
                instructor.email &&
                <div style={{ display: hide }} className="">
                    <form id='demoInfo-form' onSubmit={handleSubmit(onSubmit)}>
                        <div className="row mt-5">
                            <div className="col-lg-4 mb-3">
                                <label className='mb-2 text-muted'>প্রথম নাম</label>
                                <br />
                                <input type="text" className='custom-modify-form' defaultValue={instructor.first_name} style={{ padding: '0' }} {...register("first_name", { required: true })} />
                            </div>

                            <div className="col-lg-4 mb-3">
                                <label className='mb-2 text-muted'>শেষ নাম</label>
                                <br />
                                <input type="text" className='custom-modify-form' defaultValue={instructor.last_name} style={{ padding: '0' }} {...register("last_name", { required: true })} />
                            </div>

                            <div className="col-lg-4 mb-3">
                                <label className='mb-2 text-muted'>ই-মেইল</label>
                                <br />
                                <input type="email" className='custom-modify-form' defaultValue={instructor.email} style={{ padding: '0' }} {...register("email", { required: true })} />
                            </div>

                            <div className="col-lg-4 mb-3">
                                <label className='mb-2 text-muted'>ফোন</label>
                                <br />
                                <input type="number" className='custom-modify-form' defaultValue={instructor.mobile} style={{ padding: '0' }} {...register("mobile", { required: true })} />
                            </div>

                            <div className="col-lg-4 mb-3">
                                <label className='mb-2 text-muted'>ঠিকানা</label>
                                <br />
                                <input type="text" className='custom-modify-form' defaultValue={instructor.address} style={{ padding: '0' }} {...register("address", { required: true })} />
                            </div>

                            <div className="col-lg-4 mb-3">
                                <label className='mb-2 text-muted'>প্রোফাইল ছবি</label>
                                <br />
                                <input type="text" className='custom-modify-form' defaultValue={instructor.image} style={{ padding: '0' }} {...register("image", { required: true })} />
                            </div>

                            <div className="col-lg-12 mb-3">
                                <label className='mb-2 text-muted'>বিস্তারিত</label>
                                <br />
                                <textarea rows='9' cols='60' className='custom-modify-form' defaultValue={instructor.details} style={{ padding: '0', textAlign: 'justify' }} {...register("details", { required: true })} />
                            </div>

                            <h2 style={{ color: '#12348d' }} className='fs-5 fw-bold'>সোশ্যাল প্রোফাইল</h2>

                            <div className="col-lg-3 mb-3">
                                <label className='mb-2 text-muted'>ফেসবুক</label>
                                <br />
                                <input className='custom-modify-form' type='text' defaultValue={instructor.social_profile.facebook} style={{ padding: '0' }} {...register("social_profile.facebook", { required: true })} />
                            </div>

                            <div className="col-lg-3 mb-3">
                                <label className='mb-2 text-muted'>লিংকড ইন</label>
                                <br />
                                <input className='custom-modify-form' type='text' defaultValue={instructor.social_profile.linkedin} style={{ padding: '0' }} {...register("social_profile.linkedin", { required: true })} />
                            </div>

                            <div className="col-lg-3 mb-3">
                                <label className='mb-2 text-muted'>ইউটুব</label>
                                <br />
                                <input className='custom-modify-form' type='text' defaultValue={instructor.social_profile.youtube} style={{ padding: '0' }} {...register("social_profile.youtube", { required: true })} />
                            </div>

                            <div className="col-lg-3 mb-3">
                                <label className='mb-2 text-muted'>টুইটার</label>
                                <br />
                                <input className='custom-modify-form' type='text' defaultValue={instructor.social_profile.twitter} style={{ padding: '0' }} {...register("social_profile.twitter", { required: true })} />
                            </div>

                            <div className="col-lg-3 mb-3">
                                <label className='mb-2 text-muted'>পাসওয়ার্ড</label>
                                <br />
                                <input className='custom-modify-form' type='password' defaultValue={instructor.password} style={{ padding: '0' }} {...register("password", { required: true })} />
                            </div>

                        </div>

                        <button className='btn btn-secondary p-2'>আপডেট করুন</button>
                    </form>
                </div>
            }

        </section>
    );
};

export default ProfileDetails;