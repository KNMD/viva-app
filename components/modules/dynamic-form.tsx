import { t } from "i18next";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, Form } from "../ui/form";
import { yupResolver  } from "@hookform/resolvers/yup";
// import { z } from "zod";
import { toast } from "../ui/use-toast";
import { FormFieldSchema } from "@/types/appSchema";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { buildYup } from 'schema-to-yup';

interface DynamicFormProps {
    formSchema: FormFieldSchema
    submitText?: string 
    onSubmit: (formData: Record<string, any>) => void;
}


const config = {
    errMessages: {
        api_key: {
            required: "aaa",
        },
    },
  };
const DynamicForm = memo((props:DynamicFormProps) => {
    const validationSchema = buildYup(props.formSchema.schema, props.formSchema.config)
    const form = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data:any) => {
        // toast({
        //     title: "You submitted the following values:",
        //     description: (
        //         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        //             <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        //         </pre>
        //     ),
        // })
        props.onSubmit(data)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                {
                    Object.entries(props.formSchema.schema.properties).map(([key, item], i) =>
                        <FormField
                            control={form.control}
                            name={key}
                            key={i}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{props.formSchema.ui[key]?.displayName || key}</FormLabel>
                                    <FormControl>
                                        {
                                            props.formSchema.ui[key].component === 'input' && <Input {...field} />
                                        }
                                        
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )
                }

                <div className='flex space-x-2'>
                    <Button type="submit">{ props.submitText || t("datasetCreation.stepTwo.preview")}</Button>
                    <Button type="reset" variant="secondary">{t('datasetCreation.stepTwo.reset')}</Button>
                </div>

            </form>
        </Form>
    )
})

export default DynamicForm