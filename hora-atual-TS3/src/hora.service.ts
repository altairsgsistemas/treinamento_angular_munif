export class HoraService {

    private getHora(): String {
        const data = new Date();
        const horaAtual = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
        const formatada = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
        return formatada;
    }

    generateHoras(delay: number, callback: (hora: String) => void){
        callback(this.getHora());
        setInterval(()=>callback(this.getHora()), delay);
    }

}