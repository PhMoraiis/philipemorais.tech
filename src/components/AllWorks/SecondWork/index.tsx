import Description from './Description'
import Project from './Project'

const SecondWork = () => {
  return (
    <section className="flex flex-col lg:flex-row mx-auto lg:max-w-desktop max-w-mobile lg:gap-8 gap-6 mb-8">
      <Description />
      <Project />
    </section>
  )
}

export default SecondWork