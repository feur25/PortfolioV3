import styled from "styled-components";

export const StyledExperienceLayout = styled.div`
.experience__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.experience__container > div {
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);
}

.experience__container > div:hover {
  background: transparent;
  border-color: var(--color-primary-variant);
  cursor: default;
}

.experience__container > div > h3 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-primary);
}

.experience__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
}

.experience__details {
  display: flex;
  gap: 1rem;
}

.experience__details-icons {
  margin-top: 5px;
  color: var(--color-primary);
}

/* ======media queries for tablets(medium devices) =========*/

@media screen and (max-width: 1024px) {
  .experience__container {
    grid-template-columns: 1fr;
  }

  .experience__container div {
    width: 80%;
    padding: 2rem;
    margin: 0 auto;
  }
  .experience__details-icons {
    margin-top: 35px;
  }
  .experience__content {
    padding: 1rem;
  }
}

/* ======media queries for mobile(small devices) =========*/

@media screen and (max-width: 600px) {
  .experience__container {
    gap: 1rem;
  }
  .experience__container div {
    width: 100%;
    padding: 2rem 1rem;
  }
}

`;
