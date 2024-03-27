import { useState } from "react";
import Container from "./Container";
import Education from "./Education";
import Experience from "./Experience";

function Timeline() {
    const [showEducation, setShowEducation] = useState(true)

    const toggleEducation = () => {
        setShowEducation(!showEducation);
    };

    return (
        <section>
            <div className="ps-14 pe-5 bg-slate-100 rounded-[2.5rem] mt-10 pt-20">
                <Container>
                    <div className="relative">
                        {showEducation ?
                            <Education />
                            :
                            <Experience />
                        }
                        <button onClick={toggleEducation} title={showEducation ? 'Switch to Experience' : 'Switch to Education'} className="absolute top-0 right-10 bg-orange-400 py-2 px-5 rounded-[30px]">Switch</button>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Timeline;