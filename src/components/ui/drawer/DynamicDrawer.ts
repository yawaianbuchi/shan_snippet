import dynamic from 'next/dynamic';

const DynamicDrawer = dynamic(() => import('./Drawer'), { ssr: false });

export default DynamicDrawer;
