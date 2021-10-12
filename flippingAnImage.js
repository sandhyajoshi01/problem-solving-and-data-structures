var flipAndInvertImage = function(image) {
    const reversedImage = image.map(imgElement => imgElement.reverse())
    //[ [ 0, 1, 1 ], [ 1, 0, 1 ], [ 0, 0, 0 ] ]
    const flipInvert = reversedImage.map(revElement=> revElement.map(function (ele){
        if(ele==1){
            ele=0
        }else {
            ele =1
        }
        return ele
    }))
    return flipInvert

};
console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))