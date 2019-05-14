import styles from './grid.scss'

export default function Grid(props) {
  return (
    <section>
      <div>
        {props.children}
      </div>
      <style jsx>{styles}</style>
    </section>
  )
}
