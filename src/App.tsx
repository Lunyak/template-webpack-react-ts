import { Counter } from './Counter'
import img from './img.png'

export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template</h1>
      <Counter />
      <img src={img} alt="123" />
    </>
  )
}
