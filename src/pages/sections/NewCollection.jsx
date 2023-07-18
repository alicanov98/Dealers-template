import "../../assets/scss/components/_newcollection.scss";
const NewCollection = ({src,desc}) => {
  return (
    <section>
        <div className='collection_img'>
            <img src={src} alt='people'/>
        </div>
        <div className='collection_desc'>
            <p>#NEW SUMMER COLLECTION 2019</p>
            <h1>{desc}</h1>
            <button>SHOP NOW</button>
        </div>
    </section>
  )
}

export default NewCollection