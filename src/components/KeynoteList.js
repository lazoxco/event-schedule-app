import KeynoteSummary from './KeynoteSummary'

const KeynoteList = ({keynotes}) => {
  return (
    <div>
      { keynotes && keynotes.map(keynote => {
        return (
          <KeynoteSummary keynote={keynote} key={keynote.id}/>
        )
      })}
    </div>
  )
}

export default KeynoteList