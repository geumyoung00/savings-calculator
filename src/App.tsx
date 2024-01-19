import { Form } from './components/Form/Form'
import { Header } from './components/Header/Header'
import { Table } from './components/Table/Table'

type UserInputType = {
  'current-savings': string
  'yearly-contribution': string
  'expected-return': string
  duration: string
}

function App() {
  const calculateHandler = (userInput: UserInputType) => {
    // 양식이 제출되면 트리거되어야 합니다.
    // 양식의 제출 이벤트에 직접 바인딩하는 방법이 아닐지도?

    const yearlyData = [] // per-year results

    let currentSavings = +userInput['current-savings'] // 이 입력 개체의 모양을 자유롭게 변경해 보세요.
    const yearlyContribution = +userInput['yearly-contribution'] // 상동
    const expectedReturn = +userInput['expected-return'] / 100
    const duration = +userInput['duration']

    // 아래 코드는 연간 결과(총 저축액, 이자 등)를 계산합니다.
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn
      currentSavings += yearlyInterest + yearlyContribution
      yearlyData.push({
        // 배열에 푸시된 데이터의 모양을 자유롭게 변경하세요!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      })
    }

    // yearlyData를 사용
  }

  return (
    <div>
      <Header />
      <Form />
      <Table />
    </div>
  )
}

export default App
