export class RegistroVotaciones {

    public format: string;
    public text: string;
    public created: Date;

    constructor ( format: string, text: string ) {

        this.format = format;
        this.text = text;

        this.created = new Date();

    }

}