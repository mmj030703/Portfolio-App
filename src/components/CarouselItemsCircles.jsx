/* eslint-disable react/prop-types */
function CarouselItemsCircles({ carouselItemsList, circleBgColor = 'bg-white', rowItemsNumber = 3 }) {

    const carouselCircles = [];
    for (let i = 1; i <= carouselItemsList?.length / rowItemsNumber; i++) {
        carouselCircles.push(<span key={Math.random() * 10 + 1} className={`block w-4 h-4 rounded-full ${circleBgColor}`}></span>);
    }

    return (
        <div className="flex gap-x-3 justify-center mt-5">
            {carouselCircles}
        </div>
    )
}

export default CarouselItemsCircles;