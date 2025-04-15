import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { HelpCircle } from 'lucide-react';

interface AppToolTipProps {
    content: string;
}

const AppToolTip = ({ content }: AppToolTipProps) => {
    return (
        <span className="ml-1">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <HelpCircle className="text-custom-600 text-muted-foreground h-4 w-4 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent className="w-72 bg-green-100 p-2">
                        <p className="text-xs text-blue-500">{content}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </span>
    );
};

export default AppToolTip;
