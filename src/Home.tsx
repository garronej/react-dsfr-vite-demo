import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { ButtonsGroup } from "@codegouvfr/react-dsfr/ButtonsGroup";

import { fr } from "@codegouvfr/react-dsfr";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { Table } from "@codegouvfr/react-dsfr/Table";
import { MyComponent } from "./MyComponent";

export function Home() {
    const { isDark, setIsDark } = useIsDark();
    return (
        <>

            <div className={fr.cx("fr-my-4w")}>
                <Alert
                    closable
                    severity="success"
                    title="Success: This is the title"
                    description="This is the description"
                />
            </div>
            <div className={fr.cx("fr-my-4w")}>
                <span className={fr.cx("fr-icon-ancient-gate-fill")} aria-hidden="true"></span>
                <i className={fr.cx("fr-icon-ancient-gate-fill")} aria-hidden="true" />
            </div>

            <div className={fr.cx("fr-my-4w")}>
                <Button
                    type="button"
                    iconId="ri-24-hours-fill"
                >
                    Download
                </Button>
            </div>

            <h1>Color Scheme: {isDark ? "dark" : "light"}</h1>

            <div className={fr.cx("fr-my-4w")}>
                <ButtonsGroup
                    inlineLayoutWhen="lg and up"
                    buttons={[
                        {
                            children: "Set color scheme to dark",
                            onClick: () => setIsDark(true),
                            type: "button",
                        },
                        {
                            children: "Set color scheme to light",
                            onClick: () => setIsDark(false),
                            priority: "secondary",
                            type: "button",
                        },
                        {
                            children: "Set color scheme to system",
                            onClick: () => setIsDark("system"),
                            priority: "tertiary",
                            type: "button",
                        },
                    ]}

                />
            </div>
            <TableExample />
            <MyComponent />
        </>
    );
}

function TableExample() {
    return (
        <Table
            caption = "Titre du tableau"
            colorVariant = "green-emeraude"
            headers = {["Titre", "Titre", "Titre", "Titre", "Titre"]}
            data = {[
                ["Donnée", "Donnée", "Donnée", "Donnée", "Donnée"],
                ["Donnée", "Donnée", "Donnée", "Donnée", "Donnée"],
                ["Donnée", "Donnée", "Donnée", "Donnée", "Donnée"],
                ["Donnée", "Donnée", "Donnée", "Donnée", "Donnée"],
                ["Donnée", "Donnée", "Donnée", "Donnée", "Donnée"]
            ]}
        />
    );
}

