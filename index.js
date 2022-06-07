// Code your solution in this file!

function distanceFromHqInBlocks(distance){
    return (Math.abs(distance-42));
}

function distanceFromHqInFeet(distance){
    return(Math.abs((distance-42)*264))
}
function distanceTravelledInFeet(pointA,pointB){
    return(Math.abs((pointA-pointB)*264))
}
function calculatesFarePrice(start, destination){
    const range =(Math.abs((destination-start)*264));
    if(range<=400){
        return 0;
    }
    if (range>400&&range<2000){
        return((range-400)*0.02)
    }
    if (range>2000&&range<2500){
        return(25);
    }
    if (range>2500){
        return 'cannot travel that far';
    }
}
