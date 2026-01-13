"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import styles from "../../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoCol}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="https://res.cloudinary.com/dnyfmlnvt/image/upload/v1765407558/Screenshot_2025-12-10_160553-removebg-preview_kyaua9.png"
              alt="Logo PUNI"
              width={120}
              height={50}
            />
          </Link>
        </div>

        {/* Enlaces rápidos */}
        <div className={styles.linksCol}>
          <h4 className={styles.title}>Enlaces</h4>
          <ul className={styles.linksList}>
            <li>
              <Link href="/" className={styles.link}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className={styles.link}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/registros/quieroserrepartidor"
                className={styles.link}
              >
                Quiero ser repartidor
              </Link>
            </li>
            <li>
              <Link href="/registros/quieroenvios" className={styles.link}>
                Quiero envíos
              </Link>
            </li>
            <li>
              <Link href="/contacto" className={styles.link}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto / redes */}
        <div className={styles.contactCol}>
          <h4 className={styles.title}>Contacto</h4>

          <a href="mailto:matias@puni.ar" className={styles.text}>
            matias@puni.ar
          </a>

          <a
            href="https://wa.me/5493548635151"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.text}
          >
            +54 9 3548 63-5151
          </a>

          <div className={styles.socials}>
            <Link
              href="https://www.instagram.com/punidelivery?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className={styles.socialLink}
            >
              <FaInstagram size={20} />
            </Link>

            <Link href="" className={styles.socialLink}>
              <FaFacebookF size={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/company/puniya/"
              className={styles.socialLink}
            >
              <FaLinkedinIn size={20} />
            </Link>

            <Link
              href="https://vm.tiktok.com/ZMHEV9ucBahTS-oWwKZ/"
              className={styles.socialLink}
            >
              <FaTiktok size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Legal / derechos */}
      <div className={styles.legal}>
        <p>© 2025 PUNI. Todos los derechos reservados.</p>
        <Link href="/terminos" className={styles.legalLink}>
          Términos y condiciones
        </Link>
      </div>
    </footer>
  );
}
