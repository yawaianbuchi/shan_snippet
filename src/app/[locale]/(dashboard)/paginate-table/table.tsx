'use client';
import useGenieTable from '@/hooks/useGenieTable';
import dynamic from 'next/dynamic';
import { data } from './config';
import { useMemo } from 'react';
import Item from '@/components/ui/item';
import PhillButton from '@/components/ui/phill-button';
import Row from '@/components/ui/row';
import Eye from '@/iconejs/eyes';
import { Edit } from '@mui/icons-material';
import Card from '@/components/shared/card';

const GenieTable = dynamic(() => import('@/components/ui/genie-table'), {
    ssr: false,
});

const header = [
    'NO',
    'PLAYER',
    'PROMO CODE',
    'CREATED ON',
    'TYPE',
    'TOP-UP/REG. COUNT',
  
    'ACTION',
];

const Table = () => {

    const { value = [], controls } = useGenieTable({
        total: data.length,
        api: false,
        data,
    });

    type renderType = ReturnType<typeof hello>;
    const hello = () => data[0];

    const render = useMemo(() => {
        const item = value.map((item: renderType) => {

            return <Row key={item.id}>
                <Item>{item.id}.</Item>
                <Item className="min-w-[195px]">
                    <div className="flex space-x-2">

                        <div className="">
                            <p className="font-semibold">{item.player}</p>
                            <p className="text-gray-500">{item.phone}</p>
                        </div>
                    </div>
                </Item>
                <Item className="text-green">{'KMC8349'}</Item>
                <Item>{item.startDate}</Item>
                <Item className="w-[70px]">{'All'}</Item>
                <Item className="w-[70px]">{'00/ 00'}</Item>
                <Item>
                    <div className="flex items-center">
                        <PhillButton
                            className="mr-2 flex items-center space-x-1"
                        >
                            <Eye className="mr-1" /> Details
                        </PhillButton>
                        <PhillButton className="flex items-center space-x-1" type="success">
                            <Edit /> Block
                        </PhillButton>
                    </div>
                </Item>
            </Row>
        });
        return item;
    }, [{ ...controls }]);

    return <Card className="pt-5 px-4 pb-3">
        <GenieTable {...controls} header={header} paginate data={value} total={data.length}>
            {render}
        </GenieTable>
    </Card>
}

export default Table