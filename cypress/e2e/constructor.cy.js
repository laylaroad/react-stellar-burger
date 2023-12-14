
describe('burger-constructor', function () {
    beforeEach(function () {
        cy.visit('http://localhost:3000');
    });

    it('constructor does not have ingredients', () => {
        cy.get('button').contains('Оформить заказ').as('orderButton').should('exist');
        cy.get('@orderButton').should('be.disabled');
        cy.contains('Начните составлять бургер').should('exist');
        cy.get('[class^=burger-constructor_currency__]').contains('0').should('exist');
        cy.get('[class^=constructor-element__row]').should('not.exist');
    })

    it('add ingredients, authorize & create order', () => {
        cy.contains('Соберите бургер').should('exist');
        cy.get('[class^=burger-tab_burger_tab__]').should('exist');
        cy.get('[class^=burger-ingredients_container__]').should('exist');
        cy.contains('булка').should('exist').as('bun').find('[class^=ingredient-item_ingredient_name__]').should('exist');
        cy.contains('Соус ').should('exist').as('sauce').find('[class^=ingredient-item_ingredient_name__]').should('exist');
        cy.contains('h3', 'Начинки').should('exist').next().as('main_ingredients');
        cy.get('@main_ingredients').find('[class^=ingredient-item_ingredient_name__]').first().as('main_ingredient');
        cy.get('@main_ingredient').should('exist');

        cy.get('[class^=burger-creating_burger_wrapper__]').as('constructor')

        cy.get('@bun').trigger('dragstart');
        cy.get('@constructor').trigger('drop');
        cy.get('@constructor').contains('булка').should('exist');

        cy.get('@sauce').scrollIntoView().trigger('dragstart');
        cy.get('@constructor').trigger('drop');
        cy.get('@constructor').contains('Соус ').should('exist');

        cy.get('@main_ingredient').scrollIntoView().trigger('dragstart');
        cy.get('@constructor').trigger('drop');
        cy.get('@constructor').find('[class^=ingredients-main_main__]').should('have.length', 2);

        cy.get('button').contains('Оформить заказ').as('makeOrderButton');
        cy.get('@makeOrderButton').should('exist').should('be.enabled');
        cy.get('@makeOrderButton').click();
        cy.location().should((location) => {
            expect(location.pathname).to.equal('/login');
        });

        cy.contains('Вход').should('exist');
        cy.get('button').contains('Войти').as('loginButton').should('be.disabled');
        cy.get('[class^=login_form__]').as('login_form').should('exist');
        cy.get('@login_form').find('[class^=input__placeholder]').should('exist').contains('E-mail');
        cy.get('@login_form').find('input').as('inputs').should('have.length', 2);
        cy.get('@inputs').first().as('input_email');
        cy.get('@login_form').find('[class^=input__placeholder]').should('exist').contains('Пароль');
        cy.get('@inputs').last().as('input_password');

        cy.get('@input_email').type('userget@mail.com');
        cy.get('@input_password').type('65781_quote');
        cy.get('@loginButton').should('be.enabled');

        cy.intercept('POST', 'https://norma.nomoreparties.space/api/auth/login', { fixture: 'login.json' });
        cy.get('@loginButton').click();
        cy.location().should((location) => {
            expect(location.pathname).to.equal('/');
        });
    })


    //     cy.get('button').contains('Войти').as('loginButton');
    //     cy.get('@loginButton').should('exist');
    //     cy.get('@loginButton').click();
    //     cy.get('@loginButton').click();
    //     cy.location().should((location) => {
    //         expect(location.pathname).to.equal('/');
    //     });
    //     cy.get('@makeOrderButton').should('exist');
    //     cy.get('@makeOrderButton').click();
    //     cy.get('@makeOrderButton').click();
    //     cy.get('.modal_modal__4TXNT').should('exist');
    //     cy.get('.modal_modal_card__RkCwF').should('exist');
    //     cy.wait(15000);
    //     cy.get('.order-details_order_number__DUVCO').should('exist');
    //     cy.get('body').type('{esc}');

    //     cy.get('.burger-tab_burger_tab__Q47Gx').should('exist');
    //     cy.get('[href="/ingredients/643d69a5c3f7b9001cfa093c"]').should('exist');
    //     cy.get('[href="/ingredients/643d69a5c3f7b9001cfa093c"]').click();
    //     cy.get(':nth-child(2) > .modal_modal__4TXNT').should('exist');
    //     cy.get(':nth-child(2) > .modal_modal__4TXNT > .modal_modal_card__RkCwF > .modal_modal_title__f8R9L').should('exist');
    //     cy.get('.ingredient-details_ingredient_image__Is5fK').should('exist');
    //     cy.get('body').type('{esc}');
    // });
});

