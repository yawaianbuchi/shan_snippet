import { Stack } from "@mui/material";
import Text from "@/components/ui/typo";
import Link from "next/link";
import Button from "@/components/ui/button";
import { Icons } from "@/components/ui/images/Icons";

type ChartProps = {
    label: string, 
    href: string
}
const ChartHeader = ({label, href}:ChartProps) => {
    return (
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Text variant="h6" fontWeight="semibold" fontSize={24}>{label}</Text>
  
        <Link href={href}>
          <Button variant="text" className="flex text-lg justify-center items-center gap-2 normal-case text-gray-secondary">
            More
            <Icons.arrow_long className="rotate-180" />
          </Button>
        </Link>
      </Stack>
    );
  };

  export default ChartHeader;