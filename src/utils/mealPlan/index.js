import { getAPIData } from '../data';

const getPlan = (data) =>{
  const { ID, KEY, URL } = getAPIData();
  let queryObj = buildQuery(data,ID,KEY);
  let promises = [], result = {};
  for(let key in queryObj){
    let str = encodeURI(URL + queryObj[key]);
    promises.push(
      fetch(str)
      .then((res) => res.json())
      .then((data) => {
        result[key] = data.hits;
      })
      .catch((err) => console.error(err))
    );
  }
  return Promise.all(promises).then(() => {
    return result;
  });
}

//returns an object of query strings with meal-types as keys
const buildQuery = (data, ID, KEY) => {
  if(!data.plan || !data.meals || !data.calories || !data.diet){
    return false;
  }
  const type = parseInt(data.plan,10);
  const count =  data.meals.length;
  const calories = {
    min: Math.round(parseInt(data.calories.min,10)/count),
    max: Math.round(parseInt(data.calories.max,10)/count),
  }
  let health = "";
  if(data.health){
    health = stitch(data.health,"health");
  }
  let labelArr = data.meals;
  let queries = {};
  for(let i=0;i<count;i++){
    let str = labelArr[i];
    let query = `q=${str}&app_id=${ID}&app_key=${KEY}&to=${type}&diet=${data.diet}${health}&calories=${calories.min}-${calories.max}`;
    queries[str]= query;
  }
  return queries;
}

const stitch = (ob, label) => {
  let res="&";
  for(let i in ob){
    if(ob[i].toString() === "true"){
        res+=`${label}=${i}&`;
    }
  }
  //remove that last ampersand
  return res.slice(0,-1);
}

export default getPlan;
