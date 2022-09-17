import React, { useState } from 'react';
import AWS from 'aws-sdk'
// eslint-disable-next-line
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import Swal from 'sweetalert2';

const S3_BUCKET = 'ss-class-recordings';
const REGION = 'ap-south-1';
const s3Client = new S3Client({
    region: REGION, credentials: {
        accessKeyId: 'AKIAY4R4OIR4SPX73B4O',
        secretAccessKey: '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'
    }
});

AWS.config.update({
    accessKeyId: 'AKIAY4R4OIR4SPX73B4O',
    secretAccessKey: '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'
})

const CourseVideoUpload = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [disabled, setDisabled] = useState(true)

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
        setDisabled(false)
    }

    const uploadFile = async (file) => {
        setDisabled(true)
        document.getElementById('video_upload_form').style.display = 'none';
        document.getElementById('video_upload_spinner').style.display = 'block';
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };

        try {
            const data = await s3Client.send(new PutObjectCommand(params))
            console.log(data.$metadata.httpStatusCode);
            Swal.fire({
                icon: 'success',
                title: 'সম্পূর্ণ হয়েছে',
                text: 'আপনার ভিডিও আপলোড সম্পূর্ণ হয়েছে, আপনি চাইলে এখন অন্য কাজ করতে পারেন'
            })
            document.getElementById('video_upload_form').style.display = 'block';
            document.getElementById('video_upload_spinner').style.display = 'none';
            document.getElementById('video_upload_form').value = null;
        } catch (err) {
            console.log("Error", err);
        }
    }

    return (
        <section className='p-3'>
            <h2 style={{ color: '#12348d' }} className='fs-5 fw-bold'>ক্লাস রেকর্ডিং আপলোড</h2>

            <div id='default-focused' className='default-focused col-sm-2'></div>
            <div className='focused'></div>

            <div className="my-5 d-flex justify-content-center">
                <div id='video_upload_form' className="form-group">
                    <label htmlFor="video_upload">ক্লাসের ভিডিও ব্রাউস করে আপলোড করুন অথবা ড্র্যাগ করে ফেলুন</label>
                    <div className="">
                        <input type="file" className='form-control-file btn btn-outline-dark img-fluid mt-2 p-5' id='video_upload' onChange={handleFileInput} />
                    </div>
                    <button className='btn btn-primary mt-3' onClick={() => uploadFile(selectedFile)} id='upload_btn' disabled={disabled}>আপলোড</button>
                </div>

                <div style={{ display: 'none' }} id='video_upload_spinner'>
                    <div className="d-flex justify-content-center mt-5">
                        <div className="spinner-border me-2" role="status"></div>
                        <p className='mt-1 text-danger fw-bold'>আপনার ভিডিও আপলোড হচ্ছে; দয়া করে ভিডিও আপলোড হওয়া পর্যন্ত ব্রউজারটি বন্ধ না করে অপেক্ষা করুন</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseVideoUpload;