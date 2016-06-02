export class Message {
    Text: string;
    Recipient: string;
    Sender: string;
    Channel: boolean

    constructor(sender: string, channel: boolean, text: string) {
        this.Text = text;
        this.Sender = sender;
        this.Channel = channel;
    }
}