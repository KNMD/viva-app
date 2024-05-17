"use client"
import { Button } from '@/components/ui/button'

import React, { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'


import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { toast } from '@/components/ui/use-toast'
import { Input } from '@/components/ui/input'

const FormSchema = z.object({
    username: z.string().min(2).max(50),
    maxLength: z.number(),
    overlab: z.number(),
    ruleReplace: z.boolean().default(false).optional(),
    ruleEmailremove: z.boolean().default(false).optional(),
})

console.log("formSchema: ", FormSchema)

const DynamicForm = memo(() => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })
    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }



    const { t } = useTranslation()
    return (

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('datasetCreation.stepTwo.separator')}</FormLabel>
                                <FormControl>
                                    <Input placeholder={t('datasetCreation.stepTwo.separatorPlaceholder')} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <div className='flex space-x-2'>
                        <Button type="submit">{t('datasetCreation.stepTwo.preview')}</Button>
                        <Button type="reset" variant="secondary">{t('datasetCreation.stepTwo.reset')}</Button>
                    </div>

                </form>
            </Form>

        
    )
})

export default DynamicForm