import create from "zustand"

interface TypeStore {
    bears: number
    increasePopulation: ()=> any
    removeAllBears: ()=> any
    checkAudio: boolean
    checkVideo: boolean
    setCheckToggleAudio: ()=> any
    setCheckToggleVideo: ()=> any
    volume: number
    volumeStandard: boolean
    setVolumeStandard: any
    sharingScreen: boolean
    sharingScreenTrue: any
    sharingScreenFalse: any
    numberOfRooms: number
    setNumberOfRooms: any
    setListMemberRoom: (a: any)=> any
    listMemberRoom: any,
    x: Array<any>,
    setX: (a: any)=> any

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
    sharingScreenTrue: ()=> set((state: any)=> ({sharingScreen: !state.sharingScreen})),
    sharingScreenFalse: ()=> set((state: any)=> ({sharingScreen: false})),
    numberOfRooms: 1,
    setNumberOfRooms: ()=> set((state: any)=> ({numberOfRooms: state.numberOfRooms})),
    listMemberRoom: [],
    setListMemberRoom: ()=> set((state: any)=> ({listMemberRoom: state.listMemberRoom})),
    x: [],
    setX: ((state: any)=> ({x: state.x}))
}))