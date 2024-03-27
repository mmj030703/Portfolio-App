/* eslint-disable react/prop-types */
import { useState } from "react";
import { useMonth } from "../hooks/useMonth";

function TimelineUI({ timelineDetails, startMonth, endMonth, startYear, endYear }) {
    const [showMoreClicked, setShowMoreClicked] = useState(false);

    const startMonthShortForm = useMonth(startMonth);
    const endMonthShortForm = useMonth(endMonth);

    const toggleShowMoreClicked = () => {
        setShowMoreClicked(!showMoreClicked);
    }

    return (
        <div className="grid grid-cols-2">
            <div className={`w-[400px] relative border-e-2 border-dashed border-black pb-10 pe-3 before:absolute before:right-[-9px] before:top-[9px] before:h-4 before:w-4 before:rounded-full before:bg-orange-400 after:absolute after:right-[-15px] after:top-[3px] after:h-7 after:w-7 after:rounded-full after:border-2 after:border-dashed after:border-orange-400 before:z-10 after:z-10`}>
                <h1 className="text-[1.6rem] font-bold max-w-[400px]">{timelineDetails.company_name}, {timelineDetails.jobLocation?.split(',')[0]?.toString()}</h1>
                <p className="font-medium text-slate-500">{startMonthShortForm + " " + startYear}, {endMonthShortForm + " " + endYear}</p>
            </div>
            <div className="relative ps-2 w-fit pb-10">
                <h1 className="text-[1.6rem] font-bold">{timelineDetails.jobTitle} <span className="block max-w-[450px] font-semibold text-base">{timelineDetails.summary}</span></h1>
                <div className={`mt-2 ${showMoreClicked ? '' : 'hidden'}`}>
                    <h3 className="text-base font-semibold text-orange-400">Work Done</h3>
                    <ul className="flex flex-col gap-y-2 ps-4 mt-2">
                        {timelineDetails?.bulletPoints?.map(bulletPoint => <li key={Math.random()} className="list-disc text-[13.5px] max-w-96">{bulletPoint}</li>)}
                    </ul>
                </div>
                {
                    showMoreClicked ?
                        <button onClick={toggleShowMoreClicked} className="bg-orange-400 mt-3 rounded-sm py-[2px] px-2 cursor-pointer">Read Less</button>
                        :
                        <button onClick={toggleShowMoreClicked} className="bg-orange-400 mt-3 rounded-sm py-[2px] px-2 cursor-pointer">Read More</button>
                }
            </div>
        </div>
    )
}

export default TimelineUI;