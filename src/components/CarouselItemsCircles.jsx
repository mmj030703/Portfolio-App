/* eslint-disable react/prop-types */
function CarouselItemsCircles({ carouselItemsList, circleBgColor = 'bg-white', activeItemColor, rowItemsNumber = 3, carouselAtIndex }) {

    const carouselCircles = [];
    for (let i = 0; i < carouselItemsList?.length / rowItemsNumber; i++) {
        carouselCircles.push(<span key={Math.random() * 10 + 1} className={`${carouselAtIndex === i ? activeItemColor + ' px-4' : circleBgColor} block w-4 h-4 rounded-full`}></span>);
    }

    return (
        <div className="flex gap-x-3 justify-center mt-5">
            {carouselCircles}
        </div>
    )
}

export default CarouselItemsCircles;