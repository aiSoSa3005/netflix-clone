import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
    <div className="content">
      <div className="title">
        STRANGER <br />
        THINGS
      </div>
      <div className="description">
        <p>
          When a young boy vanishes, a small town uncovers, <br />
          a mystery involving secret experiments, terrifyng <br />
          supernatural forces and a strange little girl.
        </p>
      </div>
      <div className="btns">
        <button className="btn btn--play">Play</button>
        <button className="btn btn--add-list">My List</button>
      </div>
    </div>
  </div>
  )
}

export default Hero
