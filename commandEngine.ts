export interface Command {
  action: string;
  payload: unknown;
}

export async function executeCommand(
  command: Command
) {
  return {
    id: crypto.randomUUID(),
    status: "executed",
    command
  };
}
