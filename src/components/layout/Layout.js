import styles from './layout.scss'

export default function Layout(props) {
  return (
    <section>
      <div>
        {props.children}
      </div>
    </section>
  )
}