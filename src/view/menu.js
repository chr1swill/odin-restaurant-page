import { cardComponent } from '../component/Card'
import '../asset/menu-option/veggies/veggies.png'
import '../asset/menu-option/greek-salad/greek-salad.png'
import '../asset/menu-option/smoke-salmon/smoke-salmon.png'
import '../asset/menu-option/strawberries/strawberries.png'
import '../asset/menu-option/pepperoni-pizza/pepperoni-pizza.png'

export const menuPage = () => {
    return `
        <section data-id="menu">
            <h1 class="h2 bottom-margin">Todays Menu</h1>
            <ul class="two-column-grid">
                <li>
                    ${cardComponent(
                    './asset/veggies.png', 
                    'Assorted chopped veggies on a plate',
                    'Veggie Mosaic Medley',
                    'Dive into a colorful assortment of freshly chopped vegetables, each piece a tiny masterpiece. This vibrant dish features crisp carrots, sweet bell peppers, juicy cucumbers, and tender broccoli, all lightly seasoned with a sprinkle of herbs and a dash of extra virgin olive oil. It\'s a healthy and delightful starter that\'s as pleasing to the eye as it is to the palate.'
                    )}
                </li>
                <li>
                    ${cardComponent(
                    './asset/greek-salad.png',
                    'Greek salad with feta cheese and olives',
                    'Athenian Delight Salad',
                    'Transport your taste buds to the sunny shores of Greece with our Athenian Delight Salad. A refreshing mix of juicy tomatoes, crisp cucumbers, and plump Kalamata olives, topped with a generous crumble of feta cheese. Each bite is dressed with a zesty lemon-olive oil vinaigrette and a hint of oregano, bringing the flavors of the Mediterranean straight to your table.'
                    )}
                </li>
                <li>
                    ${cardComponent(
                    './asset/smoke-salmon.png',
                    'Smoked salmon on Toast with Feta Cheese',
                    'Salmon Symphony on Toast',
                    'Experience a melody of flavors with our Smoked Salmon Toast. A slice of artisanal bread, perfectly toasted to a golden crisp, serves as the stage for velvety smoked salmon, complemented by a spread of creamy dill-infused cream cheese. Garnished with capers and thinly sliced red onions, this dish hits all the right notes for a luxurious and satisfying treat.'
                    )}
                </li>
                <li>
                    ${cardComponent(
                    './asset/strawberries.png',
                    'A Fancy Victoria era plate with Strawberries on it',
                    'Berry Bliss Bowl',
                    'Indulge in the simple sweetness of nature with our Bowl of Strawberries. Each strawberry is handpicked at peak ripeness, ensuring a burst of natural sweetness in every bite. Served fresh, these ruby red jewels are lightly dusted with a whisper of powdered sugar and accompanied by a dollop of freshly whipped cream, making it a guilt-free dessert or a delightful snack.'
                    )}
                </li>
                <li>
                    ${cardComponent(
                    './asset/pepperoni-pizza.png',
                    'A classic pepperoni pizza',
                    'Peppy Pepperoni Party Pizza',
                    'Get ready to party with every slice of our Peppy Pepperoni Pizza. This crowd-pleaser features a golden, hand-tossed crust topped with our signature tomato sauce, a generous layer of melted mozzarella cheese, and a parade of spicy pepperoni slices. Baked to perfection, it\'s a classic comfort dish with a fun twist, perfect for sharing with friends and family.'
                    )}
                </li>
            </ul>
        </section>
        `
}
