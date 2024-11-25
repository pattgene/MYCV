import React from 'react'
import '../css/Project.css'

function Project() {
    return (
        <div className='project'>
            <h4><span>P</span>roject</h4>
            <ul>
                <li>
                    <h6>May 2024 - Aug 2024</h6>
                    <h5>LIDAR SLAM 3d reconstruction for large scale data</h5>
                    <p>- Created a 3D reconstruction model that generates high-detail views using LiDAR and SLAM, reducing training time.</p>
                    <p>- Segmented large scenes into sub-chunks for independent training with binary masks, improving model performance.</p>
                </li>
                <li>
                    <h6>May 2024 - Aug 2024</h6>
                    <h5>AI Historian Assistant</h5>
                    <p>- Developed a multimodal RAG chatbot that retrieves both image and text data, enhancing educational resources for historians.</p>
                    <p>- Utilized LayoutLMV3 and GPT-4o for image database processing, implementing local embedding and search techniques for effective data retrieval. </p>
                </li>
                <li>
                    <h6>Feb 2024 - Apr 2024</h6>
                    <h5>FARM GPT - Team leader, represented HKU</h5>
                    <p>- HKAES University Pitch Competition 2023/2024</p>
                    <p>- Led the team in creating FarmGPT, a federated learning model with a data hub and chatbot assistant for farmers</p>
                </li>
                <li>
                    <h6>Dec 2023 - Feb 2024</h6>
                    <h5>Hello Memory - VR project</h5>
                    <p>- Merit Award HKTechathon 2024 organize by HKSTP.</p>
                    <p>- Team Leader, working on a AI computer graphics project using NeRF AI and Luma API, together with the app prototype development for dementia patient.
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Project()