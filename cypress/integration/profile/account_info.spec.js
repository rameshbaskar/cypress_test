import * as LoginPage from '../../support/pages/login';
import * as DataUtils from '../../support/utils/dataUtils';
import * as UserSeed from '../../support/seeds/userSeed';
import * as AccountInfoPage from '../../support/pages/profile/accountInfo';

describe('New jobseeker', function() {
  it('should be able to see the account info added after login', function() {
    cy.fixture('accountInfo').as('accountInfo');
    const nric = DataUtils.generateNric();
    LoginPage.login(nric);
    AccountInfoPage.visit();
    AccountInfoPage.enterAccountInfo();
    LoginPage.logout();

    // Login again and check if the accountInfo is persisted.
    LoginPage.login(nric);
    AccountInfoPage.visit();
    AccountInfoPage.verifyAccountInfo(accountInfo.newInfo);
  });
});

describe('Existing jobseeker', function() {
  let user;
  before(async function() {
    cy.fixture('users').then((users) => {
      user = await UserSeed.seedJobseekerProfile(users.defaultUser);
    });
  });

  after(async function() {
    await UserSeed.removeJobseekerProfile(user.individualId);
  });

  it('should be able to update their account info', function() {
    cy.fixture('accountInfo').as('accountInfo');
    LoginPage.login(user.nric);
    AccountInfoPage.visit();
    AccountInfoPage.enterAccountInfo(accountInfo.updatedInfo);
    LoginPage.logout();

    // Login again and check if the updated accountInfo is persisted
    LoginPage.login(user.nric);
    AccountInfoPage.visit();
    AccountInfoPage.verifyAccountInfo(accountInfo.updatedInfo);
  });
});