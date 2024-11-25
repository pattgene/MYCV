import React from 'react'
import '../css/AboutMe.css'

function AboutMe() {
    return (
        <div className='container'>
            <div className='about_me'>
                <h4><span>About</span> Me</h4>
                <p>A dedicated AI researcher with extensive experience in computer vision, 3D reconstruction, and multimodal systems. Proficient in leveraging advanced techniques 
                    like Gaussian splatting and large language models to develop innovative solutions. Proven ability to lead research teams and 
                    collaborate with academic institutions, contributing to impactful projects in AI and computer graphics.</p>
            </div>
            <div className='education'>
                <h4><span>E</span>ducation</h4>
                <ul>
                    <li>
                        <h6>Sep2022 - Expected: May 2026</h6>
                        <h5>The University of Hong Kong (HKU) - Full Scholar </h5>
                        <p>Bachelor of Engineering Majoring in Computer Science Minor in Statistics</p>
                    </li>
                </ul>
            </div>
            <div className='skill'>
                <h4><span>S</span>kills</h4>
                <ul>
                     <li>
                        <h5>Programming Language:</h5>
                        <p> C, C++, Python, Java, JavaScript, C#</p>
                    </li>
                    <li>
                        <h5>ML,Deep Learning, Data-Sci:</h5>
                        <p> Numpy, Pandas, Matplotlib, R, Scikit-learn, YoloV8, OpenCV, Pytorch, RAG, Finetuning</p>
                    </li>
                    <li>
                        <h5>Software Engineer:</h5>
                        <p> HTML, CSS, Node JS, Express, React JS, Next JS, SQL</p>
                    </li>
                    <li>
                        <h5>Others:</h5>
                        <p> Git, Blender, Unity, Agile Development</p>
                    </li>
                    <li>
                        <h5>Language:</h5>
                        <p> English(Fluent), Cantonese(Beginner), Mandarin(Beginner)</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe()