import Image from "next/image"

const Footer = () => {
    return (
        <footer className={"fixed-bottom"}>
              <Image src="/Github.png" width={42} height={41.02} />
              <Image src="/LinkedIn.png" width={42} height={41.02} />
        </footer>
    );
}

export default Footer;