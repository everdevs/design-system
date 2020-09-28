const uuid = jest.createMockFromModule("uuid");
(uuid.v4 = () => "fakeId"), (module.exports = uuid);
