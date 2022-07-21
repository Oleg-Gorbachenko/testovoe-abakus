import React, {useState} from 'react';
import style from "./BoneBottom.module.css";
import {BonePositionType} from "../BoneTop/BoneTop";

type BoneBottomPropsType = {
  currentBones: string
}
export const BoneBottom = ({currentBones}: BoneBottomPropsType) => {

  const [position, setPosition] = useState<BonePositionType>('top')

  const onBoneClick = () => {
    position === 'top' ? setPosition('bottom') : setPosition('top')
  }

  const boneClassName = `${position === 'top' ? style.boneTop : style.boneBottom}`
  return (
    <>
      <img className={boneClassName} src={currentBones} alt="bone" onClick={onBoneClick}/>
    </>
  );
};
