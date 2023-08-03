export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index += 1) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export const listColor = () => {
    const randonColors = [];
    for (let i = 0; i < 4; i += 1) {
        randonColors.push(getRandomColor());
    }
    return ['white', 'black', ...randonColors];
}
