import React from "react";
import ExpectCard from "./components/ExpectCard";
import { Row, Col } from "antd";
import SectionTitle from "../../../../components/SectionTitle";
import { images } from "../../../../constants/images";
import { useT } from "../../../../utils/useT";

function Expect() {
  
  const { t, lang } = useT();

  return (
    <div className="expect">
      <SectionTitle title={t("whatToExpect")} />
      <Row gutter={[24, 24]}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
          <Row gutter={24}>
            <Col lg={{ span: 24 }}>
              <div className="expect-card">
                <div className="icon">
                  <img src={images.List} alt={""} />
                </div>
                <div className="text-content">
                  <div className="title">{t("publication")}</div>
                  <div className="description">
                    {t("publicationContent")}
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 24 }}>
              <div className="expect-card">
                <div className="icon">
                  <img src={images.List} alt={""} />
                </div>
                <div className="text-content">
                  <div className="title">{t("location")}</div>
                  <div className="description">
                    {t("locationContent")}
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 24 }}>
              <div className="expect-card">
                <div className="icon">
                  <img src={images.List} alt={""} />
                </div>
                <div className="text-content">
                  <div className="title">{t("b2bMeetings")}</div>
                  <div className="description">
                    {t("b2bMeetingsContent")}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
          <Row gutter={[24, 24]}>
            <Col lg={{ span: 24 }}>
              <div className="expect-card">
                <div className="icon">
                  <img src={images.List} alt={""} />
                </div>
                <div className="text-content">
                  <div className="title">{t("siteVisits")}</div>
                  {
                    lang === "en" ? (
                      <div className="description">
                        For the first time in Central Asia? SERBEMA-2024  is pleased to invite you <br />
                        'Tashkent City Tour' – an excursion in Tashkent on a double-decker bus. You will experience all the most interesting sights of the beautiful capital of Uzbekistan. Each bus has audio guides with headphones, thanks to which you can listen to guide's comments in English, Russian, Uzbek, French, Spanish, Chinese, German and Japanese. <br /> 'Samarkand City Tour' Samarkand is the most majestic: the squares were once filled with merchants from far and wide, and the halls of these grand buildings were walked by some of most important scholars of their time. Start with the Ulugbek Observatory, a museum dedicated to the achievements and work of scientists from generations past. Shahi-Zinda, a winding alley lined with intricately-decorated mausoleums, is the next stop, followed by Bibi-Khanum Mosque, still impressive even though it has laid in ruins for centuries. Registan Square is the crown jewel of Samarkand, a symbol of Samarkand’s history as a trade and cultural center on the Silk Road. Finish up the tour with stops at Siab Bazaar, perfect for wandering among vendors of dried fruits, colorful cloths, and freshly-baked bread, and Gur-Emir Mausoluem, the final resting place of Timur, one of the greatest rulers of Central Asia
                      </div>
                    ) : lang === "ru" ? (
                      <div className="description">
                        Впервые в Средней Азии? SERBEMA-2024  рада пригласить вас <br />
                        «Tashkent City Tour» — экскурсия по Ташкенту на двухэтажном автобусе. Вы познакомитесь со всеми самыми интересными достопримечательностями прекрасной столицы Узбекистана. В каждом автобусе есть аудиогиды с наушниками, благодаря которым вы можете слушать комментарии гида на английском, русском, узбекском, французском, испанском, китайском, немецком и японском языках.
                        <br />
                        «Экскурсия по Самарканду» Самарканд — самый величественный: площади когда-то были заполнены купцами со всего мира, а по залам этих величественных зданий ходили некоторые из самых важных ученых своего времени. Начните путешествие с обсерватории Улугбека, музея, посвященного достижениям и работе ученых прошлых поколений. Следующей остановкой является Шахи-Зинда, извилистый переулок с причудливо украшенными мавзолеями, за которым следует мечеть Биби-Ханум, которая до сих пор впечатляет, несмотря на то, что веками лежала в руинах. Площадь Регистан — жемчужина Самарканда, символ истории Самарканда как торгового и культурного центра на Шелковом пути. Завершите тур остановками на Сиабском базаре, идеально подходящем для прогулок среди продавцов сухофруктов, ярких тканей и свежеиспеченного хлеба, и мавзолея Гур-Эмир, места последнего упокоения Тимура, одного из величайших правителей Центральной Азии.
                      </div>
                    ) : lang === "uz" ? (
                      <div className="description">
                        Markaziy Osiyoga birinchi bor tashrifingizmi? SERBEMA-2024  sizni mamnuniyat bilan taklif qiladi <br />
                        "Tashkent City Tour" - ikki qavatli avtobusda Toshkent bo'ylab sayohat. Siz O'zbekistonning go'zal poytaxtining barcha qiziqarli diqqatga sazovor joylari bilan tanishasiz. Har bir avtobusda quloqchinli audiogidlar mavjud bo‘lib, ular yordamida siz gidning ingliz, rus, o‘zbek, fransuz, ispan, xitoy, nemis va yapon tillarida sharhlarini tinglashingiz mumkin.
                        <br />
                        “Samarqand City Tour” Samarqand eng mahobatli: bir paytlar bu maskan dunyoning turli burchaklaridan kelgan savdogarlar bilan gavjum bo‘lgan, ko'hna binolarining zallarida o‘z davrining eng nufuzli olimlari sayr qilgan. sayohatni Ulug‘bek rasadxonasidan boshlang, o‘tgan avlod olimlarining yutuqlari va faoliyatiga bag‘ishlangan muzey. Keyingi bekat Shoxi-Zinda maqbaralari bilan bezatilgan aylanma yo‘lak, undan so‘ng Bibixonim masjidi bo‘lib, u asrlar davomida xaroba bo‘lib qolganiga qaramay hamon hayratlanarli. Registon maydoni - Samarqandning durdonasi, Samarqandning Buyuk Ipak yo‘lidagi savdo va madaniyat markazi sifatidagi tarixining ramzi. Ekskursiyani quritilgan mevalar, rang-barang matolar va yangi pishirilgan non sotadigan sotuvchilar orasida sayr qilish uchun juda mos bo'lgan Siyob bozorida va Markaziy Osiyoning eng buyuk hukmdorlaridan biri Temurning so'nggi dam olish maskani Go'r Amir maqbarasida to'xtash bilan yakunlang.
                      </div>
                    ) : null
                  }
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row >
    </div >
  );
}

export default Expect;
