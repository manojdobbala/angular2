
describe('Should check for the application Headers', function () {

  let expectedMsg = 'External Template',
      appheader = 'Storyline Tracker',
      compheader = 'Component Demo';

  beforeEach(function () {
    browser.get('');
  });

  let list = element.all(by.css('h1'));

  it('should display: ' + expectedMsg, function () {
    expect(list.get(0).getText()).toBe(expectedMsg);
  });
  
  it('should display: ' + appheader, function () {
    expect(list.get(1).getText()).toBe(appheader);
  });

  it('should display app header: ' + compheader, function () {
    expect(element(by.css('h3')).getText()).toEqual(compheader);
  });

});

describe('Should verify the Story list', function () {

  let Storylist = element.all(by.css('article ul li'));
  let storyCharacter = element(by.css('#character'));

  it('should display the list of stories', function () {
    expect(Storylist.getText()).toEqual(['11. Chewbacca', '12. Rey']);
  });

  it('should validate the count', function () {
    expect(Storylist.count()).toBe(2);
  });

  it('should select first element from story list and display selected story', function () {
    Storylist.first().click();
    expect(element(by.className('selected')).isDisplayed());
    expect(storyCharacter.getText()).toEqual('You selected Chewbacca');

    Storylist.get(1).click();
    expect(storyCharacter.getText()).toEqual('You selected Rey');
  });

});
