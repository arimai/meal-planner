import React from 'react';
import Meal from '../../shared/Meal';
import Tabs, {Tab} from '../../shared/Tabs';
import NotFound from '../../shared/NotFound';
import Nav from '../../shared/Nav';

import './Plan.css';

const createContent = (heading,dataOb,index) => {
  let contentArr = [];
  for(let mealType in dataOb){
    let content = dataOb[mealType][index];
    if(content){
      contentArr.push({label:mealType,content:content})
    }
  }
  return (
    <Tab heading =  { heading } key={`Tab__${index}`} >
      {
        contentArr.map((elem,i) => {
          let recipe = elem.content.recipe;
          let dietLabels = recipe.dietLabels ? recipe.dietLabels : {};
          let healthLabels =  recipe.healthLabels ? recipe.healthLabels : {};

          return (
            <Meal type={elem.label}
                  imgSrc={ recipe.image ? recipe.image : null }
                  heading={ recipe.label ? recipe.label : null }
                  source={ recipe.source ? recipe.source : null }
                  tags={[...dietLabels, ...healthLabels]}
                  url={ recipe.url ? recipe.url : "#"}
                  key={`Meal__${i}_${index}`}
            />
          )
        })
      }
    </Tab>
  )
}

const createTabs = (count,data) => {
  let tabs = [];
  for(let i=0;i<count;i++){
    let content = createContent(`Day ${i+1}`, data, i);
    tabs.push(content)
  }
  return (
    <Tabs defaultIndex={0} className="Plan__tabs" >{tabs.map((tab) => tab)}</Tabs>
  )
}

const Plan = (props) => {
  if(!props.location || !props.location.state || !props.location.state.data) return (
    <div>
      <Nav />
      <NotFound />
    </div>
  )
  let param = props.location.state.data;
  return(
    <div className="Plan">
      <Nav />
      {createTabs(param.num,param.data)}
    </div>
  )
}

export default Plan;
