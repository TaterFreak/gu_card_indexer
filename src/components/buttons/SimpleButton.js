import styles from './simple-button.scss'

export default function SimpleButton(props) {
  return (
  	<button onClick={props.event} className={props.toggle}>
      {props.content}
      <style jsx>{styles}</style>
    </button>
  )
}
