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
              checkInTime: 'Mon Sep 16 2019 06:00:00 GMT+0300 (Eastern European Summer Time)',
              checkInRoom: { id: 1, name: 'Adabelle' },
              checkOutTime: 'Mon Sep 16 2019 07:00:00 GMT+0300 (Eastern European Summer Time)',
              checkOutRoom: { id: 2, name: 'Gym' }
            },
            {
              checkInTime: 'Mon Sep 16 2019 08:00:00 GMT+0300 (Eastern European Summer Time)',
              checkInRoom: { id: 1, name: 'Adabelle' },
              checkOutTime: 'Mon Sep 16 2019 10:00:00 GMT+0300 (Eastern European Summer Time)',
              checkOutRoom: { id: 6, name: 'Reading' }
            },
            {
              checkInTime: 'Mon Sep 16 2019 11:00:00 GMT+0300 (Eastern European Summer Time)',
              checkInRoom: { id: 1, name: 'Adabelle' },
              checkOutTime: 'Mon Sep 16 2019 13:00:00 GMT+0300 (Eastern European Summer Time)',
              checkOutRoom: { id: 6, name: 'Reading' }
            },
        ],
    },
    {
        id: 12,
        name: 'Karina Semerenko',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 06:00:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 08:00:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 3, name: 'Zoo' }
            },
        ],
    },
    {
        id: 13,
        name: 'Stas Biliy',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 06:00:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 09:00:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 4, name: 'Music' }
            },
        ],
    },
    {
        id: 14,
        name: 'Roman Martiuk',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 06:00:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 18:00:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 5, name: 'Cinema' }
            },
        ],
    },
    {
        id: 15,
        name: 'Ivan Ivanov',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 08:12:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 09:33:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 6, name: 'Reading' }
            },
        ],
    },
    {
        id: 11,
        name: 'Artem Horobei',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 07:41:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 17:13:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 2, name: 'Gym' }
            },
        ],
    },
    {
        id: 12,
        name: 'Karina Semerenko',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 11:00:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 13:33:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 3, name: 'Zoo' }
            },
            {
              checkInTime: 'Mon Sep 16 2019 06:00:00 GMT+0300 (Eastern European Summer Time)',
              checkInRoom: { id: 1, name: 'Adabelle' },
              checkOutTime: 'Mon Sep 16 2019 07:00:00 GMT+0300 (Eastern European Summer Time)',
              checkOutRoom: { id: 2, name: 'Gym' }
            },
            {
              checkInTime: 'Mon Sep 16 2019 08:00:00 GMT+0300 (Eastern European Summer Time)',
              checkInRoom: { id: 1, name: 'Adabelle' },
              checkOutTime: 'Mon Sep 16 2019 10:00:00 GMT+0300 (Eastern European Summer Time)',
              checkOutRoom: { id: 6, name: 'Reading' }
            },
        ],
    },
    {
        id: 13,
        name: 'Stas Biliy',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 12:00:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 14:33:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 4, name: 'Music' }
            },
            {
              checkInTime: 'Mon Sep 16 2019 06:00:00 GMT+0300 (Eastern European Summer Time)',
              checkInRoom: { id: 1, name: 'Adabelle' },
              checkOutTime: 'Mon Sep 16 2019 07:00:00 GMT+0300 (Eastern European Summer Time)',
              checkOutRoom: { id: 2, name: 'Gym' }
            },
            {
              checkInTime: 'Mon Sep 16 2019 08:00:00 GMT+0300 (Eastern European Summer Time)',
              checkInRoom: { id: 1, name: 'Adabelle' },
              checkOutTime: 'Mon Sep 16 2019 10:00:00 GMT+0300 (Eastern European Summer Time)',
              checkOutRoom: { id: 6, name: 'Reading' }
            },
            {
              checkInTime: 'Mon Sep 16 2019 11:00:00 GMT+0300 (Eastern European Summer Time)',
              checkInRoom: { id: 1, name: 'Adabelle' },
              checkOutTime: 'Mon Sep 16 2019 13:00:00 GMT+0300 (Eastern European Summer Time)',
              checkOutRoom: { id: 6, name: 'Reading' }
            },
        ],
    },
    {
        id: 14,
        name: 'Roman Martiuk',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 16:00:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 17:23:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 5, name: 'Cinema' }
            },
        ],
    },
    {
        id: 15,
        name: 'Ivan Ivanov',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 13:55:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 16:33:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 6, name: 'Reading' }
            },
            {
              checkInTime: 'Mon Sep 16 2019 06:00:00 GMT+0300 (Eastern European Summer Time)',
              checkInRoom: { id: 1, name: 'Adabelle' },
              checkOutTime: 'Mon Sep 16 2019 07:00:00 GMT+0300 (Eastern European Summer Time)',
              checkOutRoom: { id: 2, name: 'Gym' }
            },
            {
              checkInTime: 'Mon Sep 16 2019 08:00:00 GMT+0300 (Eastern European Summer Time)',
              checkInRoom: { id: 1, name: 'Adabelle' },
              checkOutTime: 'Mon Sep 16 2019 10:00:00 GMT+0300 (Eastern European Summer Time)',
              checkOutRoom: { id: 6, name: 'Reading' }
            },
            {
              checkInTime: 'Mon Sep 16 2019 11:00:00 GMT+0300 (Eastern European Summer Time)',
              checkInRoom: { id: 1, name: 'Adabelle' },
              checkOutTime: 'Mon Sep 16 2019 13:00:00 GMT+0300 (Eastern European Summer Time)',
              checkOutRoom: { id: 6, name: 'Reading' }
            },
        ],
    },
    {
        id: 11,
        name: 'Artem Horobei',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 13:00:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 15:33:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 2, name: 'Gym' }
            },
        ],
    },
    {
        id: 12,
        name: 'Karina Semerenko',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 11:42:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 14:33:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 3, name: 'Zoo' }
            },
        ],
    },
    {
        id: 13,
        name: 'Stas Biliy',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 12:00:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 15:33:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 4, name: 'Music' }
            },
        ],
    },
    {
        id: 14,
        name: 'Roman Martiuk',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 10:53:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 18:33:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 5, name: 'Cinema' }
            },
        ],
    },
    {
        id: 15,
        name: 'Ivan Ivanov',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 06:00:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 17:33:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 6, name: 'Reading' }
            },
        ],
    },
    {
        id: 11,
        name: 'Artem Horobei',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 06:00:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 13:33:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 2, name: 'Gym' }
            },
        ],
    },
    {
        id: 12,
        name: 'Karina Semerenko',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 15:00:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 16:33:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 3, name: 'Zoo' }
            },
        ],
    },
    {
        id: 13,
        name: 'Stas Biliy',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 11:35:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 12:33:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 4, name: 'Music' }
            },
        ],
    },
    {
        id: 14,
        name: 'Roman Martiuk',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 14:34:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 17:33:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: null, name: null }
            },
        ],
    },
    {
        id: 15,
        name: 'Ivan Ivanov',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 08:44:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 17:33:00 GMT+0300 (Eastern European Summer Time)',
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
                checkInTime: 'Mon Sep 16 2019 06:00:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 13:37:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: 2, name: 'Gym' }
            },
            {
              checkInTime: 'Mon Sep 16 2019 14:00:00 GMT+0300 (Eastern European Summer Time)',
              checkInRoom: { id: 1, name: 'Adabelle' },
              checkOutTime: 'Mon Sep 16 2019 17:37:00 GMT+0300 (Eastern European Summer Time)',
              checkOutRoom: { id: null, name: null }
            },
        ],
    },
    {
        id: 22,
        name: 'Alex Gurland',
        events: [
            {
                checkInTime: 'Mon Sep 16 2019 07:00:00 GMT+0300 (Eastern European Summer Time)',
                checkInRoom: { id: 1, name: 'Adabelle' },
                checkOutTime: 'Mon Sep 16 2019 17:34:00 GMT+0300 (Eastern European Summer Time)',
                checkOutRoom: { id: null, name: null }
            },
        ],
    },
];

const totals = {
    childrenCount: [9,9,5,6,10,11,10,9,5,6,9,11,12,12,11,10,10,9,10,8,9,7,6,2,1,0],
    teachersCount: [1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,0,0,0],
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
