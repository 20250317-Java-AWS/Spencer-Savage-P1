export interface Comic{
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
}

export function emptyComic(): Comic{
    return {
        month: "",
        num: 0,
        link: "",
        year: "",
        news: "",
        safe_title: "",
        transcript: "",
        alt: "",
        img: "",
        title: "",
        day: ""
    }
}