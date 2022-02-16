import create from "zustand"

interface TypeStore {
    bears: number
    increasePopulation: ()=> any
    removeAllBears: ()=> any
    checkAudio: boolean
    checkVideo: boolean
    setCheckToggleAudio: ()=> any
    setCheckToggleVideo: ()=> any,
    volume: number,
    volumeStandard: boolean,
    setVolumeStandard: any
    sharingScreen: boolean,
    sharingScreenTrue: any


}
export const useStore= create<TypeStore>(set=> ({
    bears: 0,
    increasePopulation: ()=> set((state: any)=> ({bears: state.bears + 1})),
    removeAllBears: ()=> set({ bears: 0 }),
    checkAudio: true,
    checkVideo: true,
    setCheckToggleAudio: ()=> set((state: any)=> ({checkAudio: !state.checkAudio})),
    setCheckToggleVideo: ()=> set((state: any)=> ({checkVideo: !state.checkVideo})),
    volume: 0,
    volumeStandard: false,
    setVolumeStandard: ()=> set((state: any)=> ({volumeStandard: !state.volumeStandard})),
    sharingScreen: false,
    sharingScreenTrue: ()=> set((state: any)=> ({sharingScreen: !state.sharingScreen}))
}))