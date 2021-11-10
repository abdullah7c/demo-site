import Image from 'next/image'

const Loader = () => {
    return (
        <div>
            <div className="text-center" style={{marginTop:"500px",marginBottom:"500px"}}>
                <Image src='/loader.svg' height={100} width={100} />
                <div>Loading...</div>
              </div>
        </div>
    )
}

export default Loader
