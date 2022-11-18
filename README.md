The task is to implement this design in react following these rules:
[✓] Shouldn't use hooks.
[✓] Shouldn't use redux.
[✓] File types should be js + jsx + scss
● Folder structure:
  ○ [✓] public/images for static images.
  ○ [✓] src/images for dynamic images (dummy data images).
  ○ [✓] src/services for api calls (dummy data for the test).
  ○ [✓] src/components for other react components.
  ○ [✓] src/pages for router pages.
[✓] Should depend on two colors in css variables ( --primary-color , --secondary-color ).
[] Data should be passed via props or returned by an api.
[] Should use lazy loading at least at one component.
[] The only required functionality is “add to cart”.
● add to cart functionality can be divided in 2 cases:
○ Empty cart:
  ○ [] Cart icon should have a badge containing 0 when cart is empty
  ○ [] Clicking on the top cart icon should show the empty cart dropdown
○ Non empty cart:
  ○ [] Cart icon should have a badge containing the number of cart items
  ○ [] Clicking on the top cart icon should show cart items dropdown
  ○ [] In both cases Pressing the "Add to cart" button should increment the items at cart by quantity.
● Task should be delivered as a github public repository and deployed to github pages..