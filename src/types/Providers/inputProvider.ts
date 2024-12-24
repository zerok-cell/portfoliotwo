export interface InputProviderContext {
    name: string;
    value: string | number,
}
export type startTracking =  (key:string) => void;
export type stopTracking =  (key:string) => void;
export type updateTrackValue =  (key:string,value: string) => void;

export interface TrackingInstruments{
    startTracking: startTracking
    stopTracking: stopTracking
    updateTrackValue: updateTrackValue

}


export interface IdenificatorsInputProvider {
    inputField:{[key:string]:InputProviderContext},
    trackInstrument?:TrackingInstruments
}
