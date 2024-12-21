"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const Photos = () => {
    const [photosData, setPhotosData] = useState<Photo[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/photos")

            const data = await res.json()

            setPhotosData(data)
        }
        fetchData()

    }, [])

    return (
        <div>
            <h1>Photos</h1>
            <ul>
                {
                    photosData.map((photo) => {
                        return (
                            <li key={photo.id}>
                                <Image src={photo.url}  
                                    alt={photo.title}
                                    width={100}
                                    height={100}
                                    className=""
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Photos