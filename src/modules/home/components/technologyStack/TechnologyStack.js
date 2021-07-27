import React from 'react';

import { TechItem } from '../techItem/TechItem';

import './technologyStack.scss';

export const TechnologyStack = () => (
  <div>
    <h2 className="technology-stack-title">Technology Stack</h2>
    <TechItem 
      icon={'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'} 
      href={'https://reactjs.org/'} 
      title={'React'}
    />
    <TechItem 
      icon={'https://redux.js.org/img/redux.svg'} 
      href={'https://redux.js.org/'} 
      title={'Redux'}
    />
    <TechItem 
      icon={'https://miro.medium.com/max/600/1*i1yreXvK0kGrS9_uy5qKHQ.jpeg'} 
      href={'https://react-redux.js.org/'} 
      title={'React Redux'}
    />
    <TechItem 
      icon={'https://static-00.iconduck.com/assets.00/react-router-icon-512x279-zswz065s.png'} 
      href={'https://reactrouter.com/web/guides/quick-start'} 
      title={'React Router'}
    />
    <TechItem 
      icon={'https://redux.js.org/img/redux.svg'} 
      href={'https://github.com/reduxjs/redux-thunk'} 
      title={'Redux Thunk'}
    />
    <TechItem 
      icon={'https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png'} 
      href={'https://formik.org/'} 
      title={'Formik'}
    />
    <TechItem 
      icon={'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg'} 
      href={'https://create-react-app.dev/docs/adding-a-sass-stylesheet/'} 
      title={'Sass Stylesheet'}
    />
    <TechItem 
      icon={'https://material-ui.com/static/logo_raw.svg'} 
      href={'https://material-ui.com/'} 
      title={'Material-UI'}
    />
    <TechItem 
      icon={'https://cdn.worldvectorlogo.com/logos/fontawesome-1.svg'} 
      href={'https://fontawesome.com/'} 
      title={'Font Awesome'}
    />
    <TechItem 
      icon={'https://axios-http.com/assets/logo.svg'} 
      href={'https://axios-http.com/'} 
      title={'Axios'}
    />
    <TechItem 
      icon={'https://avatars.githubusercontent.com/u/59565269?s=200&v=4'} 
      href={'https://github.com/uuidjs/uuid'} 
      title={'uuid'}
    />
    <TechItem 
      icon={'https://image.flaticon.com/icons/png/512/136/136443.png'} 
      href={'https://jsonplaceholder.typicode.com/'} 
      title={'{JSON} Placeholder'}
    />
    <TechItem 
      icon={'https://lh3.googleusercontent.com/yQq2WZi9-iZeUuBwJkrLq-7KVnaB_aIBgP8uqjT3vdIi6HC5v7Vni83rTQtk-WuSiZ_jcQ3I1hmXB03DNVFGX5nRcw=w128-h128-e365-rj-sc0x00ffffff'} 
      href={'https://github.com/zalmoxisus/redux-devtools-extension'} 
      title={'Redux DevTools Extension'}
    />
    <TechItem 
      icon={'https://image.flaticon.com/icons/png/512/25/25231.png'} 
      href={'https://github.com/tschaub/gh-pages'} 
      title={'gh-pages'}
    />
  </div>
);
