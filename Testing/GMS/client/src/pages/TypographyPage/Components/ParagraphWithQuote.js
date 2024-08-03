import React from "react";
import Typography from "./Typography/Typography";
const ParagraphWithQuote = (props) => {
    return (
        <>
            <Typography Heading="typography-line"
                Title="Paragraph"
                Text='I will be the leader of a company that ends up being worth billions of dollars,
                      because I got the answers. I understand culture. I am the nucleus. I think
                      that’s a responsibility that I have, to push possibilities, to show people, this
                      is the level that things could be at.'/>

            <Typography Heading="typography-line"
                Title="Quote"
                Paragraph="blockquote blockquote-primary"
                Text='"I will be the leader of a company that ends up being worth billions of
                       dollars, because I got the answers. I understand culture. I am the nucleus.
                       think that’s a responsibility that I have, to push possibilities, to show
                       people, this is the level that things could be at."' 
     Content="- Noaa" />
        </>
    );
}
export default ParagraphWithQuote;