# Adding SCSS to create-react-app and integrating tailwind to react application

- npm install sass

  - This will install the sass dependency in the react-application. As a result all the'.scss' file will be converted to '.css'
  - Import this file either in App.js or at the component level eg: './styles/Body.scss'

- For certain '.scss' files to be available to all components ( eg: mixins, variables), perform npm i sass-resources-loader
- configure webpack.config.js with the below logic
  {
  loader: 'sass-resources-loader',
  resources : [path of the resources you want to avail]
  }
