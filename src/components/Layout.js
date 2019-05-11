export default function Layout(props) {
  return (
    <section>
      <div>
        {props.children}
      </div>
      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: repeat(4, 22%);
          justify-content: space-between;
        }
      `}</style>
    </section>
  )
}
