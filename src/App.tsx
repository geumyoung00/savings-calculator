import logo from './assets/calculator.png';

type UserInputType = {
	'current-savings': string;
	'yearly-contribution': string;
	'expected-return': string;
	duration: string;
};

function App() {
	const calculateHandler = (userInput: UserInputType) => {
		// 양식이 제출되면 트리거되어야 합니다.
		// 양식의 제출 이벤트에 직접 바인딩하는 방법이 아닐지도?

		const yearlyData = []; // per-year results

		let currentSavings = +userInput['current-savings']; // 이 입력 개체의 모양을 자유롭게 변경해 보세요.
		const yearlyContribution = +userInput['yearly-contribution']; // 상동
		const expectedReturn = +userInput['expected-return'] / 100;
		const duration = +userInput['duration'];

		// 아래 코드는 연간 결과(총 저축액, 이자 등)를 계산합니다.
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			yearlyData.push({
				// 배열에 푸시된 데이터의 모양을 자유롭게 변경하세요!
				year: i + 1,
				yearlyInterest: yearlyInterest,
				savingsEndOfYear: currentSavings,
				yearlyContribution: yearlyContribution,
			});
		}

		// yearlyData를 사용
	};

	return (
		<div>
			<header className="header">
				<img src={logo} alt="logo" />
				<h1>적금 계산기</h1>
			</header>

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

			{/* Todo: 아래 표를 조건부로 표시(결과 데이터를 사용할 수 있는 경우에만)*/}
			{/* 데이터가 없으면 대체 텍스트 표시 */}

			<table className="result">
				<thead>
					<tr>
						<th>연도</th>
						<th>연도별 총 금액</th>
						<th>연 이자</th>
						<th>이자 합계</th>
						<th>연 납입액 원금</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>연도</td>
						<td>이자를 포함한 총 적금액</td>
						<td>한 해의 복리 누적 이자</td>
						<td>한 해 이자의 합계</td>
						<td>한 해 납입액의 원금 총액</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default App;
