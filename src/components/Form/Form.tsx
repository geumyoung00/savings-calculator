export const Form = () => {
  return (
    <form className="form">
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
        <button type="reset" className="buttonAlt">
          초기화
        </button>
        <button type="submit" className="button">
          계산하기
        </button>
      </p>
    </form>
  )
}
