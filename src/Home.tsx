import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { ButtonsGroup } from "@codegouvfr/react-dsfr/ButtonsGroup";

import { Input } from "@codegouvfr/react-dsfr/Input";
import { Select } from "@codegouvfr/react-dsfr/SelectNext";

import { fr } from "@codegouvfr/react-dsfr";
import { useIsDark } from "@codegouvfr/react-dsfr/useIsDark";
import { useState } from "react";
import { Table } from "@codegouvfr/react-dsfr/Table";
import { useGdprStore } from "@codegouvfr/react-dsfr/useGdprStore"
import { consentModalNativeButtonProps } from '@codegouvfr/react-dsfr/ConsentBanner';
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
            <GdprStoreViewer />
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


export const GdprStoreViewer = () => {
    const {consents, firstChoiceMade } = useGdprStore();

    return <>
        <ButtonsGroup inlineLayoutWhen='always' buttons={[
            {
                "nativeButtonProps": consentModalNativeButtonProps,
                children: "Open Consent"
            },
            {
                children: "Reset Consent",
                priority: "secondary",
                onClick() {
                    localStorage.removeItem("dsfr-gdpr-consent");
                    location.reload();
                }
            }
        ]} />
        <pre>{JSON.stringify({consents, firstChoiceMade})}</pre>
    </>;
}
