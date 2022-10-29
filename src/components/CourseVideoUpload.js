import React, { useState } from 'react';
import { useForm } from "react-hook-form";
// import AWS from 'aws-sdk'
// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import Swal from 'sweetalert2';

// const S3_BUCKET = 'ss-class-recordings';
// const REGION = 'ap-south-1';
// const s3Client = new S3Client({
//     region: REGION, credentials: {
//         accessKeyId: 'AKIAY4R4OIR4SPX73B4O',
//         secretAccessKey: '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'
//     }
// });

// AWS.config.update({
//     accessKeyId: 'AKIAY4R4OIR4SPX73B4O',
//     secretAccessKey: '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'
// })

const CourseVideoUpload = () => {

    // const [selectedFile, setSelectedFile] = useState(null);
    // const [disabled, setDisabled] = useState(true)
    const [category, setCategory] = useState('web-development');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => handleUpload(data)

    const handleUpload = data => {
        
        const videoDetails = {
            title: data.title,
            videoId: data.videoId
        }

        fetch(`https://api-skillshikhun.herokuapp.com/${category}-live-class-video`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(videoDetails)
        })
        .then(res => res.json())
        .then(data => {
            document.getElementById('video_upload_form').reset()
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

    // const handleFileInput = (e) => {
    //     setSelectedFile(e.target.files[0]);
    //     setDisabled(false)
    // }

    // const uploadFile = async (file) => {
    //     setDisabled(true)
    //     document.getElementById('video_upload_form').style.display = 'none';
    //     document.getElementById('video_upload_spinner').style.display = 'block';
    //     const params = {
    //         ACL: 'public-read',
    //         Body: file,
    //         Bucket: S3_BUCKET,
    //         Key: `${category}/${file.name}`
    //     };

    //     try {
    //         const data = await s3Client.send(new PutObjectCommand(params))
    //         console.log(data.$metadata.httpStatusCode);
    //         Swal.fire({
    //             icon: 'success',
    //             title: 'সম্পূর্ণ হয়েছে',
    //             text: 'আপনার ভিডিও আপলোড সম্পূর্ণ হয়েছে, আপনি চাইলে এখন অন্য কাজ করতে পারেন'
    //         })
    //         document.getElementById('video_upload_form').style.display = 'block';
    //         document.getElementById('video_upload_spinner').style.display = 'none';
    //         document.getElementById('video_upload_form').value = null;
    //     } catch (err) {
    //         console.log("Error", err);
    //     }
    // }
    // addLiveClassVideo

    return (
        <section className='p-3'>
            <h2 style={{ color: '#12348d' }} className='fs-5 fw-bold'>ক্লাস রেকর্ডিং আপলোড</h2>

            <div id='default-focused' className='default-focused col-sm-2'></div>
            <div className='focused'></div>

            <div className="mt-5">
                <h2 className='fs-5'>কোন কোর্সের ভিডিও আপলোড করতে চাচ্ছেন ?</h2>
                <div className="col-sm-2">
                    <select id='category' onChangeCapture={(e) => setCategory(document.getElementById('category').querySelector('option:checked').value)} className='form-select form-select-sm' aria-label=".form-select-sm example">
                        {/* <option value="" defaultValue disabled>ক্যাটাগরি বাছাই করুন</option> */}
                        <option value="web-development">Web Development</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="graphics-design">Graphics Design</option>
                        <option value="video-editing">Video Editing</option>
                        <option value="shobar-jnno-freelancing">Shobar Jnno Freelancing</option>
                    </select>
                </div>
            </div>

            <form id='video_upload_form' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group my-3 col-sm-4">
                    <label htmlFor="title">ক্লাস টাইটেল</label>
                    <textarea type="text" className="form-control" placeholder='উদাহরণ স্বরূপ: ক্লাস ১ - ইন্ট্রডাকশন (Introduction)' id='title' {...register("title", { required: true })} />
                    {errors.title && <span className='text-danger fw-bold'>*টাইটেল দিন</span>}
                </div>

                <div className="form-group my-3 col-sm-4">
                    <label htmlFor="videoId">ভিডিও আইডি</label>
                    <input type="text" className="form-control" placeholder='উদাহরণ স্বরূপ: L7BR8G0MmaA' id='videoId' {...register("videoId", { required: true })} />
                    {errors.videoId && <span className='text-danger fw-bold'>*ভিডিও আইডি দিন</span>}
                </div>

                <input type="submit" className='btn btn-success px-5 py-2' value="জমা" />
            </form>

            {/* <div className="my-5 d-flex justify-content-center">
                <div id='video_upload_form' className="form-group">
                    <label htmlFor="video_upload">ক্লাসের ভিডিও ব্রাউস করে আপলোড করুন অথবা ড্র্যাগ করে ফেলুন</label>
                    <div className="">
                        <input type="file" className='form-control-file btn btn-outline-dark img-fluid mt-2 p-5' id='video_upload' onChange={handleFileInput} />
                    </div>
                    <small className='text-danger'>ভিডিও আপলোড এর আগে ফাইলের নাম রিনেম করে বড় হাতের <b className='fs-4'>C</b> দিয়ে শুরু <br /> করতে হবে <span className='text-muted'>উদাহরণ স্বরূপ: Class 1 - HTML Tutorial</span></small>
                    <br />
                    <button className='btn btn-primary mt-3' onClick={() => uploadFile(selectedFile)} id='upload_btn' disabled={disabled}>আপলোড</button>
                </div>

                <div style={{ display: 'none' }} id='video_upload_spinner'>
                    <div className="d-flex justify-content-center mt-5">
                        <div className="spinner-border me-2" role="status"></div>
                        <p className='mt-1 text-danger fw-bold'>আপনার ভিডিও আপলোড হচ্ছে; দয়া করে ভিডিও আপলোড হওয়া পর্যন্ত ব্রউজারটি বন্ধ না করে অপেক্ষা করুন</p>
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default CourseVideoUpload;