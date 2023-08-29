import Image from 'next/image';
import Delete from '../../../../public/basura.png';
import Edit from '../../../../public/lapiz.png';

export default function Buttons() {

    return (
        <>
            <div className="md:mx-auto
            lg:m-auto">
                <div className="md:p-2.5
                lg:p-1
                xl:p-7">
                    <button className="md:mr-5
                    lg:mr-auto">
                        <Image src={Delete} width={30} height={30}></Image>
                    </button>
                    <button className="md:mr-0">
                        <Image src={Edit} width={30} height={30}></Image>
                    </button>
                </div>
            </div>
        </>

    )
}