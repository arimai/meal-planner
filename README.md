# Meal planner
 - A web application to plan what you eat daily in accordance to dietary needs. 
 - Please find the [demo here](https://arimai.github.io/meal-planner/#/).
 - This project was bootstrapped with [create-react-app](https://github.com/facebookincubator/create-react-app)
 - This project does not make use of any external CSS frameworks. Excuse the [sassiness](http://sass-lang.com/). :wink:
 - This project has been designed mobile-first and makes use of [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) extensively.

#### Technology tags
- React
- SASS
- Flexbox
- [Edamam](https://www.edamam.com/) recipe search API

#### Future Ideas
- Adding a grocery list aggregating all ingredients from the suggested meals
- Creating more selection criteria for health concerns such as PCOD, Diabetes, etc by collecting and analyzing data from several health and nutrition websites.
 
#### Project architecture
```
|-src
    |-components
      |-shared : All the components shared across the application
      |-page : Container components that serve as pages and use the shared components
    |-partials : Sass folder to include any partial sass files and a manifest file that imports all partials
    |-utils : Helper folder to contain any files that help the application, in this case, data fetching from the Edamam API
    |-App.js : The container component that decides how the app is navigated
    |-index.js : The JavaScript entry file 
    |-global.scss : Sass file that contains global application styles
```

#### Learnings through this project

- The Edamam API allows to query for recipes based on several parameters. However not all of them return apt results.
I had to tweak my survey form to include only those fields that successfully returned some results.
- Having components that don't require to maintain state should be written as stateless components. 
Some of the advantages of this approach is nicely discussed in [this](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc) article.


#### Note to fork and run this project
- Run `npm i`
- Please replace the lines in the file : `meal-planner/src/utils/data/data.js` with your own edamam ID and edamam API key. Thanks!
```
const API = {
  ID : "YOUR_EDAMAM_ID",
  KEY : "YOUR_EDAMAM_API_KEY",
  URL : "https://api.edamam.com/search?",
}
```
Make sure you make an API ID and Key from the [Recipe Search API](https://developer.edamam.com/edamam-docs-recipe-api)
- `npm run start` to start the development server

