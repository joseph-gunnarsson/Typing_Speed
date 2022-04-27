

export default function ParagraphTest({para,testText}){
    const len=testText.length
    const paraArr=[...para].map((item,i)=>(<span key={i} className={(i>=len ?null:(testText[i]==para[i])?"correct":"incorrect")}>{item}</span>))
    return (
        <p >{paraArr}</p>
    )
}
