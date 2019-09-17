function getRandomColor() {
    const colorHash = {};

    return function() {
        let newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);

        while(colorHash[newColor]) {
            newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        }

        colorHash[newColor] = newColor;

        return newColor;
    }
}

function getShortName(name) {
    if (!name) return '-';

    return name
            .split(' ')
            .map(name => name.charAt(0))
            .join('')
}

function timeoutPromise(timeout, paylaod) {
  return new Promise((resolve) => setTimeout(() => resolve(paylaod), timeout));
}

module.exports = {
    getRandomColor,
    getShortName,
    timeoutPromise,
};
