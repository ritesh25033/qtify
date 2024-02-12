import heroImg from "../assets/vibrating-headphone.png"
function HeroSection(){
    return(
        <div className="hero-section">
            <h2>
                100 Thousand Songs, ad-free <br/> Over thousands podcast episodes  
            </h2>
            <img src={heroImg} alt=".." />
        </div>
    )
}

export default HeroSection;