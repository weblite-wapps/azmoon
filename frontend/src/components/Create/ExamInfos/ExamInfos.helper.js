export const hasErro = ({
  title,
  context,
  questionCount,
  duration,
  startTime,
  endTime,
}) => {
  if (
    !title ||
    !context ||
    !questionCount ||
    !duration ||
    !startTime ||
    !endTime
  ) {
    return false
  } else if (!title) {
    return { title: true }
  }
}
