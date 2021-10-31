import {
    useMemo
} from "react";

export default function useData() {
    const data = useMemo(
        () => [{
                objectId: "AUwGLXUzS2",
                Year: 2019,
                Make: "BMW",
                Model: "i3",
                Category: "Hatchback",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "4fOA1olTnP",
                Year: 2019,
                Make: "BMW",
                Model: "X6",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "Khkkd3cTWW",
                Year: 2019,
                Make: "BMW",
                Model: "X6 M",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "ac6SvvBlhb",
                Year: 2020,
                Make: "BMW",
                Model: "3 Series",
                Category: "Sedan",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "CazUpTttvZ",
                Year: 2020,
                Make: "BMW",
                Model: "7 Series",
                Category: "Sedan",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "T3bdc4539U",
                Year: 2018,
                Make: "BMW",
                Model: "5 Series",
                Category: "Sedan",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "j4NlY7OP0B",
                Year: 2019,
                Make: "BMW",
                Model: "2 Series",
                Category: "Coupe, Convertible",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "eImCDQ9hZl",
                Year: 2019,
                Make: "BMW",
                Model: "6 Series",
                Category: "Sedan",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "3cfFyWLWXy",
                Year: 2019,
                Make: "BMW",
                Model: "X4",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "Zyejxv7Vpu",
                Year: 2019,
                Make: "BMW",
                Model: "3 Series",
                Category: "Sedan, Wagon",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "NqfVtwnLNE",
                Year: 2019,
                Make: "BMW",
                Model: "4 Series",
                Category: "Convertible, Sedan, Coupe",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "PwrauEyrd4",
                Year: 2018,
                Make: "BMW",
                Model: "X2",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "4I76Z6jO2y",
                Year: 2020,
                Make: "BMW",
                Model: "X7",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "DYSdsVxKAA",
                Year: 2019,
                Make: "BMW",
                Model: "X2",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "9ABPCmmE0W",
                Year: 2019,
                Make: "BMW",
                Model: "M2",
                Category: "Coupe",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "EHQH7h28wQ",
                Year: 2017,
                Make: "BMW",
                Model: "X4",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.096Z",
                updatedAt: "2020-01-27T21:04:53.096Z"
            },
            {
                objectId: "orEyKjzBVY",
                Year: 2018,
                Make: "BMW",
                Model: "i3",
                Category: "Hatchback",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "EYyCFVO9lC",
                Year: 2019,
                Make: "BMW",
                Model: "5 Series",
                Category: "Sedan",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "pl7Iwe77eR",
                Year: 2018,
                Make: "BMW",
                Model: "X5 M",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "0APvqc4eKy",
                Year: 2019,
                Make: "BMW",
                Model: "M6",
                Category: "Coupe",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "jk6nuSOoB4",
                Year: 2019,
                Make: "BMW",
                Model: "X1",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "Zgy2YHPiFr",
                Year: 2018,
                Make: "BMW",
                Model: "7 Series",
                Category: "Sedan",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "1GDaobjF9w",
                Year: 2017,
                Make: "BMW",
                Model: "4 Series",
                Category: "Sedan, Coupe, Convertible",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "g1CfjYHwB0",
                Year: 2019,
                Make: "BMW",
                Model: "X5",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "YdYLfcBI7u",
                Year: 2019,
                Make: "BMW",
                Model: "M5",
                Category: "Sedan",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "8touuJzol8",
                Year: 2017,
                Make: "BMW",
                Model: "i3",
                Category: "Hatchback",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "x48rCm0j87",
                Year: 2020,
                Make: "BMW",
                Model: "X3",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "4GIojX7uam",
                Year: 2018,
                Make: "BMW",
                Model: "6 Series",
                Category: "Sedan, Convertible",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "KpgiY47SCS",
                Year: 2019,
                Make: "BMW",
                Model: "i8",
                Category: "Convertible, Coupe",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "tWpJWKo6QB",
                Year: 2018,
                Make: "BMW",
                Model: "M3",
                Category: "Sedan",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "gAM43xLfkN",
                Year: 2018,
                Make: "BMW",
                Model: "2 Series",
                Category: "Coupe, Convertible",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "2MuCU7D5dM",
                Year: 2019,
                Make: "BMW",
                Model: "7 Series",
                Category: "Sedan",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "nXaCgWFn2A",
                Year: 2017,
                Make: "BMW",
                Model: "M2",
                Category: "Coupe",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "3Ry3lpSSUg",
                Year: 2018,
                Make: "BMW",
                Model: "X5",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "WCMyGzf2fM",
                Year: 2019,
                Make: "BMW",
                Model: "M4",
                Category: "Coupe, Convertible",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "gAugSock9O",
                Year: 2019,
                Make: "BMW",
                Model: "8 Series",
                Category: "Coupe, Convertible",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "fcC0GlKgaX",
                Year: 2017,
                Make: "BMW",
                Model: "2 Series",
                Category: "Convertible, Coupe",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "KVOYWS4CgC",
                Year: 2019,
                Make: "BMW",
                Model: "Z4",
                Category: "Convertible",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "9F2KA03gs4",
                Year: 2017,
                Make: "BMW",
                Model: "6 Series",
                Category: "Coupe, Sedan, Convertible",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "ZBbkPistxu",
                Year: 2019,
                Make: "BMW",
                Model: "X7",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "o8bETKD7WU",
                Year: 2018,
                Make: "BMW",
                Model: "X1",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "GXHR0dydlB",
                Year: 2018,
                Make: "BMW",
                Model: "3 Series",
                Category: "Sedan, Wagon",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "eIL3I28ahI",
                Year: 2017,
                Make: "BMW",
                Model: "X1",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.096Z",
                updatedAt: "2020-01-27T21:04:53.096Z"
            },
            {
                objectId: "ESvFOSSWVR",
                Year: 2017,
                Make: "BMW",
                Model: "X5 M",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.096Z",
                updatedAt: "2020-01-27T21:04:53.096Z"
            },
            {
                objectId: "MD8zE8UZb0",
                Year: 2019,
                Make: "BMW",
                Model: "X3",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "JyAhIkFVMs",
                Year: 2018,
                Make: "BMW",
                Model: "M6",
                Category: "Coupe, Convertible",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "wnPYH1qaFj",
                Year: 2018,
                Make: "BMW",
                Model: "4 Series",
                Category: "Coupe, Sedan, Convertible",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "N0qzdGBDNB",
                Year: 2017,
                Make: "BMW",
                Model: "M3",
                Category: "Sedan",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "cs8CxcMxU3",
                Year: 2020,
                Make: "BMW",
                Model: "X5",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "f0SsdlSI79",
                Year: 2018,
                Make: "BMW",
                Model: "M4",
                Category: "Convertible, Coupe",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "jXuUTzTJ5v",
                Year: 2017,
                Make: "BMW",
                Model: "M4",
                Category: "Convertible, Coupe",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "mdyyIHJK9C",
                Year: 2018,
                Make: "BMW",
                Model: "M2",
                Category: "Coupe",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "XpuqOgbs3A",
                Year: 2017,
                Make: "BMW",
                Model: "X5",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.096Z",
                updatedAt: "2020-01-27T21:04:53.096Z"
            },
            {
                objectId: "Aqpllo88I9",
                Year: 2018,
                Make: "BMW",
                Model: "X4",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "ESYwv9o7ud",
                Year: 2018,
                Make: "BMW",
                Model: "M5",
                Category: "Sedan",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "G32t3ML3bH",
                Year: 2018,
                Make: "BMW",
                Model: "X3",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "RNVXseQb6h",
                Year: 2018,
                Make: "BMW",
                Model: "X6",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "2n7f2wg2VD",
                Year: 2018,
                Make: "BMW",
                Model: "X6 M",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "9sFitvobwF",
                Year: 2017,
                Make: "BMW",
                Model: "3 Series",
                Category: "Sedan, Wagon",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "scEFCoTDMG",
                Year: 2017,
                Make: "BMW",
                Model: "5 Series",
                Category: "Sedan",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "x4yM85AA2F",
                Year: 2017,
                Make: "BMW",
                Model: "M6",
                Category: "Coupe, Convertible",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "NTjJ5JzXBq",
                Year: 2017,
                Make: "BMW",
                Model: "7 Series",
                Category: "Sedan",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "419NV6g3OH",
                Year: 2017,
                Make: "BMW",
                Model: "X3",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.096Z",
                updatedAt: "2020-01-27T21:04:53.096Z"
            },
            {
                objectId: "kuUSMbo0Lz",
                Year: 2017,
                Make: "BMW",
                Model: "X6",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.096Z",
                updatedAt: "2020-01-27T21:04:53.096Z"
            },
            {
                objectId: "CMt62A6xlp",
                Year: 2017,
                Make: "BMW",
                Model: "i8",
                Category: "Coupe",
                createdAt: "2020-01-27T21:04:53.095Z",
                updatedAt: "2020-01-27T21:04:53.095Z"
            },
            {
                objectId: "k91iN5xbPL",
                Year: 2017,
                Make: "BMW",
                Model: "X6 M",
                Category: "SUV",
                createdAt: "2020-01-27T21:04:53.096Z",
                updatedAt: "2020-01-27T21:04:53.096Z"
            }
        ],
        []
    );

    return data;
}