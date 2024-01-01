/**
 * creates a cardComponent
 *
 * @param {string} imgSrc - the path or url to your image
 * @param {string} imgAlt - the alt text for your image
 * @param {string} title - the content of the h2 in your card
 * @param {string} description - the content of the p in your card
 * @returns {string} - a cardComponent
 */
export const cardComponent = (imgSrc, imgAlt, title, description) => {
    return `
            <section data-id="card">
                <img data-img
                    src="${imgSrc}"
                    alt="${imgAlt}"
                >
                <h2 data-title>${title}</h2>
                <p data-text>${description}</p>
            </section>
    ` 
}
