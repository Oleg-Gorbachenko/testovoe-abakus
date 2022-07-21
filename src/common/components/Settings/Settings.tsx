import React, {ChangeEvent} from 'react';
import style from './Settings.module.css';
import {AmountRodsType} from "../../../App";

type SettingsPropsType = {
  setCurrentAmountRods: (currentAmountRods: number) => void
  amountRods: AmountRodsType[]
  maxValue: number
  minValue: number
}

export const Settings = ({setCurrentAmountRods, amountRods, maxValue, minValue}: SettingsPropsType) => {

  const onBottomInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let currentValue = +e.currentTarget.value;
    if (currentValue < 4) {
      setCurrentAmountRods(4)
    }
    setCurrentAmountRods(Math.floor(currentValue / 4))
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentAmountRods(+e.currentTarget.value)
  }

  return (
    <div className={style.settings}>
      <div className={style.inputBlock}>
        <div className={style.inputBlock__inputText}>{'Количество стержней:'}</div>
        <input
          max={maxValue}
          min={minValue}
          value={amountRods.length}
          onChange={onInputChange}
          className={style.inputBlock__input}
          type="number"/>
      </div>
      <div className={style.inputBlock}>
        <div className={style.inputBlock__inputText}>{'Количество верхних косточек:'}</div>
        <input
          max={maxValue}
          min={minValue}
          value={amountRods.length}
          onChange={onInputChange}
          className={style.inputBlock__input}
          type="number"/>
      </div>
      <div className={style.inputBlock}>
        <div className={style.inputBlock__inputText}>{'Количество нижних косточек:'}</div>
        <input
          max={80}
          min={4}
          step={4}
          value={amountRods.length * 4}
          onChange={onBottomInputChange}
          className={style.inputBlock__input}
          type="number"/>
      </div>
    </div>
  );
};
