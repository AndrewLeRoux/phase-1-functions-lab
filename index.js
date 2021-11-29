function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
  }


  function distanceFromHqInFeet(someValue) {
    return 264 * distanceFromHqInBlocks(someValue);
  }


  function distanceTravelledInFeet(start, destination) {
    return 264 * Math.abs(start - destination);
  }

  function calculatesFarePrice(start, destination) {
    const fareDistance = distanceTravelledInFeet(start, destination);
    if (fareDistance < 400) {
        return 0;
    }
    else if (fareDistance >= 400 && fareDistance <= 2000) {
        return (fareDistance - 400) * 0.02;
    }
    else if (fareDistance > 2000 && fareDistance < 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }

}