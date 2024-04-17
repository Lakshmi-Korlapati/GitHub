import { LightningElement,track } from 'lwc';
export default class SVGRectangle extends LightningElement {
@track plotId;
@track plotData;
columns=[
        {
            label:'Plot Number',fieldName: 'value',type:'text'
        }
    ]


    handleevent(){
        this.plotId =event.target.id;
        console.log(event.target);
        this.plotData =[{value: this.plotId}];
    }

}