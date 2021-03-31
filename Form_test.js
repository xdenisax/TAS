Feature('Form');

Scenario('Incarcarea corecta a formularului', ({ I }) => {
    I.amOnPage('/pcgarage-tv/');
    I.see('PC Garage TV', 'h1');
    I.see('Contacteaza echipa PC Garage TV', 'h2');
    I.see('Ai un mesaj sau o intrebare pentru Madalin sau Razvan? Poti sa-i contactezi folosind formularul de mai jos:', 'p');
   
    I.see('Mesajul dumneavoastra:', 'label');
    I.seeElement('textarea#cformmessage.form-control');
    
    I.see('Nume:*', 'label');
    I.seeElement('input#cformname.form-control');
    
    I.see('Email:*', 'label');
    I.seeElement('input#cformemail.form-control');
    
    I.see('Telefon:*', 'label');
    I.seeElement('input#cformtelephone.form-control');
    
    I.see('Localitate:', 'label');
    I.seeElement('input#location.form-control');


    I.see('Doresc sa primesc newsletter-ul saptamanal cu noutatile si campaniile exclusive PC Garage (dispretuim spam-ul la fel de mult ca tine, te rugam sa citesti despre confidentialitate).',
    'p.checkbox');
    I.see('Sunt de acord cu procesarea datelor personale conform Politicii de Confidentialitate.', 
    'p.checkbox')
    I.see('confidentialitate','a');
    I.see('Politicii de Confidentialitate','a');

    I.see('Trimite', 'button.button-custom-red');
    I.seeElement('button.button-custom-red');
});


Scenario('Deschiderea paginii de confidențialitate', ({ I }) => {
    I.amOnPage('/pcgarage-tv/');
    I.click('confidentialitate');
    I.amOnPage('/info/prima-vizita/respectarea-confidentialitatii/?ref=cf-newsletter');
    I.saveScreenshot('Deschiderea paginii de confidențialitate.png', false);
});

Scenario('Deschiderea paginii de Politică de confidențialitate', ({ I }) => {
    I.amOnPage('/pcgarage-tv/');
    I.click('Politicii de Confidentialitate');
    I.amOnPage('/info/prima-vizita/general-data-protection-regulation/');
    I.saveScreenshot('Deschiderea paginii de Politică de confidențialitate.png', false);
});

Scenario('Aparitia erorilor pe input-urile obligatorii', ({ I }) => {
    I.amOnPage('/pcgarage-tv/');
    I.fillField('Email:*','miles@');
    I.fillField('Nume:*','');
    I.fillField('Telefon:*','07');
    I.pressKey('Enter');

    I.seeElement('label#cformname-error');
    I.seeElement('label#cformemail-error');
    I.seeElement('label#cformtelephone-error');
});