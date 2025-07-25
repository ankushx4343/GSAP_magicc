import React from 'react'

function Clip_Path_Title({title,className,bg,color,bordercolor}) {
  return (
    <div className='general-title'>
        <div style={{
            clipPath:"polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
            borderColor:bordercolor,
            opacity:0
        }}
        className={`${className} border-[0.5vw] text-nowrap`}>
            <div className='pb-5 md:px-14 px-3 md-pt-0 pt-3'
            style={{
                backgroundColor:bg,
            }}
            >
                <h2
                style={{
                    color:color
                }}>
                    {title}
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Clip_Path_Title