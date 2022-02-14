# Submit Expense
This application was boostraped with create-react-app. 

## Application folder structure 
```
|--App
  |--__tests__
  |--assets
    |--css
    |--fonts
  |--components
    |--form
      |--FormInput.tsx
      |--Label.tsx
      |--index.ts
    |--modal
      |--index.ts
      |--ModalContent.tsx
      |--ModalFooter.tsx
      |--ModalHeader.tsx
      |--SubmitExpenseModal.tsx
    |--svg
      |--AppIcon.tsx
      |--CalendarIcon.tsx
      |--CloseModalIcon.tsx
      |--index.ts
  |--helpers
    |--utils.ts
  |--interface
    |--form
      |--FormInputProps.ts
      |--FormValues.ts
      |--LabelProps.ts
    |--index.ts
    |--ModalProps.ts
    |--SubmitExpenseModalProps.ts
    |--SVGProps.ts
  |--pages
    |--index.ts
    |--SubmitExpense.tsx
```

## Run the App 
To the run the application
- clone the project 
```shell
git clone https://github.com/DataSciGeek/technical-test.git
```
- Open the application in your preferred editor
- Install the dependencies. To install the dependencies, navigate to the root folder and use the command below. 
```
yarn add
```
- Run the application 
```
yarn start
```

## Testing
Use the commands below to install the modules for required testing
```
yarn add enzyme enzyme-adapter-react-16 --dev
yarn add react-test-renderer --dev 
```  
- Run test. Launches the test runner in interactive watch mode. 
```
yarn test
```


## Reference 
- [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html)
- [Test Utilities](https://reactjs.org/docs/test-utils.html)
- [React Enzyme](https://enzymejs.github.io/enzyme/)
- [Deployment](https://facebook.github.io/create-react-app/docs/deployment)