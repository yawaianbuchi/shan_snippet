import GenieTable from '@/components/ui/genie-table';
import { Icons } from '@/components/ui/images/Icons';
import useGenieTable from '@/hooks/useGenieTable';
import { Button } from '@mui/material';
import React from 'react';
const dataItem = { id: 1, rewardAmt: 100, maxCount: 10 };
const data: (typeof dataItem)[] = new Array(15).fill(0).map((_, idx) => ({
  id: dataItem.id + idx,
  rewardAmt: dataItem.rewardAmt + idx,
  maxCount: dataItem.maxCount + idx,
}));
type renderType = ReturnType<typeof hello>;
const hello = () => data[0];

function EditTable() {
  const { value = [], controls } = useGenieTable({
    total: data.length,
    api: false,
    data,
  });
  return (
    <GenieTable
      show="default"
      data={data}
      header={['Order No', 'Reward Amount', 'Maximum Count', 'Actions']}
      paginate
      total={data.length}
      {...controls}
    >
      <tbody>
        {value.map((item: renderType) => (
          <tr key={item.id} className="whitespace-nowrap">
            <td className="px-4">{item.id}</td>
            <td className="px-4">{item.rewardAmt}</td>
            <td className="px-4">{item.maxCount}</td>
            <td className="px-4 pt-2">
              <Button
                className="mr-2 bg-green-50 font-bold capitalize text-green hover:bg-green-50"
                startIcon={<Icons.penline style={{ color: 'green' }} />}
                sx={{ borderRadius: 5 }}
              >
                Edit
              </Button>
              <Button
                className="bg-red-50 font-bold text-red hover:bg-red-50"
                startIcon={<Icons.trash style={{ color: 'red' }} />}
                sx={{ borderRadius: 5 }}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </GenieTable>
  );
}

export default EditTable;
