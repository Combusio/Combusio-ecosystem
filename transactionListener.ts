export async function listenTransaction(
  signature: string
) {
  return {
    signature,
    detected: true
  };
}
