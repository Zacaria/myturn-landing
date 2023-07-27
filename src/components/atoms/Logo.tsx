import Image from 'next/image';
import logo from '~/assets/images/logo.png';

// const Logo = () => (
//   <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 md:text-xl">MyTurn</span>
// );

const Logo = () => <Image src={logo} width={140} height={35} alt="MyTurn logo" />;

export default Logo;
