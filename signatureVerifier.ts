export async function verifySignature(
  signature: string
) {
  return {
    valid: true,
    signature
  };
}
