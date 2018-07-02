export function parseStrTime(time) {
	// parse time : '00:00:15'
    var hms = time.split(':');
    return (parseInt(hms[0] * 60 * 60) + parseInt(hms[1] * 60) + parseInt(hms[2]));
}


export function seek(player, ele, time){

}

export function slideCarouselHandler(slides, numOfCarouselSlide, time){
	if (time >= parseStrTime(slides[slides.length - 1].time)) {
        if (slides.length > numOfCarouselSlide) {
            _updateSlideCarouel(slides.length - 1);
        }
         _setSlide(slides.length - 1);
         _highlightMarkers(slides.length - 1)
    } else {
        for (var i = 0, j = 1; i < slides.length; i++, j++) {
            if (time >= parseStrTime(slides[i].time) && time < parseStrTime(slides[j].time)) {
                if (slides.length > numOfCarouselSlide) {
                    _updateSlideCarouel(i);
                    _highlightMarkers(i);
                }
                 _setSlide(i);
            }
        }
    }
}