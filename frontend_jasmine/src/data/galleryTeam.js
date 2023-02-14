import { v4 as uuidv4 } from "uuid";

import NatashaNailsPhoto from "../assets/images/team/team1.jpg";
import SergeyMassagePhoto from "../assets/images/team/team2.jpg";
import AndreyMassagePhoto from "../assets/images/team/team10.jpg";
import MarinaNailsPhoto from "../assets/images/team/team3.jpg";
import AlenaNailsPhoto from "../assets/images/team/team4.jpg";
import MashaHairPhoto from "../assets/images/team/team5.jpg";
import NatashaCosmetologyPhoto from "../assets/images/team/team6.jpg";
import RitaHairPhoto from "../assets/images/team/team7.jpg";
import KatyaHairPhoto from "../assets/images/team/team8.jpg";
import OlyaHairPhoto from "../assets/images/team/team9.jpg";

const teamContainer = [
  {
    id: uuidv4(),
    selectName: "Перукарі",
    team: [
      {
        id: uuidv4(),
        src: RitaHairPhoto,
        experience: "Досвід роботи 5 років",
        name: "Рита",
        profession: "Майстер перукарського мистецтва",
        alt: "RitaHair",
      },
      {
        id: uuidv4(),
        src: KatyaHairPhoto,
        experience: "Досвід роботи 4 роки",
        name: "Катя",
        profession: "Майстер перукарського мистецтва",
        alt: "KatyaHair",
      },
      {
        id: uuidv4(),
        src: OlyaHairPhoto,
        experience: "Досвід роботи 12 років",
        name: "Оля",
        profession: "Майстер перукарського мистецтва",
        alt: "OlyaHair",
      },
      {
        id: uuidv4(),
        src: MashaHairPhoto,
        experience: "Досвід роботи 9 років",
        name: "Марія",
        profession: "Майстер перукарського мистецтва",
        alt: "MashaHair",
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Нігтьовий сервіс",
    team: [
      {
        id: uuidv4(),
        src: AlenaNailsPhoto,
        experience: "Досвід роботи 9 років",
        name: "Олена",
        profession: "Майстер нігтьового сервісу та депіляції (воском)",
        alt: "AlenaNails",
      },
      {
        id: uuidv4(),
        src: NatashaNailsPhoto,
        experience: "Досвід роботи 10 років",
        name: "Наталі",
        profession: "Майстер нігтьового сервісу",
        alt: "NatashaNails",
      },
      {
        id: uuidv4(),
        src: MarinaNailsPhoto,
        experience: "Досвід роботи 15 років",
        name: "Марина",
        profession: "Майстер нігтьового сервісу (+ нарощування нігтів)",
        alt: "MarinaNails",
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Масажисти",
    team: [
      {
        id: uuidv4(),
        src: SergeyMassagePhoto,
        experience: "Досвід роботи 5 років",
        name: "Сергій",
        profession: "Масажист",
        alt: "SergeyMassage",
      },
      {
        id: uuidv4(),
        src: AndreyMassagePhoto,
        experience: "Досвід роботи 3 роки",
        name: "Андрій",
        profession: "Масажист",
        alt: "AndreyMassage",
      },
    ],
  },
  {
    id: uuidv4(),
    selectName: "Косметологія",
    team: [
      {
        id: uuidv4(),
        src: NatashaCosmetologyPhoto,
        experience: "Досвід роботи 8 років",
        name: "Наталі",
        profession: "Косметолог та майстер з шугарингу",
        alt: "NatashaCosmetolog",
      },
    ],
  },
];

export default teamContainer;
