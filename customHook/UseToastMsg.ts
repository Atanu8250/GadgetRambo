import { intrfcToastMsg } from '@/constants/constants';
import { useToast } from '@chakra-ui/react';

const useToastMsg = () => {
    const toast = useToast();

    return ({title, desc, status}:intrfcToastMsg) => {
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
