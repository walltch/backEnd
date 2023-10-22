const { findAll } = require('../controllers/MainController');

describe('findAll Function Test', () => {
    it('should return combined tables of users and pkms', async () => {
        const req = {};
        const res = {
            send: jest.fn(),
            status: jest.fn(() => res),
        };

        const USER = {
            find: jest.fn().mockResolvedValue([
                { id: 1, name: 'User 1', email: 'user1@example.com' },
                { id: 2, name: 'User 2', email: 'user2@example.com' },
            ]),
        };

        const PKM = {
            find: jest.fn().mockResolvedValue([
                { id: 101, name: 'Pkm 1', type: 'Type A' },
                { id: 102, name: 'Pkm 2', type: 'Type B' },
            ]),
        };

        await findAll(req, res);
    }, 100000);

    it('should handle errors and return a 500 status code', async () => {
        const req = {};
        const res = {
            send: jest.fn(),
            status: jest.fn(() => res),
        };

        const USER = {
            find: jest.fn().mockRejectedValue(new Error('Database error')),
        };
        
        await findAll(req, res);
    }, 100000);
});
