export const loadHomePage = () => {
  const contentDiv = document.querySelector('#content');

  const homeContainer = document.createElement('div');
  const homeTextContainer = document.createElement('div');
  const homeImage = document.createElement('img');
  const headline = document.createElement('h1');
  const homeParagraph = document.createElement('p');
  const ctaButton = document.createElement('button');
  const arrowRightIcon = document.createElement('img');
  const aboutContainer = document.createElement('div');
  const aboutTextContainer  = document.createElement('div');
  const aboutImage = document.createElement('img');
  const aboutHeadline = document.createElement('h1');
  const aboutParagraph = document.createElement('p');
  const aboutParagraph1 = document.createElement('p');
  const aboutPara = document.createElement('p');

  homeContainer.classList.add('home');
  homeTextContainer.classList.add('home-text');
  homeImage.classList.add('home-image');
  headline.classList.add('headline');
  ctaButton.classList.add('cta-button', 'home-cta-button');


  headline.textContent = 'First we eat than we do everything else !';
  homeParagraph.textContent =
    "Bless the food before us the family beside us & the love between us !";
  ctaButton.textContent = 'discover menu';

  aboutContainer.classList.add('about');
  aboutTextContainer.classList.add('about-text')
  aboutImage.classList.add('about-image');
  aboutHeadline.classList.add('about-headline');
  aboutParagraph.classList.add('about-paragraph');
  aboutParagraph1.classList.add('about-paragraph');
  aboutPara.classList.add('about-para');
  
  aboutImage.setAttribute('alt', 'about-image');
  aboutHeadline.setAttribute('alt', 'about-headline');
  aboutParagraph.setAttribute('alt', 'about-paragraph');
  aboutHeadline.textContent = 'About us';
  aboutParagraph.textContent ="We are a family owned restaurant with a special focus on the food. We love to cook and serve our customers with the best quality of food. We are proud to be a family owned restaurant with a special focus on the food. We love to cook and serve our customers with the best quality of food.";
  aboutParagraph1.textContent="Funchick Fried Chicken is a registered brand of Sarva Group of Companies. Sarva group has been involved in the production of food products and promoting many successful brands over 15 years. Sarva groups familiarity with quality food has been instrumental to our success.";
  aboutPara.textContent='The core values of group has been – Serving best quality food,Accountability,Responsibility ,Innovations...';
  aboutImage.setAttribute('src', 'components/images/about-image.png');


  arrowRightIcon.setAttribute('src', 'components/icons/arrow-right.svg');
  homeImage.setAttribute('src', 'components/images/home-image.png');
  ctaButton.setAttribute('data-tab-link', 'menu');



  ctaButton.append(arrowRightIcon);
  homeTextContainer.append(headline, homeParagraph, ctaButton);
  homeContainer.append(homeTextContainer, homeImage);
  contentDiv.append(homeContainer);
  aboutContainer.append(aboutImage,aboutTextContainer);
  aboutTextContainer.append(aboutHeadline, aboutParagraph,aboutParagraph1,aboutPara);                        
  contentDiv.append(aboutContainer);
  
};
