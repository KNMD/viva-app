import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { RestResponseError } from "@/types/app";
import { toast } from '@/components/ui/use-toast'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function errorToast(error: Error, translateFunction: Function){
  if(error instanceof RestResponseError) {
    const errorData = error.data
    const i18nKeySuffix = errorData.error_key ? `resp.${errorData.error_key}` : "unknown"
    toast({
        variant: "destructive",
        title: translateFunction("extends.errorMessages.commonTitle"),
        description: translateFunction(`extends.errorMessages.${i18nKeySuffix}`),
    })
  }
  
}