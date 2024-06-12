var options = {
	figureTagName: 'a',
	urlForSize: function (filename, size) {
		return './img/prep/' + size + '/' + filename;
    },
    getMinAspectRatio: function(lastWindowWidth) {
        if (lastWindowWidth <= 1280) {
            return 2;
        }
        else if (lastWindowWidth <= 1440) {
            return 3;
        }
        else if (lastWindowWidth <= 1920) {
            return 4;
        }
        else if (lastWindowWidth <= 2560) {
            return 5;
        }
        return 6;
  },
}

var imageData = [
    {
        "aspectRatio":  1.333,
        "filename":  "DJI_0210.jpg"
    },
    {
        "aspectRatio":  1.333,
        "filename":  "DJI_0215.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130398.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130409.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130410.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130434.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130445.jpg"
    },
    {
        "aspectRatio":  1,
        "filename":  "P1130457.jpg"
    },
    {
        "aspectRatio":  1,
        "filename":  "P1130464.jpg"
    },
    {
        "aspectRatio":  0.667,
        "filename":  "P1130467.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130474.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130512.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130525.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130527.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130542.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130556.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130559.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130566.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130575.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130576.jpg"
    },
    {
        "aspectRatio":  0.667,
        "filename":  "P1130581.jpg"
    },
    {
        "aspectRatio":  0.667,
        "filename":  "P1130584.jpg"
    },
    {
        "aspectRatio":  1,
        "filename":  "P1130586.jpg"
    },
    {
        "aspectRatio":  1,
        "filename":  "P1130589.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130592.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130593.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130595.jpg"
    },
    {
        "aspectRatio":  1.4,
        "filename":  "P1130597.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130601.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130603.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130605.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130617.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130627.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130646.jpg"
    },
    {
        "aspectRatio":  1,
        "filename":  "P1130671.jpg"
    },
    {
        "aspectRatio":  0.667,
        "filename":  "P1130677.jpg"
    },
    {
        "aspectRatio":  1,
        "filename":  "P1130684.jpg"
    },
    {
        "aspectRatio":  0.751,
        "filename":  "P1130693.jpg"
    },
    {
        "aspectRatio":  1,
        "filename":  "P1130710.jpg"
    },
    {
        "aspectRatio":  1.028,
        "filename":  "P1130715.jpg"
    },
    {
        "aspectRatio":  1,
        "filename":  "P1130723.jpg"
    },
    {
        "aspectRatio":  0.667,
        "filename":  "P1130733.jpg"
    },
    {
        "aspectRatio":  0.667,
        "filename":  "P1130734.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130754.jpg"
    },
    {
        "aspectRatio":  1.25,
        "filename":  "P1130761.jpg"
    },
    {
        "aspectRatio":  1,
        "filename":  "P1130763.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130767.jpg"
    },
    {
        "aspectRatio":  1.5,
        "filename":  "P1130777.jpg"
    },
    {
        "aspectRatio":  0.751,
        "filename":  "P1130815.jpg"
    },
    {
        "aspectRatio":  1,
        "filename":  "P1130829.jpg"
    },
    {
        "aspectRatio":  0.667,
        "filename":  "P1130846.jpg"
    },
    {
        "aspectRatio":  0.667,
        "filename":  "P1130849.jpg"
    },
    {
        "aspectRatio":  0.667,
        "filename":  "P1130858.jpg"
    },
    {
        "aspectRatio":  0.667,
        "filename":  "P1130860.jpg"
    },
    {
        "aspectRatio":  1,
        "filename":  "P1130885.jpg"
    }
];

window.onload = function () {
	var pig = new Pig(imageData, options).enable();

	const lightbox = GLightbox({
		touchNavigation: true
	})
};
