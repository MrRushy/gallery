import Link from "next/link";

export default function HomePage() {
  const mockUrls =[
    "https://oei9zjcqvi.ufs.sh/f/J4uVL1lVBpyrJqriEslVBpyrTSIa6XlxduYPM0gw9WD8LE4A",
    "https://oei9zjcqvi.ufs.sh/f/J4uVL1lVBpyr77Km2eqJXfmPEZjGliF4s8H1z3k5Sa2DRb9u",
    "https://oei9zjcqvi.ufs.sh/f/J4uVL1lVBpyrfXuf3WyRat970JrnWdMsZ1e8PQY2qlSOLywF"

    ];
    const mockImages = mockUrls.map((url, index)=>({
      id:index+1,
      url
    }))

  return (
     <main className="">
      <div className = "flex flex-wrap gap-4">
      {
        [...mockImages,...mockImages,...mockImages,].map((image)=>(
          <div key={image.id} className="w-48">
            <img src={image.url} alt=""/>
          </div>
        ))
        }
      </div>
    </main>
  )
}