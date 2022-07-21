import React, {useState} from 'react';
import style from './App.module.css';
import {Abakus} from "./common/components/Abakus";
import rods from './common/images/Frame 33.png';
import rods1 from './common/images/Frame 33 (1).png';
import bones from './common/images/Vector 6.png';
import bones1 from './common/images/kosti.png';
import {v1} from "uuid";
import {Settings} from "./common/components/Settings";

export type AmountRodsType = {
  id: string
  rods: string
}

export function App() {

  const [currentRods, setCurrentRods] = useState<string>(rods1)
  const [currentBones, setCurrentBones] = useState<string>(bones1)
  const [amountRods, setAmountRods] = useState<AmountRodsType[]>([{id: v1(), rods}])

  const minValue = 1
  const maxValue = 20

  const setCurrentAmountRods = (currentAmountRods: number) => {
    let newAmountRods = [{id: v1(), rods}];
    if (currentAmountRods > minValue && currentAmountRods <= maxValue) {
      for (let i = 0; i <= currentAmountRods; i++) {
        setAmountRods([...amountRods, ...newAmountRods])
      }
    }
    if (currentAmountRods < amountRods.length && currentAmountRods >= minValue) {
      amountRods.length = currentAmountRods
      setAmountRods(amountRods.slice(0, currentAmountRods))
    }
  }

  const onChangeRodsClick = () => {
    setCurrentRods(currentRods === rods1 ? rods : rods1)
  }

  const onChangeBonesClick = () => {
    setCurrentBones(currentBones === bones1 ? bones : bones1)
  }

  const abakusContainerClassName = `${currentRods === rods1 ? style.abakusContainer1 : style.abakusContainer}`

  const abakus = amountRods.map(({id}) => <Abakus key={id}
                                                  currentRods={currentRods}
                                                  currentBones={currentBones}/>)

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.themeWrapper}>
          <div className={style.changeTheme} onClick={onChangeRodsClick}>Цвет контура</div>
          <div className={style.changeTheme} onClick={onChangeBonesClick}>Цвет косточек</div>
        </div>
        <Settings
          setCurrentAmountRods={(currentAmountRods) => setCurrentAmountRods(currentAmountRods)}
          minValue={minValue}
          maxValue={maxValue}
          amountRods={amountRods}/>
      </div>
      <div className={style.container}>
        <div className={abakusContainerClassName}>
          {abakus}
        </div>
      </div>
    </div>
  );
}
