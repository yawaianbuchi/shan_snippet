import Card from "@/components/shared/card";
import React from "react";
import Text from "@/components/ui/typo";
import { Icons } from "@/components/ui/images/Icons";
import { Stack } from "@mui/material";
import Image from "@/components/ui/images/Image";
import { cn } from "@/util";

type OverviewCardProps = {
  title: string;
  amount: number;
  imgName: "game.png" | "newplayers.png" | "reports.png";
  increase?: boolean;
};
const OverviewCard = ({
  title,
  amount,
  imgName,
  increase = true,
}: OverviewCardProps) => {
  return (
    <Card className="p-4">
      <Text className="text-xl font-semibold capitalize">{title}</Text>

      <Stack mt={2} direction="row" rowGap={1} alignItems="center">
        <Icons.arrowUpRight
          className={cn(
            "font-bold text-xl ",
            increase ? "text-green" : "text-red rotate-90"
          )}
        />
        <Text
          className={cn("font-semibold", increase ? "text-green" : "text-red")}
        >
          {43.54}%
        </Text>
      </Stack>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Text className="font-bold text-3xl">+{amount}</Text>
        <Image
          src={`/images/${imgName}`}
          alt="game-image"
          height={70}
          width={70}
        />
      </Stack>
    </Card>
  );
};

export default OverviewCard;
