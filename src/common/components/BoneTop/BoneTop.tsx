import React, {useState} from 'react';
import style from "./BoneTop.module.css";

export type BonePositionType = 'top' | 'bottom';

type BoneTopPropsType = {
  currentBones: string
}

export const BoneTop = ({currentBones}: BoneTopPropsType) => {

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
