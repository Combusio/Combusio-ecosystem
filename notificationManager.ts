export function notify(
  message: string
) {
  return {
    message,
    sent: true
  };
}
