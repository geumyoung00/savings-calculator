import logo from '../../assets/calculator.png'

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <h1>적금 계산기</h1>
    </header>
  )
}
