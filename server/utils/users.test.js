var expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
      users = new Users();
      users.users = [{
          id: '1',
          name: 'Tom',
          room: 'chat room'
      }, {
          id: '2',
          name: 'Mike',
          room: 'game room'
      }, {
          id: '3',
          name: 'Mary',
          room: 'chat room'
      }];
    });

    it('should add new user', () => {
      var users = new Users();
      var user = {
          id: '234',
          name: 'dodo',
          room: 'default'
      };
      var resUser = users.addUser(user.id, user.name, user.room);

      expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '77';
        var user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find the user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find the user', () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toNotExist();
    });


    it('should return names for chat room', () => {
      var userList = users.getUserList('chat room');

      expect(userList).toEqual(['Tom', 'Mary']);
    });

    it('should return names for game room', () => {
      var userList = users.getUserList('game room');

      expect(userList).toEqual(['Mike']);
    });
});