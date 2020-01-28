const data = [
    { coordinates: [30, 40, 10, 20], expected: 'Y'},
    { coordinates: [-5, 20, -4, -20], expected: 'X'},
    { coordinates: [1, 1, 1, 1], expected: 'XY'},
];

describe("Axis of choice", () => {
    describe("Прямоугольник задан координатами", () => {
        data.map( d => {
            const [x1, y1, x2, y2] = d.coordinates;

            it(`a = (${x1}, ${y1}) b = (${x2}, ${y2})`, () => {
                assert.equal(axisOfChoice(...d.coordinates), d.expected);
            });
        });
    });
});