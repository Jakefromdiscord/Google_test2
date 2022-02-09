const { TestScheduler } = require('jest');
const {Builder, Capabilities, By} = require('selenium-webdriver')
require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();


beforeAll(async () =>{
    await driver.get('http://localhost:5500/exercises/automation/movieList/index.html')
})


afterAll(async () => {
    await driver.close()
})

test('We can cross off a movie', async () => {
    const movieInupt = await driver.findElement(By.xpath('//form/input'))

    await movieInupt.sendKeys('ET\n')

    const movie = await driver.findElement(By.css('span'));

    await movie.click();



    await driver.sleep(3000)
})