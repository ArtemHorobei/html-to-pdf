const selectedDate = '09/12/2019';

const currentRoom = {
    id: 1,
    name: 'Adabelle',
};

const children = [
    {
        id: 11,
        name: 'Artem Horobei',
        events: [
            {
                checkInTime: '6:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '9:00am',
                checkOutRoom: { id: 2, name: 'Gym' }
            },
        ],
    },
    {
        id: 12,
        name: 'Karina Semerenko',
        events: [
            {
                checkInTime: '7:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '10:00am',
                checkOutRoom: { id: 3, name: 'Zoo' }
            },
        ],
    },
    {
        id: 13,
        name: 'Stas Biliy',
        events: [
            {
                checkInTime: '8:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '11:00am',
                checkOutRoom: { id: 4, name: 'Music' }
            },
        ],
    },
    {
        id: 14,
        name: 'Roman Martiuk',
        events: [
            {
                checkInTime: '9:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '12:00pm',
                checkOutRoom: { id: 5, name: 'Cinema' }
            },
        ],
    },
    {
        id: 15,
        name: 'Ivan Ivanov',
        events: [
            {
                checkInTime: '10:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '13:00am',
                checkOutRoom: { id: 6, name: 'Reading' }
            },
        ],
    },
    {
        id: 11,
        name: 'Artem Horobei',
        events: [
            {
                checkInTime: '6:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '9:00am',
                checkOutRoom: { id: 2, name: 'Gym' }
            },
        ],
    },
    {
        id: 12,
        name: 'Karina Semerenko',
        events: [
            {
                checkInTime: '7:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '10:00am',
                checkOutRoom: { id: 3, name: 'Zoo' }
            },
        ],
    },
    {
        id: 13,
        name: 'Stas Biliy',
        events: [
            {
                checkInTime: '8:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '11:00am',
                checkOutRoom: { id: 4, name: 'Music' }
            },
        ],
    },
    {
        id: 14,
        name: 'Roman Martiuk',
        events: [
            {
                checkInTime: '9:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '12:00pm',
                checkOutRoom: { id: 5, name: 'Cinema' }
            },
        ],
    },
    {
        id: 15,
        name: 'Ivan Ivanov',
        events: [
            {
                checkInTime: '10:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '13:00am',
                checkOutRoom: { id: 6, name: 'Reading' }
            },
        ],
    },
    {
        id: 11,
        name: 'Artem Horobei',
        events: [
            {
                checkInTime: '6:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '9:00am',
                checkOutRoom: { id: 2, name: 'Gym' }
            },
        ],
    },
    {
        id: 12,
        name: 'Karina Semerenko',
        events: [
            {
                checkInTime: '7:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '10:00am',
                checkOutRoom: { id: 3, name: 'Zoo' }
            },
        ],
    },
    {
        id: 13,
        name: 'Stas Biliy',
        events: [
            {
                checkInTime: '8:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '11:00am',
                checkOutRoom: { id: 4, name: 'Music' }
            },
        ],
    },
    {
        id: 14,
        name: 'Roman Martiuk',
        events: [
            {
                checkInTime: '9:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '12:00pm',
                checkOutRoom: { id: 5, name: 'Cinema' }
            },
        ],
    },
    {
        id: 15,
        name: 'Ivan Ivanov',
        events: [
            {
                checkInTime: '10:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '13:00am',
                checkOutRoom: { id: 6, name: 'Reading' }
            },
        ],
    },
    {
        id: 11,
        name: 'Artem Horobei',
        events: [
            {
                checkInTime: '6:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '9:00am',
                checkOutRoom: { id: 2, name: 'Gym' }
            },
        ],
    },
    {
        id: 12,
        name: 'Karina Semerenko',
        events: [
            {
                checkInTime: '7:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '10:00am',
                checkOutRoom: { id: 3, name: 'Zoo' }
            },
        ],
    },
    {
        id: 13,
        name: 'Stas Biliy',
        events: [
            {
                checkInTime: '8:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '11:00am',
                checkOutRoom: { id: 4, name: 'Music' }
            },
        ],
    },
    {
        id: 14,
        name: 'Roman Martiuk',
        events: [
            {
                checkInTime: '9:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '12:00pm',
                checkOutRoom: { id: null, name: null }
            },
        ],
    },
    {
        id: 15,
        name: 'Ivan Ivanov',
        events: [
            {
                checkInTime: '10:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '13:00am',
                checkOutRoom: { id: 6, name: 'Reading' }
            },
        ],
    },
];

const teachers = [
    {
        id: 21,
        name: 'Lida Kramenko',
        events: [
            {
                checkInTime: '6:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '5:00pm',
                checkOutRoom: { id: 2, name: 'Gym' }
            },
        ],
    },
    {
        id: 22,
        name: 'Alex Gurland',
        events: [
            {
                checkInTime: '7:00am',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: '10:00am',
                checkOutRoom: { id: 3, name: 'Zoo' }
            },
        ],
    },
];

const totals = {
    childrenCount: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    teachersCount: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
};

const rooms = [
    {
        id: 1,
        name: 'Adabelle',
    },
    {
        id: 2,
        name: 'Gym',
    },
    {
        id: 3,
        name: 'Zoo',
    },
    {
        id: 4,
        name: 'Music',
    },
    {
        id: 5,
        name: 'Cinema',
    },
    {
        id: 6,
        name: 'Reading',
    },
    {
        id: 7,
        name: 'Circus',
    },
    {
        id: 8,
        name: 'Game',
    },
    {
        id: 9,
        name: 'Playground Room',
    },
    {
        id: 10,
        name: 'Fun',
    },

];

module.exports = {
    selectedDate,
    currentRoom,
    children,
    teachers,
    totals,
    rooms,
};
