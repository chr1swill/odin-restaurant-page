import '../component/Card'
import '../asset/characters/charles.png'
import '../asset/characters/darryl.png'

/**
 * creates a cardComponent
 *
 * @param {string} src - the path or url to your image
 * @param {string} title - the content of the h2 in your card
 * @param {string} description - the content of the p in your card
 * @returns {string} - a cardComponent
 */
const cardComponent = (src, title, description) => {
    return `
            <card-component>
                <img data-img src="${src}"/>
                <h2>${title}</h2>
                <p>${description}</p>
            </card-component>
    ` 
}

export const homePage = () => {
    return `
        <section data-id="home">
            <h1>Welcome to our Restaurant Page!</h1>
            <ul class="two-column-grid">
                <li>
                    ${cardComponent(
                    './asset/charles.png', 
                    'Charles the Owner', 
                    'One day I woke up and had a crazy idea, why don\'t I open my very own restaurant. So naturally, instead of doing any real work to open the store, I went and told all my boys about my master plan. And they said it was lame. It was all, "You don\'t even know how to cook!" or "You, a restaurant, get a load of this guy!" or "Open a restaurant, you can\'t even open a jar of pickles. Good luck!" When I got to my only true friend, who I believed we had a chance, I told him my master plan and he loved it. He was ecstatic to be a part of the team and could not wait to get started on our new venture. And that was it, now we own the best restaurant in all of the city. Who would have thought.'
    )}
                </li>

                <li>
                    ${cardComponent(
                    './asset/darryl.png', 
                    'Darryl the Chef', 
                    'I remember the day like it was yesterday. He won\'t tell you but we practically was on his knees begging me to help him. He said I\'m the best cook he know, that I was the "best man for the job", he plead that "no one can cook as well as you do". Keep in mind only cooking experience was my summer job at Arby\'s, as a Dishwasher. That summer I ate more soaps then I did really food. Anyways though, I sort of got tired of him asking. So I agreed to be his chef. And the rest was history.'
                    )}
                </li>
            </ul>
        </section>
    `
}
