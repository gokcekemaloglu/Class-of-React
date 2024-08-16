import React from 'react'
import { DetailContainer, DetailPart, HeaderContainer, ImgContainer, IngredContainer, OtherPart } from './DetailsStyles'
import dietSvg from "../../assets/diet.svg"
import { useLocation } from 'react-router-dom'

const Details = () => {

  const {state: {recipe}} = useLocation()

  console.log(recipe);
  
  return (
    <DetailContainer>
      <HeaderContainer>
        <h1>{recipe.label}</h1>
        <img src={dietSvg} alt="" />
      </HeaderContainer>

      <DetailPart>
        <OtherPart>
          <>NUTRIENS</>
          <span>
            {recipe.totalNutrients.CA.label}
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}
          </span>
          <span>
            {recipe.totalNutrients.CHOCDF.label}
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}
          </span>
          <span>
            {recipe.totalNutrients.CHOLE.label}
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}
          </span>
          <span>
            {recipe.totalNutrients.ENERC_KCAL.label}
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </span>
          <span>
            {recipe.totalNutrients.FAT.label}
            {Math.round(recipe.totalNutrients.FAT.quantity)}
            {recipe.totalNutrients.FAT.unit}
          </span>
          <span>
            {recipe.totalWeight.toFixed(2)}
          </span>
          <span>
            Calories: {Math.round(recipe.calories)}
          </span>
          <span>
            {recipe.digest.slice(0,4).map((item, index)=>(
              <p key={index}>
                {item.label}: {item.total.toFixed(2)} {item.unit}
              </p>
            ))}
          </span>
        </OtherPart>
        <ImgContainer>
          <img src={recipe.img} alt="" />
        </ImgContainer>
        <IngredContainer>
            {recipe.ingredientLines.map((a,b)=>(
              <div>
                <p>
                  {b+1} - {a}
                </p>
              </div>
            ))}
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  )
}

export default Details