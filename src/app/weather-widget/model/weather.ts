export class Weather {
    constructor(
        public temp: number,
        public summary: string,
        public wind: number,
        public humidty: number,
        public icon: string
    ) { }
}