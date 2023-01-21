import { useToast } from '@chakra-ui/react';


const useToastMsg = () => {
    const toast = useToast();

    return ({title, desc, status}: {title: string, desc: string, status: "info" | "warning" | "success" | "error" | "loading" | undefined}) => {
        toast({
            title,
            status,
            description: desc,
            duration: 5000,
            isClosable: true,
            position: 'top-right'
        })
    }
}

export default useToastMsg
