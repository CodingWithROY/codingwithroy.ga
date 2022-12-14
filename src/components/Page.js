import React from 'react'

const Page = (props) => {

    const {previous,next} = props

    console.log(previous);
    console.log(next);

  return (
    <>
        <div className="pageContainer">
            <div className="previous">
                <a href={`/learn/${previous}`} className="previousPage linkBtn">Previous</a>
            </div>
            <div className="next">
                <a href={`/learn/${next}`} className="nextPage linkBtn">Next</a>
            </div>
        </div>
    </>
  )
}

export default Page