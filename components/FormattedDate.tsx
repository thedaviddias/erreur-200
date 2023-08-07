const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

export function FormattedDate({ date, ...props }) {
  return (
    <time dateTime={date} {...props}>
      {dateFormatter.format(date)}
    </time>
  )
}
