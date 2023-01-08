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

  it('should update the table with new server', function () {
    updateServerTable();
    expect(document.querySelector('table tbody tr td').innerText).toEqual('Alice');
  });

  afterEach(function() {
    serverNameInput.value = '';
  });
});






// describe ("Helpers tests", function () {



// });


  