import { useSelector } from "react-redux";
import TimelineUI from "./TimelineUI";

function Experience() {
    const portfolioDetails = useSelector(store => store?.portfolioDetails?.portfolioDetails);
    const data = portfolioDetails?.user?.timeline;
    const timelineDetails = [];
    data?.map(item => timelineDetails.push(item));
    timelineDetails.sort((a, b) => a.sequence - b.sequence);

    return (
        <div>
            <h1 className="text-center text-4xl font-bold">My <span className="text-orange-400">Experience</span></h1>
            <div className="flex justify-center">
                <div className="flex flex-col mt-12 ms-14">
                    {timelineDetails?.map((item, index) => {
                        const startDate = new Date(item.startDate);
                        const endDate = new Date(item.endDate);
                        const startMonth = startDate.getMonth() + 1;
                        const endMonth = endDate.getMonth() + 1;
                        const startYear = startDate.getFullYear();
                        const endYear = endDate.getFullYear();

                        return (!item.forEducation && item.enabled) ?
                            <TimelineUI key={item._id} timelineDetails={item} index={index} startMonth={startMonth} endMonth={endMonth} startYear={startYear} endYear={endYear} />
                            :
                            null;
                    })}
                </div>
            </div>

        </div>
    )
}

export default Experience;