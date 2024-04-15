import { MessagingProps } from "../classes/interface/messagingProps";

export class Messaging implements MessagingProps {
  sendMessage(msg: string): void {
    console.log(`Message sent: ${msg}`);
  }
}
