import { FileDown, FileText, MoreVertical } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface CardMenuProps {
  cardName: string;
  onDownloadExcel: (cardName: string) => void;
  onDownloadWord: (cardName: string) => void;
}

export default function CardMenu({ cardName, onDownloadExcel, onDownloadWord }: CardMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-[#6b6b6b] hover:text-[#1a4d8f] hover:bg-[#1a4d8f]/10"
          aria-label="Card options"
        >
          <MoreVertical className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem 
          onClick={(e) => {
            e.preventDefault();
            onDownloadExcel(cardName);
          }} 
          className="cursor-pointer"
        >
          <FileDown className="w-4 h-4 mr-2 text-[#25c196]" />
          <span className="font-['Wix_Madefor_Text:Regular',sans-serif]">Download Data in Excel</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={(e) => {
            e.preventDefault();
            onDownloadWord(cardName);
          }} 
          className="cursor-pointer"
        >
          <FileText className="w-4 h-4 mr-2 text-[#1a4d8f]" />
          <span className="font-['Wix_Madefor_Text:Regular',sans-serif]">Download Data in Word</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}