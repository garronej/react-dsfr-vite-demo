import { Button } from "@codegouvfr/react-dsfr/Button";
import { RadioButtons } from "@codegouvfr/react-dsfr/RadioButtons";
import { useForm , type SubmitHandler} from "react-hook-form";

type RadioForm = { "my-radio": "one" | "two" | "three"};


export function Home() {

    const { register, handleSubmit, formState: { errors } } = useForm<RadioForm>({ defaultValues: {
        "my-radio": "two", // Set default value to "two"
      }
    });

    const onSubmit: SubmitHandler<RadioForm> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <RadioButtons
                legend="Label"
                options={[
                {
                    label: "Label radio",
                    nativeInputProps: {
                    value: "one",
                    ...register("my-radio"),

                    },
                },
                {
                    label: "Label radio 2",
                    nativeInputProps: {
                    value: "two",
                    ...register("my-radio"),

                    },
                },
                {
                    label: "Label radio 3",
                    nativeInputProps: {
                    value: "three",
                    ...register("my-radio"),

                },
                                    },
                ]}
            />
            <Button
                type="submit"
                iconId="ri-24-hours-fill"
            >
                Submit
            </Button>
        </form>
    );
}
