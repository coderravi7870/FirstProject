import React from "react";
import vg from "../images/2.webp"; 
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai"; 


const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about"> 
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            nihil nisi expedita blanditiis. Quas sint est totam? Eum, facilis
            earum quidem modi tempore veritatis quo animi aperiam repellendus
            tempora unde saepe, praesentium quaerat accusantium nemo illum
            placeat quibusdam numquam! Hic adipisci accusamus, accusantium nobis
            tempora temporibus vero laudantium consequuntur distinctio
            reprehenderit cum debitis laboriosam! Ducimus labore debitis dicta
            qui recusandae? Distinctio ducimus ipsam, sed ea dolores provident?
            Nostrum qui amet accusantium earum. Omnis vel nemo numquam illo
            dicta doloribus eius tempora eaque eveniet exercitationem dolores
            sapiente fuga, possimus, molestias harum vero. Beatae reprehenderit
            ea dolore illo? Enim perferendis minus non?
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{animationDelay:"0.3s"}}>
                <AiFillGoogleCircle/>
                <p>Google</p>
            </div>
            <div style={{animationDelay:"0.5s"}}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.7s"}}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>
            <div style={{animationDelay:"1s"}}>
                <AiFillInstagram/>
                <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
