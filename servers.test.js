describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should incrememnt serverId on submitServerInfo()', function () {
    submitServerInfo();

    expect(serverId).toEqual(1);
  })

  it('should make as many table rows number of servers in allServers on updateServerTable()', function () {
    allServers = {server1: {serverName: "Bryce"}, server2: {serverName: "Carl"}, server3: {serverName: "Steve"}};
    updateServerTable();
    let table = document.querySelector('#serverTable');

    expect(table.rows.length).toEqual(4);
  })

  afterEach(function() {
    serverTbody.innerHTML = '';
    allServers = {};
    serverId = 0;
    serverNameInput.value = '';
  });
});
