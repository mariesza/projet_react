import DataPhysique from "../models/DataPhysique.js";

const physique = [
    new DataPhysique("16-01-2022 à 01:10","vélo🚴", 78, 0,550),
    new DataPhysique("01-01-2022 à 09:10", "marche🚶", 56, 800, 252),
    new DataPhysique("05-02-2023 à 7:30", "natation🏊", 120, 9000, 350),
];


export default physique;

// constructor(date, typeOfActivity,duration,numberOfSteps,consumedCalories){

// "id": 51,
//                 "people_id": "0b3a6122-7b14-4a01-9bea-e6e185dace07",
//                 "typeOfActivity": "bike",
//                 "duration": 78,
//                 "numberOfSteps": 0,
//                 "consumedCalories": 550,
//                 "date": "2022-01-16T01:10:15.000Z"
//             },