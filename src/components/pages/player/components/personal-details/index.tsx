import Item from '@/components/ui/item';
import Row from '@/components/ui/row';
import Table from '@/components/ui/table';
import TBody from '@/components/ui/tbody';
import mm from '../../../../../../public/images/flag/mm.svg';
import Image from 'next/image';
import Box from '@/components/ui/box';
import Chip from '@/components/ui/chip';

const PersonalDetails = () => {
  return (
    <Table className="w-full">
      <TBody>
        <Row className="h-[52px]">
          <Item className="rounded-bl-[10px] rounded-tl-[10px] bg-[#F7F7F7] text-[#127C12]">
            Player Name
          </Item>
          <Item className="rounded-br-[10px] rounded-tr-[10px] bg-[#F7F7F7]">Alex</Item>
        </Row>
        <Row className="h-[52px]">
          <Item className="rounded-bl-[10px] rounded-tl-[10px] text-[#127C12]">
            Phone Number or Email
          </Item>
          <Item className="rounded-br-[10px] rounded-tr-[10px]">
            <Box className="flex items-center gap-3">
              <span>
                <Image src={mm} alt="shan-mm-flag" className="h-[30px] w-[30px]" />
              </span>
              <span>+95 09 388 388 488</span>
            </Box>
          </Item>
        </Row>
        <Row className="h-[52px]">
          <Item className="rounded-bl-[10px] rounded-tl-[10px] bg-[#F7F7F7] text-[#127C12]">
            Member Level
          </Item>
          <Item className="rounded-br-[10px] rounded-tr-[10px] bg-[#F7F7F7]">
            Level 8 - Grandmaster
          </Item>
        </Row>
        <Row className="h-[52px]">
          <Item className="rounded-bl-[10px] rounded-tl-[10px] text-[#127C12]">Status</Item>
          <Item className="rounded-br-[10px] rounded-tr-[10px]">
            <Chip label="success" type="success" />
          </Item>
        </Row>
        <Row className="h-[52px]">
          <Item className="rounded-bl-[10px] rounded-tl-[10px] bg-[#F7F7F7] text-[#127C12]">
            Registered Date
          </Item>
          <Item className="rounded-br-[10px] rounded-tr-[10px] bg-[#F7F7F7]">
            01 Jan 2024 at 05:00 PM
          </Item>
        </Row>
        <Row className="h-[52px]">
          <Item className="rounded-bl-[10px] rounded-tl-[10px] text-[#127C12]">Last Login on</Item>
          <Item className="rounded-br-[10px] rounded-tr-[10px]">01 Jan 2024 at 05:00 PM</Item>
        </Row>
        <Row className="h-[52px]">
          <Item className="rounded-bl-[10px] rounded-tl-[10px] bg-[#F7F7F7] text-[#127C12]">
            Login Attempts
          </Item>
          <Item className="rounded-br-[10px] rounded-tr-[10px] bg-[#F7F7F7]">4</Item>
        </Row>
        <Row className="h-[52px]">
          <Item className="rounded-bl-[10px] rounded-tl-[10px] text-[#127C12]">Password</Item>
          <Item className="rounded-br-[10px] rounded-tr-[10px]">***983</Item>
        </Row>
        <Row className="h-[52px]">
          <Item className="rounded-bl-[10px] rounded-tl-[10px] bg-[#F7F7F7] text-[#127C12]">
            Is Password Locked
          </Item>
          <Item className="rounded-br-[10px] rounded-tr-[10px] bg-[#F7F7F7]">No</Item>
        </Row>
        <Row className="h-[52px]">
          <Item className="rounded-bl-[10px] rounded-tl-[10px] text-[#127C12]">Invited by</Item>
          <Item className="rounded-br-[10px] rounded-tr-[10px]">Win Sein (09 748 838 299)</Item>
        </Row>
        <Row className="h-[52px]">
          <Item className="rounded-bl-[10px] rounded-tl-[10px] bg-[#F7F7F7] text-[#127C12]">
            Registered by Promo Code
          </Item>
          <Item className="rounded-br-[10px] rounded-tr-[10px] bg-[#F7F7F7]">UJK839</Item>
        </Row>
        <Row className="h-[52px]">
          <Item className="rounded-bl-[10px] rounded-tl-[10px] text-[#127C12]">Promo Code</Item>
          <Item className="rounded-br-[10px] rounded-tr-[10px]">JDB</Item>
        </Row>
      </TBody>
    </Table>
  );
};

export default PersonalDetails;
