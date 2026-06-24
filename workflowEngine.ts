export function startWorkflow(
  workflow: string
) {
  return {
    workflow,
    started: true
  };
}
