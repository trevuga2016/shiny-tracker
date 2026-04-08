import NavHeader from "../../components/nav-header";
import GenerationLayout from "../../components/gen-layout";

export function generateStaticParams() {
    return [
        { region: "kanto" },
        { region: "johto" },
        { region: "hoenn" },
        { region: "sinnoh" },
        { region: "unova" },
        { region: "kalos" },
        { region: "alola-unknown" },
        { region: "galar-hisui" },
        { region: "paldea" },
        { region: "regional-variants" },
    ]
}

export default async function RegionalPage({ params }) {
    const { region } = await params;

    return (
        <>
            <NavHeader />
            <GenerationLayout region={region} />
        </>
    );
}
