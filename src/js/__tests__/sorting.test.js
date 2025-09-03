import orderByProps from "../sort"


test('revision', () => {

    const obj = {
        name: 'мечник',
        health: 10,
        level: 2,
        attack: 80,
        defence: 40,
    }

    expect(orderByProps(obj, ["name", "level"])).toEqual({
        name: 'мечник',
        level: 2,
        attack: 80,
        defence: 40,
        health: 10,
    });

    const Obj1 = {
        health: 10,
        name: 'мечник',
        level: 2,
        defence: 40,
        attack: 80,
    }

    expect(orderByProps(Obj1, ["name", "level"])).toEqual({
        name: 'мечник',
        level: 2,
        attack: 80,
        defence: 40,
        health: 10,
    });

})