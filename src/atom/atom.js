import { atom } from "recoil";


export const modalState = atom({
    key: "modalState",
    default: false,
})


export const movieState = atom({
    key: "movieState",
    default: null,
})

export const movieDetailState = atom({
    key: "movieDetailState",
    default: null,
})