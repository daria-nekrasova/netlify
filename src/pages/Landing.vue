<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg6.jpg')"
      >
      </parallax>
      <div class="content-center" :class="{loaded: isLoaded}">
        <div class="container">
          <h1 class="title">Янушевский Александр Алексеевич</h1>
          <h2 class="title animated-title first">Заслуженный тренер СССР, мастер спорта международного класса Республики Беларусь по велоспорту</h2>
          <h3 class="title animated-title second">(21.05.1941 - 07.07.2021)</h3>
<!--          <div class="text-center">-->
<!--            <a href="#pablo" class="btn btn-primary btn-icon btn-round">-->
<!--              <i class="fab fa-facebook-square"></i>-->
<!--            </a>-->
<!--            <a href="#pablo" class="btn btn-primary btn-icon btn-round">-->
<!--              <i class="fab fa-twitter"></i>-->
<!--            </a>-->
<!--            <a href="#pablo" class="btn btn-primary btn-icon btn-round">-->
<!--              <i class="fab fa-google-plus"></i>-->
<!--            </a>-->
<!--          </div>-->
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 id="bio" class="title">Биография</h2>
            <h5 class="description">
              Заслуженный тренер СССР, мастер спорта международного класса Республики Беларусь по велоспорту,
              тренер призеров Олимпийских игр (Леонид Сидоров).
              Родился в семье командира дивизии Янушевского Алексея Андреевича.  Племянник Феликса Дзержинского.
              Отец погиб на фронте. Рос в семье дяди, в Слуцке. Окоечил БГУФК, поднимал СДЮШОР имени Красного Знамени, Локомотива.

              Тренер, воспитавший лучших спортсменов  в команду СССР, в сборную команду Республики Беларусь. Его воспитанники с честью выступают в командах Астаны и Катюши.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/login.jpg')"
              >
                <!-- First image on the left side -->
                <p class="blockquote blockquote-primary">
                  "Всю жизнь Александр Алексеевич посвятил воспитанию человеческих и спортивных качеств в своих учениках. "
                  <br />
                  <br />
<!--                  <small>-NOAA</small>-->
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container tall"
                style="background-image: url('img/bg3.jpg')"
              ></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/bg1.jpg')"
              ></div>
              <h3 id="retro">
                Ретроспектива:
              </h3>
              <ul>
                <li>С 1961 по 1964г.г. служил в рядах Советской Армии.</li>
                <li>1967 г. - тренер Минского областного совета [[Локомотив_(спортивное_общество)|ДСО "Красное знамя"]].</li>
                <li>1970 г. - тренер ДСО "Локомотив".</li>
                <li>1983 г. - тренер СДЮШОР "Спартак".</li>
                <li>1976г - объявлена благодарность за успехи по коммунистическому воспитанию учащихся ДЮСШ.</li>
                <li>1977г. - За активное участие в организации и проведении мероприятий в выступлении колонны велосипедистов на параде 7 ноября.</li>
                <li>1979г. -  благодарность Белсофпрофа по итогам работы в 1978г.</li>
                <li>1974г - награжден значком "Почетный член ДСО ЛОКОМОТИВ".</li>
                <li>1977г.- вручена грамота за успешную работу по подготовке спортсменов высокого класса.</li>
                <li>1980 г. Почетная грамота Белсофпрофа.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 id="awards" class="title">Награды:</h2>
        <div class="team">
          <div class="row">
            <div class="col-md-6">
              <div class="team-player">
<!--                <img-->
<!--                    src="img/ryan.jpg"-->
<!--                    alt="Thumbnail Image"-->
<!--                    class="rounded-circle img-fluid img-raised"-->
<!--                />-->
                <i class="icon now-ui-icons sport_trophy"></i>
                <h4 class="title">Звания: Заслуженный тренер СССР</h4>
<!--                <p class="category text-primary">Model</p>-->
<!--                <p class="description">-->
<!--                  You can write here details about one of your team members. You-->
<!--                  can give more details about what they do. Feel free to add-->
<!--                  some <a href="#">links</a> for people to be able to follow-->
<!--                  them outside the site.-->
<!--                </p>-->
<!--                <a href="#pablo" class="btn btn-primary btn-icon btn-round"-->
<!--                  ><i class="fab fa-twitter"></i-->
<!--                ></a>-->
<!--                <a href="#pablo" class="btn btn-primary btn-icon btn-round"-->
<!--                  ><i class="fab fa-instagram"></i-->
<!--                ></a>-->
<!--                <a href="#pablo" class="btn btn-primary btn-icon btn-round"-->
<!--                  ><i class="fab fa-facebook-square"></i-->
<!--                ></a>-->
              </div>
            </div>
            <div class="col-md-6">
              <div class="team-player">
                <i class="icon now-ui-icons sport_trophy"></i>
                <h4 class="title">Медаль: За особые заслуги перед Отечеством.</h4>
              </div>
            </div>
          </div>
          <carousel-section :items="awardsItems"></carousel-section>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 id="photo" class="title">Фото</h2>
<!--            <h5 class="description"></h5>-->
            <carousel-section :items="photoItems"></carousel-section>
          </div>
        </div>
        <div class="separator separator-primary"></div>
<!--        <div class="section-story-overview">-->
<!--          <div class="row">-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
<!--    <div class="section section-contact-us text-center">-->
<!--      <div class="container">-->
<!--        <h2 class="title">Want to work with us?</h2>-->
<!--        <p class="description">Your project is very important to us.</p>-->
<!--        <div class="row">-->
<!--          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">-->
<!--            <fg-input-->
<!--              class="input-lg"-->
<!--              placeholder="First Name..."-->
<!--              v-model="form.firstName"-->
<!--              addon-left-icon="now-ui-icons users_circle-08"-->
<!--            >-->
<!--            </fg-input>-->
<!--            <fg-input-->
<!--              class="input-lg"-->
<!--              placeholder="Email Here..."-->
<!--              v-model="form.email"-->
<!--              addon-left-icon="now-ui-icons ui-1_email-85"-->
<!--            >-->
<!--            </fg-input>-->
<!--            <div class="textarea-container">-->
<!--              <textarea-->
<!--                class="form-control"-->
<!--                name="name"-->
<!--                rows="4"-->
<!--                cols="80"-->
<!--                v-model="form.message"-->
<!--                placeholder="Type a message..."-->
<!--              ></textarea>-->
<!--            </div>-->
<!--            <div class="send-button">-->
<!--              <n-button type="primary" round block size="lg"-->
<!--                >Send Message</n-button-->
<!--              >-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>
<script>
import { Button, FormGroupInput } from '@/components';
import CarouselSection from "./components/CarouselSection";
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    CarouselSection,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      awardsItems: [
        {src:'img/awards/award1.jpg', title:''},
        {src:'img/awards/award2.jpg', title:''},
        {src:'img/awards/award3.jpg', title:''},
        {src:'img/awards/award4.jpg', title:''},
        {src:'img/awards/award5.jpg', title:''},
        {src:'img/awards/award6.jpg', title:''},
        {src:'img/awards/award7.jpg', title:''},
        {src:'img/awards/award8.jpg', title:''},
        {src:'img/awards/award9.jpg', title:''},
        {src:'img/awards/award10.jpg', title:''},
        {src:'img/awards/award11.jpg', title:''},
      ],
      isLoaded: false,
      photoItems: [
        {src:'img/photo/photo1.jpg', title:'Победители'},
        {src:'img/photo/photo2.jpg', title:''},
        {src:'img/photo/photo3.jpg', title:''},
        {src:'img/photo/photo4.jpg', title:''},
        {src:'img/photo/photo5.jpg', title:''},
        {src:'img/photo/photo6.jpg', title:''},
      ],
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  },
  updated(){
    this.isLoaded = true
  }
};
</script>
<style lang="scss" scoped>
  .content-center {
    &.loaded {
      .animated-title {
        //color: #FFFFFF;
      }
    }
    .animated-title {
      color: transparent;

      &.first {
        transition: color 2s
      }
      &.second {
        transition: color 3s
      }
    }
  }
</style>
