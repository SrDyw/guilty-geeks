import { config } from '@/appconfig'

export default function ImageCard({
    url,
    title,
    description
}) {
  return (
    <div className={'bg-gray-900 p-4 min-w-[300px]' + config.style.rounded} >
        <div className={"relative image-section w-full overflow-hidden bg-[#0000007a] min-h-[150px] grid place-items-center" + config.style.rounded} >
            <img src={url} className='z-10 object-cover w-full' />
            <p className='absolute w-full h-full text-center grid place-items-center'>Not Image</p>
        </div>
        <div className="bg-yellow-300 w-full h-[100px] mt-2"></div>
    </div>
  )
}
