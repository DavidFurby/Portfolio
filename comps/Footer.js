import Image from "next/image"

const Footer = () => {
    return (
        <footer>
              <div>
              <Image src="/Github.png" width={42} height={41.02} />
              <Image src="/LinkedIn.png" width={42} height={41.02} />
          </div>
        </footer>
    );
}

export default Footer;