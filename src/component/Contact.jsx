export default function Contact() {
    return (
      <>
        <section id="contact">
      <div class="contact main-container">
        <div class="contact-head">
          <h1>Contact</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            fugit recusandae quas asperiores deserunt earum, mollitia sequi
            quibusdam nesciunt voluptate vitae. Nesciunt neque facere porro fuga
            nam odio natus recusandae.
          </p>
        </div>
      </div>
      <form class="contact-form">
        <div>
          <input type="text" name="name" placeholder="Your Name" />
        </div>
        <div>
          <input
          type="email" name="email"
          id="email"
          placeholder="Your email"
          />
        </div>
        <div>
          <textarea name="message" cols="30" rows="10" placeholder="Your Message">
          </textarea>
        </div>
        <div>
          <button class="btn-submit" type="submit">Kirim</button>
        </div>
      </form>
    </section>    
      </>
  
  
    );
  }
  