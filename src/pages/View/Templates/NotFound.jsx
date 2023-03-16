import {Page404} from './GobalStyles';
import { useTranslation } from 'react-i18next';

const lngs = {
  en : { nativeName: "English"},
  fr : {
    nativeName : "French"
  }
};
const  NotFound = () => {
  const { t } = useTranslation();
    return(
      <a href="/">
        <Page404>
          <section>
            <div class="animation">
              <h2>4</h2>
              <div class="scene">
                <div class="moon"></div>
                <ul class="stars">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <ul class="clouds">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <div class="ghost">
                  <div class="ghost__tooltip">
                    404
                  </div>
                  <div class="ghost__eyes">
                    <div class="eye"></div>
                    <div class="eye"></div>
                  </div>
                  <div class="ghost__mouth"></div>
                  <div class="ghost__tail"></div>
                </div>
              </div>
              <h2>4</h2>
            </div>
            <div class="not-found">
              <h4>{t("notFound")}</h4>
            </div>
        </section>
      </Page404>
    </a>
    );
  };
export default NotFound;