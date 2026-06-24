export function connectBackend(
  service: string
) {
  return {
    service,
    connected: true
  };
}
