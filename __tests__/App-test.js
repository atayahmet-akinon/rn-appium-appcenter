const wd = require("wd");

const config = {
 
    platformName: 'Android',
    platformVersion: '9',
    deviceName: 'Pixel_2_API_28',
    app: process.cwd() + '/android/apks/app-release.apks',
    appPackage: 'com.awesomeproject',
    // appActivity: ".view.TextFields",
    automationName: 'UiAutomator2',
};

jasmine.DEFAULT_TIMEOUT_INTERVAL = 12000;

const driver = wd.promiseChainRemote('0.0.0.0', 4723);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000);

});

test('test', async (done) => {
  await driver.elementByAccessibilityId('Show text').click();
  
  setTimeout(async () => {
    const a = await driver.elementByAccessibilityId('showcase').text();
    expect(a).toEqual('HELLO WORLD!');
    done();
  }, 1000)
});