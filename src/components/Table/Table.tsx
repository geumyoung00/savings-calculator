import { YearlyDataType } from '../../App'

export const Table = ({
  yearlyData,
  currentSavings,
}: {
  yearlyData: YearlyDataType[] | null
  currentSavings: string
}) => {
  return (
    // Todo: 아래 표를 조건부로 표시(결과 데이터를 사용할 수 있는 경우에만)
    // 데이터가 없으면 대체 텍스트 표시
    <table className="result">
      <thead>
        <tr>
          <th>연도</th>
          <th>연도별 총 금액</th>
          <th>연 이자</th>
          <th>이자 합계</th>
          <th>원금 합계</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData ? (
          yearlyData.map((item) => {
            const totalSavings =
              +currentSavings + item.yearlyContribution * item.year
            const totalInterests = item.savingsEndOfYear - totalSavings

            return (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{item.savingsEndOfYear.toFixed(1)}</td>
                <td>{item.yearlyInterest.toFixed(1)}</td>
                <td>{totalInterests.toFixed(1)}</td>
                <td>{totalSavings}</td>
              </tr>
            )
          })
        ) : (
          <tr>
            <td>예시 데이터 연도</td>
            <td>이자를 포함한 총 적금액</td>
            <td>한 해의 복리 누적 이자</td>
            <td>이자의 합계</td>
            <td>납입액의 원금 총액</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
