### Application deployed at - 
  https://random-dog-viewer.herokuapp.com/

## Design Process

Below is the design for the dog-viewer web application. React framework has been used to complete this task. I am breaking application into separate components and below is the description-

### `1. App Component-`
   This is the top level component will be injected into the index.html.This component will have no functionality as it is simply the top parent container. I will apply simple css in it to give background color to whole page(if required) and important additional component in it.

   ### No functions, state, props, inside

### `2. Dog Container Component-`
   This is the first level stateful component will be serve as the container for other component. It will contain all intial logic and will import other child components to complete its functionality.
   
### `3. Dog Search Component-`
   This is the stateful component will be serve to have seach functionality. This component will contain feature to enter the number to view dogs and select the breed of dog from dropdown. This will take all required user operations.

### `4. Dog List Component-`
   This component is child Stateless Component. This will list all the results obtained from DoG CEO api on the basis of selection made by user.


-----------------------------------------------------------------------------------------------------
 Please run below steps:-

 App is already deployed at https://random-dog-viewer.herokuapp.com/
 
 For local Please follow below commands.

1. Run below command to clone code-
   https://github.com/anish8600/tic-tac-web.git
2. Goto tic-tac-web directory and run 'npm install'. If any problem occues. Delete existing package.lock.json
3. After installation is done, run 'npm start' and application will automatically start at localhost:3000  on browser. If it gives any problem on IE, please run on Google Chrome.
4. Please test application.

-------------------------------------------------------------------------------------------------------

Timeline-
Setup & configuration - 1/2 - 1 hour
Coding - 3 hours
Testing - tested together with Dev, But final testing took 30 min with fixing smalls bugs
UI Design - 1 hour