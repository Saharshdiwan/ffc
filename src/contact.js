 export const loadContactPage = () => {
  const contentDiv = document.querySelector('#content');

  const contactContainer = document.createElement('div');
  const contactHeading = document.createElement('h1');
  const contactParagraph = document.createElement('p');
  const iframeMap = document.createElement('iframe');
  const contactDiv = document.createElement('div');
  const contactForm = document.createElement('form');

  const formHeading = document.createElement('h3');

  const formUserNameDiv = document.createElement('div');

  const formFirstNameDiv = document.createElement('div');
  const formFirstNameLabel = document.createElement('label');
  const formFirstNameInput = document.createElement('input');

  const formSecondNameDiv = document.createElement('div');
  const formSecondNameLabel = document.createElement('label');
  const formSecondNameInput = document.createElement('input');

  const formEmailDiv = document.createElement('div');
  const formEmailLabel = document.createElement('label');
  const formEmailInput = document.createElement('input');

  const formPhoneDiv = document.createElement('div');
  const formPhoneLabel = document.createElement('label');
  const formPhoneInput = document.createElement('input');

  const formMessageDiv = document.createElement('div');
  const formMessageLabel = document.createElement('label');
  const formMessageInput = document.createElement('textarea');

  const formSubmitButton = document.createElement('button');

  
  const contactInformation = document.createElement('div');
  const phoneInformation = document.createElement('div');
  const emailInformation = document.createElement("div");
  const emailContactText = document.createElement("p");
  const emailContact = document.createElement("a");
  const emailIcon= document.createElement('img');
  const phoneIcon=document.createElement('img');
  const phoneContactText = document.createElement("p");
  const phoneContact = document.createElement("a");
  contactInformation.classList.add('contact-info');
//phoneIcon.classList.add('fa-phone');
//emailIcon.classList.add('fa-envelope');
emailContactText.textContent='Email Adress';
emailContact.setAttribute('href', 'mailto:saharshsa29@gmail.com');
phoneContactText.textContent='Phone Number';
phoneContact.setAttribute('href', 'tel:+919106768066');

phoneIcon.src = 'components/icons/phone.svg';
emailIcon.src='components/icons/email.svg'; 

emailInformation.append(emailIcon,emailContactText,emailContact);
phoneInformation.append(phoneIcon,phoneContactText,phoneContact);
contactInformation.append(emailInformation,phoneInformation);

  const formReviewDiv = document.createElement('div');
  const formStar = document.createElement('span')
  const formReview = document.createElement('textarea');
  const formReviewButton = document.createElement('button');

  contactContainer.classList.add('contact');
  contactHeading.classList.add('page-heading');
  iframeMap.classList.add('map');
  contactDiv.classList.add('contact-container');
  contactForm.classList.add('contact-form');

  formUserNameDiv.classList.add('form-user-name-div');
  formFirstNameDiv.classList.add('input-group');
  formSecondNameDiv.classList.add('input-group');
  formEmailDiv.classList.add('input-group');
  formPhoneDiv.classList.add('input-group');
  formMessageDiv.classList.add('input-group');

  formFirstNameLabel.classList.add('label');
  formSecondNameLabel.classList.add('label');
  formEmailLabel.classList.add('label');
  formPhoneLabel.classList.add('label');
  formMessageLabel.classList.add('label');

  formFirstNameInput.classList.add('input');
  formSecondNameInput.classList.add('input');
  formEmailInput.classList.add('input');
  formPhoneInput.classList.add('input');
  formMessageInput.classList.add('input');

  contactHeading.textContent = 'Contact Us';
  contactParagraph.textContent =
    'We would love to hear from you and will do our best to respond as soon as possible.';
  formHeading.textContent = 'Review Us';

  formFirstNameLabel.textContent = 'First Name *';
  formSecondNameLabel.textContent = 'Second Name *';
  formEmailLabel.textContent = 'Email *';
  formPhoneLabel.textContent = 'Phone *';

  formMessageLabel.textContent = 'Message *';

  formSubmitButton.textContent = 'Send';

  formFirstNameLabel.setAttribute('for', 'first_name');
  formSecondNameLabel.setAttribute('for', 'second_name');
  formEmailLabel.setAttribute('for', 'email');
  formPhoneLabel.setAttribute('for', 'phone');
  formMessageLabel.setAttribute('for', 'message');

  formFirstNameInput.id = 'first_name';
  formSecondNameInput.id = 'second_name';
  formEmailInput.id = 'email';
  formPhoneInput.id = 'phone';
  formMessageInput.id = 'message';

  formFirstNameInput.name = 'first_name';
  formSecondNameInput.name = 'second_name';
  formEmailInput.name = 'email';
  formPhoneInput.name = 'phone';
  formStar.classList.add('star');
  formStar.textContent = "★"; //formstar .span nai ave??
            // <div class="rating">
            //     <span class="star" data-rating="5">★</span>
            //     <span class="star" data-rating="4">★</span>
            //     <span class="star" data-rating="3">★</span>
            //     <span class="star" data-rating="2">★</span>
            //     <span class="star" data-rating="1">★</span>
            // </div>
            // <p class="user-review">This product is amazing! I love it!</p>
     
// JavaScript to handle star rating interactivity
document.querySelectorAll(".rating").forEach(function (rating) {
  const stars = rating.querySelectorAll(".star");

  stars.forEach(function (star) {
      star.addEventListener("click", function () {
          const ratingValue = parseInt(star.getAttribute("data-rating"));

          // Reset all stars to gray
          stars.forEach(function (s) {
              s.classList.remove("active");
          });

          // Highlight selected stars
          for (let i = 0; i < ratingValue; i++) {
              stars[i].classList.add("active");
          }
      });
  });
});


  formMessageInput.name = 'message';

  formFirstNameInput.required = true;
  formSecondNameInput.required = true;
  formEmailInput.required = true;
  formPhoneInput.required = true;
  formMessageInput.required = true;
  formMessageInput.rows = '3';

  formEmailInput.type = 'email';
  formPhoneInput.type = 'tel';

  formSubmitButton.setAttribute('type', 'submit');

  iframeMap.src =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.9767224286506!2d72.57919266316512!3d23.124056900004195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e833fe724f1f1%3A0x104487f486449346!2sFunchick%20fried%20chicken!5e1!3m2!1sen!2sin!4v1694106655485!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

  formFirstNameDiv.append(formFirstNameLabel, formFirstNameInput);
  formSecondNameDiv.append(formSecondNameLabel, formSecondNameInput);
  formUserNameDiv.append(formFirstNameDiv, formSecondNameDiv);
  formEmailDiv.append(formEmailLabel, formEmailInput);
  formPhoneDiv.append(formPhoneLabel, formPhoneInput);
  formMessageDiv.append(formMessageLabel, formMessageInput);
  formReviewDiv.append(formStar);
  contactForm.append(
    formHeading,
    formUserNameDiv,
    formEmailDiv,
    formPhoneDiv,
    formMessageDiv,
    formSubmitButton
  );
  contactDiv.append(contactForm, iframeMap);
  contactContainer.append(contactHeading, contactParagraph, contactDiv);
  contentDiv.append(contactContainer);

  const initalAnimationDuration = 0.2;

  const conactFormElements = document.querySelectorAll('.contact-form > *');
  let animationDuration = initalAnimationDuration;

  for (const element of conactFormElements) {
    element.style.animationDuration = `${animationDuration}s`;
    animationDuration += initalAnimationDuration;
  }
};
