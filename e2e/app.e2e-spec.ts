describe('this is a test suite', () => {
    beforeEach(() => {
    });

    it('should open a new window', () => {
        expect(true).toBeTruthy();
    });

    it('should open close the window', () => {
        expect(false).toBeFalsy();
    });
});

describe('Should check for the application Headers', () => {

  let expectedMsg = 'External Template',
      appheader = 'Storyline Tracker',
      compheader = 'Component Demo';

  beforeEach(() => {
    browser.get('');
  });

  let list = element.all(by.css('h1'));

  it('should display: ' + expectedMsg, () => {
    expect(list.get(0).getText()).toBe(expectedMsg);
  });
  
  it('should display: ' + appheader, () => {
    expect(list.get(1).getText()).toBe(appheader);
  });

  it('should display app header: ' + compheader, () => {
    expect(element(by.css('h3')).getText()).toEqual(compheader);
  });

});

describe('Should verify the Story list', () => {

  let Storylist = element.all(by.css('article ul li'));
  let storyCharacter = element(by.css('#character'));

  it('should display the list of stories', () => {
    expect(Storylist.getText()).toEqual(['11. Chewbacca', '12. Rey']);
  });

  it('should validate the count', () => {
    expect(Storylist.count()).toBe(2);
  });

  it('should select first element from story list and display selected story', () => {
    Storylist.first().click();
    expect(element(by.className('selected')).isDisplayed());
    expect(storyCharacter.getText()).toEqual('You selected Chewbacca');

    Storylist.get(1).click();
    expect(storyCharacter.getText()).toEqual('You selected Rey');
  });

});

describe('should verify carousel and its functionality', () => {
    let carouselContainer = element(by.css('.carousel slide'));

    let clickRight = element(by.css('a.right'));
    let clickLeft = element(by.css('a.left'));

    it('should check if carousel exists in the page', () => {
        expect(carouselContainer.isPresent()).toBe(true);
    });

    it('should click right and slide the carousel to right', () => {
        clickRight.click();
    });

    it('should click left and slide the carousel to left', () => {
        clickLeft.click();
    });
});