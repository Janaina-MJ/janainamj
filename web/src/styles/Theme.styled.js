export const theme = {
    colors: {

        //------------------------------------------START OF BACKGROUND------------------------------------------
        primaryDarkShade: '#000',
        primaryMediumShade: '#000001',
        primaryLightShade: '#26373c',

        secondaryLightShade: '#90abb4',
        secondaryMediumShade: '#A1FCFF',
        //------------------------------------------END OF BACKGROUND------------------------------------------

        
        secondaryDarkShade: 'rgba(98, 147, 164, 0.7)', //SHADOWS AND ALERT-BOX BORDER
        secondaryLightTransparent: 'rgba(144, 171, 180, 0.9)', //SKILLS-BUTTONS SHADE

        secondaryLightNeon: '#A1FCFF', // HIGHLIGHTS
        secondaryTransparent: 'rgba(98, 147, 164, 0.3)', //LIGHT BACKGROUNDS 
        secondaryFullColor: 'rgb(34, 45, 51)',


        tertiaryBlack: 'rgba(0, 0, 0, 0.6)', //SHADE EFFECT BACKGROUND
        tertiaryDarkShade: '#454e50',
        tertiaryMediumShade: '#8a9599', //SECTIONS TITLES
        tertiaryLightShade: '#f5f5f7',

        complementary: 'rgba(118, 187, 191, 01)', //BUTTONS: HOVER EFFECT
        complementarySaturated: '#90abb4', //BUTTONS
        complementaryContrast: '#CCCCCC', //LINKS
    },

    typography: {
        mainFont: '"Raleway", sans-serif',
        lineHeight: '1.6',
        lightWeight: '200',
        regularWeight: '400',
        boldWeight: '700',
        blackWeight: '900',
        fontSize: {
            root: '62.5%', /* 1rem = 10px */
            body: '1.6rem',
            h1Large: '9rem',
            h1Medium: '6rem',
            h1Small: '3.55rem',
            h2: '3.35rem',
            h3: '3.12rem',
            h4: '2.50rem',
            h5: '2rem',
            h6: '1.85rem',
            paragraph: '1.6rem',
            anchor: '1.6rem',
            emphasis: '1.6rem',
            strong: '1.6rem',
            small: '1.02rem',
            underline: '1.6rem',
            blockquote: '1.6rem',
            unorderedListItem: '1.6rem',
            orderedListItem: '1.6rem'
        }        
    }
}