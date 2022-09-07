module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Grannies', [
      {
        username: 'Baba Lena',
        email: 'lena1930@mail.ru',
        password: 'lena1930',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Ded Oleg',
        email: 'oleg_podnyal@mail.ru',
        password: 'perevernul',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Geogrgiy Ivanovich',
        email: 'gora@yandex.ru',
        password: 'gorayura',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Nadezhda',
        email: 'nadya@gmail.com',
        password: 'compas123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    await queryInterface.bulkInsert('GrandChildren', [
      {
        username: 'Alena',
        email: 'alena@mail.ru',
        password: 'alena',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Ruslan',
        email: 'ruslan@mail.ru',
        password: 'ruslan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Anvar',
        email: 'anvar@mail.ru',
        password: 'anvar',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Katya',
        email: 'katya@mail.ru',
        password: 'katya',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    await queryInterface.bulkInsert('Albums', [
      {
        imglink: 'https://рецепты-блинов.рф/wp-content/uploads/2017/08/retsept-blinov-na-1-l-moloka.jpg',
        grannyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imglink: 'image.png://рецепты-блинов.рф/wp-content/uploads/2017/08/retsept-blinov-na-1-l-moloka.jpg',
        grannyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
    await queryInterface.bulkInsert('Families', [
      {
        grannyId: 1,
        grandChildId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Grannies', null, { restartIdentity: true, truncate: true });
    await queryInterface.bulkDelete('GrandChildren', null, {});
    await queryInterface.bulkDelete('Albums', null, {});
    await queryInterface.bulkDelete('Families', null, {});
  },
};
