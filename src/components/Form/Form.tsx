import React from 'react'
import { UserInputType } from '../../App'

export const Form = ({
  calculateHandler,
  resetYearlyData,
}: {
  calculateHandler: (userInput: UserInputType) => void
  resetYearlyData: () => void
}) => {
  const onSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const currentSavingsValue = e.target['current-savings'].value
    const yearlyContribution = e.target['yearly-contribution'].value
    const expectedReturn = e.target['expected-return'].value
    const duration = e.target['duration'].value

    calculateHandler({
      'current-savings': currentSavingsValue,
      'yearly-contribution': yearlyContribution,
      'expected-return': expectedReturn,
      duration: duration,
    })
  }

  const resetHandler = () => {
    resetYearlyData()
  }
  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">원금 ($)</label>
          <input type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">연납입액 ($)</label>
          <input type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">적용 이율 (%, 연)</label>
          <input type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">예치 기간 (years)</label>
          <input type="number" id="duration" />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          초기화
        </button>
        <button type="submit" className="button">
          계산하기
        </button>
      </p>
    </form>
  )
}
