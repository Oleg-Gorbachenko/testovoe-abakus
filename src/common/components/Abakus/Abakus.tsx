import React from 'react';
import style from './Abakus.module.css';
import {BoneTop} from "../BoneTop";
import {BoneBottom} from "../BoneBottom";
import rods1 from '../../../common/images/Frame 33 (1).png';

type AbakusPropsType = {
  currentRods: string
  currentBones: string
}

export const Abakus = ({currentRods, currentBones}: AbakusPropsType) => {

  const abakusClassName = `${currentRods === rods1 ? style.abakus1 : style.abakus}`

  return (
    <div>
      <div className={abakusClassName}>
        <div className={style.abakusTop}>
          <BoneTop currentBones={currentBones}/>
        </div>
        <div className={style.abakusBottom}>
          <BoneBottom currentBones={currentBones}/>
          <BoneBottom currentBones={currentBones}/>
          <BoneBottom currentBones={currentBones}/>
          <BoneBottom currentBones={currentBones}/>
        </div>
      </div>
    </div>
  );
};
