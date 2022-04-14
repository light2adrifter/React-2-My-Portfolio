import React from 'react';
import coverImage from "../../assets/cover/space.jpg";

function About() {

    return (
        <section className='my-5'>
            <h1 id='about'>"Towards the future"</h1>
            <img src={coverImage} className='my-2' style={{ width: '100%' }} alt='cover' />
            <div className='my-2'>
                <p>
                    Interesting stuffz about me
                </p>
            </div>
        </section>
    );
};

export default About;