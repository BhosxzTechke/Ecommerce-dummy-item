'use client';

import { useRouter } from "next/navigation";



    export default function Error({reset}) {

        const router = useRouter();

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
        <h2>Something went wrong!</h2>

            <button type="button" onClick={() => router.back()}>
                    Click here to go back
                    </button>

        </div>
        
    )
}
