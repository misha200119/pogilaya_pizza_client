/* eslint-disable max-len */
import { DoughSize, Size } from '../types/pizza';
import { Section } from '../types/section';

export const mockDataAvaliblePizza: Array<Section> = [
  {
    products: [
      {
        id: '1',
        image: 'https://kingpizza.kh.ua/resources/products/20211123202045_366bb8053.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 220,
        toppings: '(double portion of mushrooms), mushrooms, mozzarella, pepperoni, alfredo sauce',
        name: 'Pizza Manhattan',
      },
      {
        id: '2',
        image: 'https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 220,
        toppings: 'mozzarela, peperoni, tomatos, barbeque sause',
        name: 'Pizza Peperoni with tomato',
      },
      {
        id: '3',
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 220,
        toppings: 'ham, mushrooms, mozzarella, Domino\'s Sauce',
        name: 'Pizza ham and mushroom',
      },
      {
        id: '4',
        image: 'https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 220,
        toppings: 'corn, onion, mushrooms, bavarian sausages, mozzarella, barbecue sauce',
        name: 'Pizza Texas',
      },
    ],
    sectionName: 'Pizza: Best price',
  },
  {
    products: [
      {
        id: '5',
        image: 'https://ychef.files.bbci.co.uk/976x549/p0ctz0wr.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 255,
        toppings: 'mozzarela, peperoni, sause',
        name: 'Pizza Tony Peperoni',
      },
      {
        id: '6',
        image: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-16x9/image.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 255,
        toppings: '(double portion of mozzarella), mozzarella, Domino\'s sauce',
        name: 'Pizza Margherita',
      },
      {
        id: '7',
        image: 'https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 260,
        toppings: 'chicken, onion, bacon, mushrooms, mozzarella, barbecue sauce',
        name: 'Pizza Barbecue',
      },
      {
        id: '8',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXYFaPS1E6IBR_QhsdvcW2jWkmu6-STtZdg&usqp=CAU',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 255,
        toppings: 'corn, onion, mushrooms, bavarian sausages, mozzarella, barbecue sauce',
        name: 'Pizza Grill Mix',
      },
      {
        id: '9',
        image: 'https://vilki-palki.od.ua/storage/img-cache/500_500_1622465704%D0%92%D0%B5%D0%B3%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%D0%BF%D0%B8%D1%86%D1%86%D0%B0%D1%81%D0%B3%D1%80%D0%B8%D0%B1%D0%B0%D0%BC%D0%B8.png.webp',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 271,
        toppings: 'onion, bacon, ham, mushrooms, mozzarella, Alfredo sauce',
        name: 'Pizza Carbonara',
      },
      {
        id: '10',
        image: 'https://kingpizza.kh.ua/resources/products/400_20210810115720_65ff804886.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 275,
        toppings: 'onion, bacon, ham, mushrooms, mozzarella, pickled cucumbers, garlic sauce',
        name: 'Pizza Country',
      },
    ],
    sectionName: 'Pizza: Heroes',
  },
  {
    products: [
      {
        id: '11',
        image: 'https://i.ytimg.com/vi/PCAwJs51D0k/maxresdefault.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 294,
        toppings: 'feta, olives, mozzarella, garlic sauce, tuna',
        name: 'Pizza Greek',
      },
      {
        id: '12',
        image: 'https://st2.depositphotos.com/1692343/5636/i/600/depositphotos_56360353-stock-photo-hot-homemade-pepperoni-pizza.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 290,
        toppings: 'chicken, feta, mozzarella, cherry tomatoes, Alfredo sauce, spinach',
        name: 'Pizza Tuscan',
      },
      {
        id: '13',
        image: 'https://uploads-ssl.webflow.com/5eb58007728d3b72f3cd53d2/5eb59b2877eda54438ab8941_DSC07877-web.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 295,
        toppings: 'jalapeno, bacon, mozzarella, pepperoni, tomatoes, Domino\'s sauce',
        name: 'Pizza Spicy',
      },
      {
        id: '14',
        image: 'https://asset2.cxnmarksandspencer.com/is/image/mands/1049_18052022_SB-29260_610x438?wid=610',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 286,
        toppings: 'bergader blue, bam, mozzarella, pepperoni, tomatoes, Alfredo sauce',
        name: 'Pizza Provence',
      },
      {
        id: '15',
        image: 'https://storage.pizza-kvartal.com/storage/8e/22/8e22797a61203b78cdffe0d1cf6c09bf.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 285,
        toppings: 'chicken, corn, jalapeno, pineapple, bell pepper, mushrooms, mozzarella, Domino\'s sauce',
        name: 'Pizza Jamaica Bombastic',
      },
      {
        id: '16',
        image: 'https://www.kremenchuk.pizza-nys.com.ua/wp-content/uploads/2020/05/IMG_0696-600x400.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 249,
        toppings: 'dip (burger sauce), chicken, onion, mushrooms, mozzarella, pickled cucumbers, Domino\'s sauce',
        name: 'Pizza Chicken kebab',
      },
    ],
    sectionName: 'Pizza: Weirdness',
  },
  {
    products: [
      {
        id: '17',
        image: 'https://instafood.com.ua/images/full_blog/106970-5dd79d434bdbd.jpg?1609925656',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 294,
        toppings: 'ham, mustard, bavarian sausages, mozzarella, tomatoes, white sausages, barbecue sauce',
        name: 'Pizza Munich Deluxe',
      },
      {
        id: '18',
        image: 'https://static.1000.menu/img/content-v2/a1/64/13461/picca-s-moreproduktami-v-duxovke_1603034140_14_max.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 286,
        toppings: 'meatballs, onion, bell pepper, mushrooms, mozzarella, parmesan, pepperoni, barbecue sauce',
        name: 'Pizza Deluxe Barbecue',
      },
      {
        id: '19',
        image: 'https://tomato.com.ua/files/slides/357914.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 315,
        toppings: 'bacon, ham, bavarian sausages, mozzarella, parmesan, pepperoni, Domino\'s sauce',
        name: 'Pizza Mitz\'s',
      },
      {
        id: '20',
        image: 'https://starwood.vn.ua/wp-content/uploads/2019/02/Pitsa-Nino-Belissimo..jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 310,
        toppings: 'meatballs, olives, onions, bell peppers, ham, mushrooms, mozzarella, pepperoni, Domino\'s sauce',
        name: 'Pizza Extravaganza',
      },
      {
        id: '21',
        image: 'https://i.ytimg.com/vi/jZgorkhEbNI/maxresdefault.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 310,
        toppings: 'double portion of steak meat (beef), dip (burger sauce), onion, mozzarella, barbecue sauce',
        name: 'Pizza Royal Cheeseburger',
      },
    ],
    sectionName: 'Pizza: Finest',
  },
  {
    products: [
      {
        id: '22',
        image: 'https://daddys.pizza/wp-content/uploads/2021/11/hem.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 266,
        toppings: 'chicken, pineapple, mozzarella, Domino\'s sauce',
        name: 'Pizza Hawaiian',
      },
      {
        id: '23',
        image: 'https://trustpizza.com.ua/wp-content/uploads/2020/10/Veheterianska-scaled.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 272,
        toppings: 'chicken, bergader blue, mozzarella, alfredo sauce',
        name: 'Pizza Chicken-Dorblu',
      },
      {
        id: '24',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_PSmJc1rhPjczDuqSJ-Cvxu3-hldxK8elA&usqp=CAU',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 310,
        toppings: 'feta, bergader blue, mozzarella, parmesan, alfredo sauce, cheddar',
        name: 'Pizza Five Cheese',
      },
      {
        id: '25',
        image: 'https://obaldini.com.ua/image/cache/catalog/p2g-800x534.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 300,
        toppings: 'feta, olives, bell pepper, mushrooms, mozzarella, tomatoes, Alfredo sauce, spinach',
        name: 'Pizza Spinach and feta',
      },
      {
        id: '26',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/ee/9c/18/4.jpg',
        sizes: Object.values(Size),
        doughSizes: [DoughSize.BOARD_HOT_DOG, DoughSize.PHILADELPHY, DoughSize.STANDART, DoughSize.THIN],
        cost: 320,
        toppings: 'philadelphia cream cheese, salmon, mozzarella, Alfredo sauce',
        name: 'Pizza Philadelphia Salmon',
      },
    ],
    sectionName: 'Pizza: Gourmet',
  },
];
