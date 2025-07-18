import check from '../assets/iconos/check.png'



const Benefits = () => {
  return (
    <section className="benefits-section" style= {{ backgroundColor: 'black' }}>
      <div className="benefits-info">
        <h1 className="gradient-text">¿WHY WE ARE THE BEST?</h1>
        <p>
            Because at Rhino, we don't just sell paint — we deliver complete solutions. We guide you in choosing the perfect color combinations for your home, apartment, or office, offering personalized advice to match your style and space. Our expert team ensures a high-quality finish with professional application techniques, and we go a step further by repairing and resurfacing damaged walls to guarantee a clean, flawless result.
        </p>
        <br />
        <p>
            From start to finish, we care about every detail — so you don’t have to.
        </p>
        <div className="benefits-list">
          <ul>
            <li> 
                <img src={check} alt="check" />
                Personalized Color Consulting
            </li>
            <li>
                <img src={check} alt="check" />
                All in one service
            </li>
            <li>
                <img src={check} alt="check" />
                Flawless wall preparation
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
