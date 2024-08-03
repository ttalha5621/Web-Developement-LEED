import React from "react";
import Typography from "./Typography/Typography";
import SmallTypography from "./SmallText/SmallTypography";
const AllText = (props) => {
    return (
        <>
            <Typography Heading="typography-line"
                Title="Muted Text"
                Paragraph="text-muted"
                Text=' I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...' />
            <Typography Heading="typography-line"
                Title="Primary Text"
                Paragraph="text-primary"
                Text=' I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...' />
            <Typography Heading="typography-line"
                Title="Info Text"
                Paragraph="text-info"
                Text=' I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...' />
            <Typography Heading="typography-line"
                Title="Success Text"
                Paragraph="text-success"
                Text=' I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...' />
            <Typography Heading="typography-line"
                Title="Warning Text"
                Paragraph="text-warning"
                Text=' I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...' />
            <Typography Heading="typography-line"
                Title="Danger Text"
                Paragraph="text-danger"
                Text=' I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...' />
            <SmallTypography Heading="typography-line"
                Title="Small Tag"
                Text='Header with small subtitle'
                Content=' Use " small" tag for the header' />
        </>
    );
}
export default AllText;
