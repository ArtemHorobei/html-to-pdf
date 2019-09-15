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

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    getRandomColor,
    getShortName,
    getRandomNumber,
};
