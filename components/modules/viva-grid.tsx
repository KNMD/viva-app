import React, { ReactNode, memo } from 'react'
import { Card } from '../ui/card'

interface VivaGridProp {
    data: Record<string, any>[]
    children?: ReactNode,
    height?: string
}

const VivaGrid: React.FC<VivaGridProp> = memo(({
    children, data, height
}) => {
    console.log("props: ", data)
    if(!height) {
        height = "100%"
    }
    return (
        <div className={`flex flex-wrap justify-start space-x-2`} style={{'height': height}}>
            {data && data.map(item => {
                return (
                    <Card className=' overflow-hidden rounded hover:shadow-md hover:bg-primary-50 transition duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer'>
                        {children}
                    </Card>
                )
            })}
        </div>
    )
})

export default VivaGrid