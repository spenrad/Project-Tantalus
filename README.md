# Project Tantalus

## Description
Project Tantalus is a resource to to search for recipes or restaurants. Restaurants can be searched by city and cuisine type. Recipes can be searched based on main ingredient, meal type, and cuisine type. Search parameters use both textfields and dropdown menus. Searches are performed using themealdb and zomato. Modals are made using micromodals and form validation is done using parsley. All these resources are cited below.

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Git]
* [Github](https://github.com/)
* [Javascript](https://www.javascript.com/)
* [themealdb](https://www.themealdb.com/api.php)
* [zomato](https://developers.zomato.com/api)
* [parsley](https://parsleyjs.org/)
* [Micromodal](https://micromodal.now.sh)

## Deployed Link

* [See Live Site](https://spenrad.github.io/Project-Tantalus/)

## Preview of Working Site

![Image](/images/tantalus.gif)


## Code Snippet
This code snippet shows the html that creates the modal from the Micromodal.js library.

```html
    <div class="modal micromodal-slide" id="modal-cook0" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
         <!-- Body of Modal for Recipes -->
         <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-cook0-title">
          <header class="modal__header">
            <h2 class="modal__title" id="modal-cook0-title">
            </h2>
            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
          </header>
          <main class="modal__content" id="modal-cook0-content">
            <div class="grid-x">
              <div class="cell small-12 medium-4">
                <ol class= "recipeStr" id="recipeStr0">
                </ol>
              </div>
              <div class= "cell small-12 medium-7">
                <p class= "instructionStr" id="instructionStr0">
                </p>
             </div>
          </div>
          </main>
          <footer class="modal__footer">
            <button class="modal__btn modal__btn-primary">Continue</button>
            <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>
          </footer>
        </div>
        <!-- End Body of Modal for Recipes -->
      </div>
    </div>
```

Using Micromodal.js is extremely simple.

The important parts to focus on are the unique id of the modal "modal-cook0"

The modal will trigger when a target link or button with the attritbute of data-micromodal-trigger="[id name]" is clicked upon.

Micromodal takes care of the heavy lifting for you. No custom javascript is needed, all that is required is the cdn in your body and the function MicroModal.init() in your javascript file.

The minimum styling below is recommended so that the modal can be hidden and triggered appropriately
```
.modal {
  display: none;
}

.modal.is-open {
  display: block;
}
````


## Authors
* **Jaja Brown**

* **Raffi Lepejian** 

* **Spencer Christy**

## Contact Information

- [Github: Jaja Brown](https://github.com/jbrown827)
- [Linkedin: Jaja Brown](https://www.linkedin.com/in/jaja-brown-a42261201/)

- [Github: Raffi Lepejian](https://github.com/rslepejian)
- [Linkedin: Raffi Lepejian](https://linkedin.com/in/raffi-lepejian-071876153)

- [Github: Spencer  Christy](https://github.com/spenrad)
- [Linkedin: Spender Christy](https://www.linkedin.com/in/spencer-christy-543b84b3/)