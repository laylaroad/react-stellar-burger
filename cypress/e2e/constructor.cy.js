import { apiUrl } from '../../src/utils/api';

describe('burger-constructor', function () {
    const loginPath = '/auth/login';
    const ordersPath = '/orders';

    const ingredientNameClass = '[class^=ingredient-item_ingredient_name__]';
    const burgerIngredientsContainerClass = '[class^=burger-ingredients_container__]';
    const inputClass = '[class^=input__placeholder]';
    const modalClass = '[class^=modal_modal__]';
    const modalCardClass = '[class^=modal_modal_card__]';
    const modalCloseButtonClass = '[class^=modal_close_button__]';

    beforeEach(function () {
        cy.visit('');
    });

    it('constructor does not have ingredients', () => {
        cy.get('button').contains('Оформить заказ').as('orderButton').should('exist');
        cy.get('@orderButton').should('be.disabled');
        cy.contains('Начните составлять бургер').should('exist');
        cy.get('[class^=burger-constructor_currency__]').contains('0').should('exist');
        cy.get('[class^=constructor-element__row]').should('not.exist');
    })

    it('add ingredients, authorize & create order', () => {
        //checking the ingredients assertion
        cy.contains('Соберите бургер').should('exist');
        cy.get('[class^=burger-tab_burger_tab__]').should('exist');
        cy.get(burgerIngredientsContainerClass).should('exist');
        cy.contains('булка').should('exist').as('bun').find(ingredientNameClass).should('exist');
        cy.contains('Соус ').should('exist').as('sauce').find(ingredientNameClass).should('exist');
        cy.contains('h3', 'Начинки').should('exist').next().as('main_ingredients');
        cy.get('@main_ingredients').find(ingredientNameClass).first().as('main_ingredient');
        cy.get('@main_ingredient').should('exist');

        cy.get('[class^=burger-creating_burger_wrapper__]').as('constructor')

        //dnd assertion
        cy.get('@bun').trigger('dragstart');
        cy.get('@constructor').trigger('drop');
        cy.get('@constructor').contains('булка').should('exist');

        cy.get('@sauce').scrollIntoView().trigger('dragstart');
        cy.get('@constructor').trigger('drop');
        cy.get('@constructor').contains('Соус ').should('exist');

        cy.get('@main_ingredient').scrollIntoView().trigger('dragstart');
        cy.get('@constructor').trigger('drop');
        cy.get('@constructor').find('[class^=ingredients-main_main__]').should('have.length', 2);

        cy.get('button').contains('Оформить заказ').as('orderButton');
        cy.get('@orderButton').should('exist').should('be.enabled');
        cy.get('@orderButton').click();
        cy.location().should((location) => {
            expect(location.hash).to.equal('#/login');
        });

        //authorization assertion

        cy.contains('Вход').should('exist');
        cy.get('button').contains('Войти').as('loginButton').should('be.disabled');
        cy.get('[class^=login_form__]').as('login_form').should('exist');
        cy.get('@login_form').find(inputClass).should('exist').contains('E-mail');
        cy.get('@login_form').find('input').as('inputs').should('have.length', 2);
        cy.get('@inputs').first().as('input_email');
        cy.get('@login_form').find(inputClass).should('exist').contains('Пароль');
        cy.get('@inputs').last().as('input_password');

        cy.get('@input_email').type('userget@mail.com');
        cy.get('@input_password').type('65781_quote');
        cy.get('@loginButton').should('be.enabled');

        cy.intercept('POST', `${apiUrl}${loginPath}`, { fixture: 'login.json' });
        cy.get('@loginButton').click();
        cy.location().should((location) => {
            expect(location.pathname).to.equal('/');
        });

        //making the order assertion
        cy.get('@orderButton').should('exist');
        cy.intercept('POST', `${apiUrl}${ordersPath}`, { fixture: 'order.json' });
        cy.get('@orderButton').click();
        cy.get(modalClass).should('exist');
        cy.get(modalCardClass).should('exist');
        cy.get('[class^=order-details_order_section__]').should('exist');
        cy.get('[class^=order-details_order_number__]').should('exist');
        cy.contains('Ваш заказ начали готовить').should('exist');
        cy.get(modalCloseButtonClass).click();
    })

    //modal ingredients opening assertion
    it('opening ingredients modal', () => {
        cy.get(burgerIngredientsContainerClass).should('exist');
        cy.contains('булка').should('exist').as('bun').find(ingredientNameClass).should('exist');
        cy.get('@bun').click();
        cy.location().should((location) => {
            expect(location.hash).to.match(/^#\/ingredients\/\w+$/);
        });
        cy.get(modalClass).should('exist');
        cy.get(modalCardClass).should('exist');
        cy.contains('Детали ингредиента').should('exist');
        cy.get(modalCloseButtonClass).should('exist');
        cy.get('[class^=ingredient-details_ingredient_section__]').should('exist');
        cy.get('[class^=ingredient-details_ingredient_title__]').should('exist');
        cy.reload(true);
        cy.location().should((location) => {
            expect(location.hash).to.match(/^#\/ingredients\/\w+$/);
        });
        cy.get(modalCloseButtonClass).click();
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/');
        });
    })
});

