import React, {useContext} from "react"
import {Context} from "../Context"

import Image from "../Components/Image"
import {getClass} from "../utils/index"

function Photos() {
    const {photos} = useContext(Context)
    const AllPhotos = photos.map((img, index) => {
        return <Image key={img.id} img={img} className={getClass(index)} />
    })
    return (
        <main className="photos">
            {AllPhotos}
        </main>
    )
}

export default Photos