import InputTextForm from "../InputTextForm"
import Button from "../Button"

const InputsContainer = ({fields, containerName, alreadyHave, doing}) => {
    return(
        <div className="flex justify-center flex-col gap-2 bg-white p-4 md:w-96">
            <h1 className="font-semibold text-2xl text-center">{containerName}</h1>

            <div className="flex flex-col">
                {fields.map((field) => (
                    <InputTextForm
                        inputName={field.inputName}
                        type={field.type}
                        labelName={field.labelName}
                    />
                ))}
            </div>


            <div className="flex flex-col justify-center items-center gap-2">
                <Button
                    bgColor="bg-orange-500"
                    text={`Fazer ${doing}`}
                    textSize="text-base"
                    textColor="text-white"
                    width="w-64"
                    height="h-14"
                    path="/login"
                    rounded={true}
                />

                <p className="text-base	text-stone-900 pointer">Já possui {alreadyHave}? <span className="text-orange-500">Clique aqui</span></p>
            </div>
        </div>
    )
}

export default InputsContainer