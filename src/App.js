import './global.css';
import './App.css';
import women from './women.webp';
import banner from './banner.png';
import commentImg from './commentImg.png';

function App() {
  return (
    <div className="container">
      <section className='socialIcons'>
        <div><a href="#"><i class="fa-brands fa-twitter"></i></a></div>
        <div><a href="#"><i class="fa-brands fa-facebook-f"></i></a></div>
      </section>

      <section className="headerDiv">
        <header>
          <div>
            <a href="#landing" className="logoText">K. Griffith</a>

            <ul>
              <li><a href="#">APPEARANCES</a></li>
              <li><a href="#">BOOKS</a></li>
              <li><a href="#">NEWS</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">CONTACT</a></li>
            </ul>
          </div>
        </header>

        <div className="authorDiv">
          <img src={women} alt="" className="authorImg"/>

          <div className="authorText">
            <h1>Kayla Griffith</h1>
            <p>Award Winning Author</p>
          </div>
        </div>
      </section>

      <section className="orderSec">
        <div className="newReleaseDiv">
          <div className="newReleaseTexts">
            <h1>The Swan Isle <br /> (2035)</h1>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <h3>Order Now</h3>

            <div className="newReleaceBtnDiv">
                <button className="amazonBtn newReleaseBtn">Amazon</button>
                <button className="googlebtn newReleaseBtn">Google</button>
                <button className="ibooksBtn newReleaseBtn">ibooks</button>
            </div>
          </div>

          <img src="https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_481,h_679,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screen%20Shot%202021-02-07%20at%209_24_47.png" alt="" ></img>
        </div>

        <div className="banner">
          <span>New Release</span>
        </div>
      </section>

      <section className="commentsSec">
        <img src={banner} alt="" className="bannerImg" />

        <div className="commentTexts">
          <p className="reviewsText">Praise & Reviews</p>

          <div className="comments">
            <div className="commentDiv">
              <img src={commentImg} alt="" />
              <p className="comment">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <p className="commentBy">‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</p>
              <div className="arrow"></div>
            </div>

            <div className="commentDiv">
              <img src={commentImg} alt="" />
              <p className="comment">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <p className="commentBy">‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</p>
              <div className="arrow"></div>
            </div>

            <div className="commentDiv">
              <img src={commentImg} alt="" />
              <p className="comment">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <p className="commentBy">‘Swan Isle’ is Griffith's best writing yet” The Times Book Review</p>
              <div className="arrow"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="appearances">
        <div className="appearancesText">
          <p className="appearancesText1">See Upcoming Appearances</p>
          <p className="appearancesText2">I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>January 18th 2035, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST</p>
            <button>Join</button>
          </div>
          <div className="card">
            <p>January 31st 2035, The Good Read Club, Online Conversation with Kayla Griffith, 8PM - 9PM EST</p>
            <button>Join</button>
          </div>
          <div className="card">
            <p>March 2nd 2035, Otto Cafe, Online Book Reading With Kayla Griffith, 3PM - 4PM EST</p>
            <button>Join</button>
          </div>
        </div>

        <div className="byAuthor">
          <img src="https://static.wixstatic.com/media/ad420a_3b0ac18b8f8c44e6968cf137c044b3b4~mv2.jpg/v1/crop/x_1678,y_0,w_3414,h_3414/fill/w_221,h_221,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148791.jpg" alt="" className="authorImg"/>
          <img src={banner} alt="" className="bannerImg"/>

          <div className="byAuthorText">
            <p className="authorName">About Kayla Griffith</p>
            <p className="aboutAuthor">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            <button>Read More</button>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p>© 2035 by K.Griffith. Powered and secured by Wix</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
