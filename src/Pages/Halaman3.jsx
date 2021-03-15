import React from "react";
import logo from "../Assets/Img/Logo.jpg";
import "../Assets//Css/pages/Pages3.scss";
import Select from "react-select";
import { UploadFileDrop } from "./Components/UploadFileDrop";
import { MiniCrausel } from "./Components/MiniCrausel";
import { useState } from "react";

export const Halaman3 = () => {
  //

  const [HidePerubahanPP, setHidePerubahanPP] = useState("hide");
  const [HidePerubahanKK, setHidePerubahanKK] = useState("hide");
  const [HidePerubahanAL, setHidePerubahanAL] = useState("hide");

  // Hendel Hide And popup
  const ChaneAllTrans = (e) => {
    if (e.target.id === "PemegangPolis" && HidePerubahanPP === "show") {
      setHidePerubahanPP("hide");
    }
    if (e.target.id === "PemegangPolis" && HidePerubahanPP === "hide") {
      setHidePerubahanPP("show");
    }
    if (e.target.id === "PerubahanKontak" && HidePerubahanKK === "show") {
      setHidePerubahanKK("hide");
    }
    if (e.target.id === "PerubahanKontak" && HidePerubahanKK === "hide") {
      setHidePerubahanKK("show");
    }
    if (e.target.id === "PerubahanAlamat" && HidePerubahanAL === "show") {
      setHidePerubahanAL("hide");
    }
    if (e.target.id === "PerubahanAlamat" && HidePerubahanAL === "hide") {
      setHidePerubahanAL("show");
    }
  };

  const options = [
    { value: "Indonesia", label: "Indonesia" },
    { value: "Amerika", label: "Amerika" },
    { value: "Engris", label: "Engris" },
  ];

  return (
    <div className="ContainerDefaultSec">
      <div className="ContainerKiri">
        <div className="logo-Container">
          <img src={logo} alt="" />
        </div>
        <div className="ContainerCrausel">
          <MiniCrausel />
        </div>
      </div>

      <div className="ContainerKanan">
        {/* Title page */}
        <div className="TitlePage">
          <h3>Formulir Pengkinian Data</h3>
          <p>Harap isi seluruh field dibawah</p>
        </div>
        {/* Show Data diri  */}
        <div className="ShowDataDiri">
          <div className="DataDiriTerakhir">
            <span>
              {" "}
              <i class="fas fa-user"></i>
            </span>{" "}
            <p>Data Nasabah Terakhir</p>
          </div>

          <div className="Datadiri">
            <div className="showData">
              <p>No. Polis</p>
              <p className="hasil">
                <b>12.4430244.1</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Nama Pemegang Polis</p>
              <p className="hasil">
                <b>Jhon Doe</b>
              </p>
            </div>
          </div>
        </div>
        {/* Show Data diri 2 */}
        <div className="ShowDataDiri">
          <div className="DataDiriTerakhir">
            <span>
              {" "}
              <i class="fas fa-phone-alt"></i>
            </span>{" "}
            <p>Kontak Nasabah</p>
          </div>

          <div className="Datadiri">
            <div className="showData">
              <p>No. Handphone</p>
              <p className="hasil">
                <b>+62 - 8123456789</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>No. WhatsApp</p>
              <p className="hasil">
                <b>+62 - 8123456789</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>E-mail</p>
              <p className="hasil">
                <b>example@gmail.com</b>
              </p>
            </div>
          </div>
        </div>
        {/* Show Data diri  */}
        <div className="ShowDataDiri">
          <div className="DataDiriTerakhir">
            <span>
              {" "}
              <i class="fas fa-map-marker-alt"></i>
            </span>{" "}
            <p>Alamat Korespondensi </p>
          </div>

          <div className="Datadiri">
            <div className="showData">
              <p>Alamat</p>
              <p className="hasil">
                <b>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, nulla.
                </b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Negara</p>
              <p className="hasil">
                <b>sample@example.com</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Provinsi</p>
              <p className="hasil">
                <b>sample@example.com</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Kota</p>
              <p className="hasil">
                <b>sample@example.com</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Kecamatan</p>
              <p className="hasil">
                <b>sample@example.com</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Kelurahan</p>
              <p className="hasil">
                <b>sample@example.com</b>
              </p>
            </div>
            <hr />
            <div className="showData">
              <p>Kode Pos</p>
              <p className="hasil">
                <b>12346</b>
              </p>
            </div>
          </div>
        </div>
        <div className="PerubahanDataCheck">
          <div className="DataDiriTerakhir">
            <span>
              <i class="fas fa-id-card"></i>
            </span>{" "}
            <p>Kartu Tanda Penduduk</p>
          </div>

          <div className="UKGroup">
           <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGB0bGBgYFhgaGBgdHhcYGBcYGhgbHSggGh0lHRgYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0mICUvLS0tLS0tLS0tLS0tLTUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAK0BJAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAQIEBQYAB//EAEEQAAIBAgQDBgMFBwQBAwUAAAECEQADBBIhMQUTQQYiUWFxgTKRoRQjQrHBFTNSYnLR8FOCkuEWNMLxJENjc7L/xAAbAQADAQEBAQEAAAAAAAAAAAAAAQIDBAUGB//EACwRAAICAAYBAwQCAgMAAAAAAAABAhEDBBIhMUFRBRNhInHB8IGRoeEUJCX/2gAMAwEAAhEDEQA/APRkQW1AH+etQLzS0npUpjm61BxLAmPE16uFGjyZSsba1JY0uHeSWon2ZlEASTQisd351paJ3HTAY060YEnekYg/0gfWmiW12FADTJNOSyacb0bCkW+3hQGxE4nxM4e0bhXPDIoUECS9xbY1O2rCoS8fY3OWthuaLjIy50gFbaXJDbEFbi+czpU3jeBGJtNZJy5mQkkTotxbhESNwpHvULF9m7DtbQoq2l5ncURJdQuYMCCGETO9ZyUr2NY6a3GL2lzibVi455XMuKCgKAllC6mGYlHgAxC76iet9olYEqrMeZatoJ+MXVR0cfy5WJP9DUO1wG9bEW8QqsbS2nJsgyqFuWyKHAS4FcgnVToco2qPgsFh/tWGuWrui2jbt24JzG1mti4T0yB3WSIlhrU3MdQOw/ba0QSbbBvs63ws/ErbrO2Yaf4KnXe0gzXosuyWc4dgy7omcgrOZQdgx3PlWffs/hmwrA4sRb5NkXVQ9y5az22BUNLZxdy5fPc1LucJTEXswxNsl+cqEWMt7W2VNq44IzIgcHKVBMLqdzOqf7RWmP7Ze8V4yLYswhZr/wAC5lXZM8Fz1gQB1JoNzj2VLzG24NpLbFWIDfeD4TuARsd6r+L4mzct2rP2i1AUSLtjm2nBm2rMJBQ5lMHMNZmajrgkRblgYuVRLKYlTaZ7nd1Qgqe5mXTUNAHSm5P9oWld/k0/DuJLcV3jKLb3EMn/AE2KlvTSaqcL2vttbW4UZARcJzESht2+aAR4tbOYVW3SrWrltcYgtYhrrrGGvG7ldw1zKweCIeM2T8QpuJ4PYc3IxJCrdw5dXDMwYgIFJJBAuWnRIjSPUAcpdAopclgnajNky2mLOElWcLkZ3uIFYxuDaf5VJv8AaJrbJbNgtcZWfIlxD3VYLCkxnYz8I8DrVRxDhlm29wPftK16+l0LdtG4gALQjLmHdNy45BJAl4omP4dbvAYU4jCq3eTIuFARGMvNn7ybd6CTGY+OWjVL9oNMXx+S7vcbRLeIvMjZbDOrARLZFDSBpEz1oF3tA33Y5BzXHKJNy3kMWjdzrcEgrAI9RHnULA4uwtrEIuLjOWuBzbkqDkt5grgi6MwAJAjvdKqRw6wAGF/D5ueW5f2R2s5hZKMv2cPmUwwckneDFDk+vwCiu/yavBcQL3mtFCrJbRzDZh32uAAEf/r386j2ePzev2ktEtaiCWAW5rFzKemQ6H2quw1027rXUxOHTLZtC6n2a4AqBrhQonNBQHORBzRHtXYPA2LV+0pxc3g1xbgacjtel3QCYtuXyuFkmB5zT1Pb/QtMf2yYe1AFrD3GtMoxEFQGBy2zk+8eNgDcQEfzCn3e1Npbl20FIa1dtWyNO8LpRQwPgC4kenjUU9jwUW295yq4YYdcvc/rY6mcxCHL0ybmuxHZHMyu92bgv27xZUgNlSyr2yMx0ZrIbfQxvGp9Y/os0b29aUW6bduEUIya3RlsEe34UjGQfEUy25B3pbx/EKKA6dQfY0zp6H6UrbkdDtTQ23noadAOTQnyM0Pb5z86da+o0pgP6j+1MDo/UfqKNYOpHRhPvQc06+h+WhrlaCD4GKGrQiW/Drd0BriI7ARLICdOmtdRWaDp611cjwkzo9xonOoVSfKqdDJLHYVNxzMUY7ACax/Ae1IxRtILeUsrlxMlShSBtqGDgzWsGlyYOLatcGyw2J013O1OxFk5dPiPWsvY4xdZsQXt2x9nkd1m7xCBxuNBBirTs3xpsSOby8tsoCrEkFjuYXcKPE6nwik6T2K0utyQ6nRfDemu06CrF0BEnc1E+zlelaRlZDVDEtRT9Kjs5NCxN3IASrGSB3RJ1MT6edVYl8Eq9a1maWZGm4rg+m1UeG4u32lbBNpswcnIxlcsfED4zUtpFJWXmhg7eNYvhnB8Vhc123bNx7iXVZC9sG2wuXHw5UloyHNqATqwMb1c4XijnE/ZpstKO023LFShUQwjSc30qZwfGtc5y3AqtafISpMGER82uo+L6VnLTJmiUomYbs5irKG0i8xP/p2zWSqNntOof96/xsgDTt3PE6zsJw/EIwvcm4xF+42Rns88q9lEzMwYWyQyQBm+DL1EVN7Ldp/tTXFhAVVWXK8yCWGvn3R/yFT+GcTd1vl0UPacr3SYaFVpE6/irNKPTLersz+A7MXmJW6zJbOHtI6oUIuMLt93tkkZgBnUSInMdfBeG8FxS3BddUm6LouqIzJnJuW8zZofIfuxl/imrnA9oBcQHJDHDC/EyBO6zv7xReF8ZF6QFytyUumT3RnDGJ30y6mhKOwNy3KA8OxFv7G3Lvfd4Zrb8l7AdWPIIB5rBSO43wzsKjY/s/iHutiEUrzMRYLqzJma0i4ZiTlYrmS5bfrrLRMir7h3G2u3mtg2X+7zBrbkrMxlPh403h3G2exeZrahrTukKSQcmkyR1qtMWK5L9/kidpOHXmu8zD235hQKLivb5Z75OS/auboJkFMzasNOrBwrEAfZ+X3PtXP5+ZcuX7R9ojLOfP8Ag+GOs9KPa45dAlrazvoSadhO0LuYyD60VFu7FvXBXDs3dOEXM7m8tvIls8oC0Guo75SBDGEX4ifhqVxLg1xLlu9bN+8xd2vOjWEua2ltpAfKgWFAga6VKvcYcHUL7Ghvx1o0WhxiNORT8b7PX7vNvW0YXGS0gFxrea4kRdRirZQwIRpmJUxvVk3D8Vbfl2lbL9pN03Q1sW2tve5jq6t384UlBAjYz0HJxu51Ao1njTmZiklGwd0aLNmEHQ0hbSOoqs4Zjy4JYe4qeoG5NbrcyrcWOtIXFDYzsfzofKJ607QU+g+h6UBeqmnZHUUxzMN4U9gpnZtAR0pPH5iuY6+opgO3yNMKCdD4HUetDY7n0NKTAA8D9DTDpp5x86EFDyP89a4CfQj6imD6x+Rp56+O9Mks8IwKCdxpXUG0hgEbHWlrna3LJeMaUKjqCPpWN4b2YXD3bd4Ocy2eURGja6N69K27wqlj0E/LWsnhO0eFuHMGMFQ3eBEZmKgf1SIiiOnsHqrYFh+E3FF/NcU8+SQLZEEqE6sZ0FS+E8G+zhbdp2KFR3CNFYbspOwP8NK3HcPmE3UGxHgZAIIPuD71IwnEEdmKsGK7gTPUT8wR7VpUb2Jbdblxh3kwY7vvRG7xqs+EAg79R+RqfaujLp71Mo9gmONtR0FVmPtLc7jzAYMIJGqmRsdp6das1SajYjBbtRF+Ru+gcSNKp7fDnN5Lr3FJthgoCR8UTJkztVrkKiai4/HJbkzJABIHSdqukxJvoh4fh9znrfd0JRWUBbeX4sskksZjKPCuwvZplvXbr3s3NDghUygZ1RSR3jsEHzNDXj6a6HaYqywXGlcbGQKykos0TkReGdnmtXbdxroY2rJtKAmXQlTLamT3R9a7hXZ9reIe+90OXzAqEyjvZJ3Y/wAA+ZqRa4+hkEEGPbSi2eMW2Rn6DeoSjwinq7B4Ts/Zt3zdREUG3yyqoAIzEk6bzoI8qFb7NWka+1sLbF20LZVUACgZ+9pvOYafyilTtLZaDOjfOhYvtLaHXQmKa0sX1BMBhbtpOWbiMFUBYt5dhAJ7xn0qq4f2YZXuu94NzQ+ioVgsZJ+I9atLfGbbMB1JjSrbCjUzV6Y0TqZS8N4a6nvOrQI0WP1o1zhpLFhHpFWz2RJNAe8egpqK6FqfZTX+FOdyvsKD+xD1ary2snWuZpMAaU/bQa2U9vgYAktJ6VH/AGM87itA30piHrT9tD1sBgcMyiGj2FHJk1JKedOa0AKLpUKrMT2tx91L+VLjKMo0BgdapDxbEf6z/OrPtmsYn/aP1qirwM3iyWK0mfoHp+VwpZWDcVx4RNHFMSR+9uQN9TpT/wBo4qJN27HiSYq04VZL2Gt5csx3o1OszVxasQoVjIgCIEaeVXh4eJJJ6mceZzWWwpOOhWmZJsbiQNblwTtqRTP2nf8A9V/+VblLSvoygjz1qDxDsqj62jlPgdRVTw8RcMnAzuTm6xIJfwjKHil+Z5rfOaIeN4j/AFD8h7VPu9nsphryA/550P8AY1vrfT6f3rC8Zd/5O1rIy30r+gWA4tea7bDXGILiRprrrW0B29waxi4REvWclwPLiY6bVtU7xiPi/SvSyDl9Wr4Pm/XY4anD21SrxXZNw7lVy+FdRUgjXeurrPF3O4hcBUrqQQdBvtWKucHwjK1wG5ZPdtsWIUMbcr8J0Y6EHpoD0mt5y4GtZbF8EsYiUN3VblyQY3eGdYO+hEHz61LKiVa8PwQTlteUmIINxQdFC/kv0NH4PhsPYLOt8MbsL8SmYJIEjUt3tyZ2qJxPs7ZZXRbkaMQSRlnMzQWiBq8RSfsO1zIOIYOcrkd3KYyKpiI/+2B4nWqqnskJpVVsuL3G7QWVLOoBYlBIABgk6+OlTDxm2nxuF0nKSM8f0gz8qqLWFsqj2zdB5qtqSNFDaidtC/1qHj+EK96TcUW27xhxmJNsWxAjQQB1NW3KiVFG4tcQtlrgB/dxnnQCRmBnbagjjeHLKnMSXErqIbXKQD1M9KoVwod7uW+yG7oyjLJyjLKyM3SpmB7L21A+8ZiDPT/U5n/9fSs2pLgpUWNm9bcE22DRGYAgxOoBg6GKrOLXrXLus7tCgSog5ZIjTeTI61O4bwxcNbZFJI3130UL0/pqp44lvlXOa5yErmAEkaiBABJkx860im42LZS2KzCnCrllmzO5twRBDDcHcAbazGo8alNfsoWUi4sMqE5dJcgKN+sio2Iw+Dv3AqhswUhVRCDbIdSzZY0bMF38qdjL+GYXC9xgMwZjlIE2CsgEiDqsEetZ/wBF0SOJ28PaKi47KTMQC0gRmJjYCRJ8xRcFaw7k21Zo3IIIBElZBIEiQdqg4xLV1rK3brLeZLijSM6nKbggiBoF18qdwzHYQAkXWfOVOYjqWIQFgNtCANtPOk6vYe9BFGABBzH4iICtAIKhidNACyyTprTuJ4PCW2+8aCVZ4g6BdWOk0HGYTDEs/NZc6tdbXQ2yULdNBKr56mi427hXg8yAtl3EajI4gv3gZ22+lNRVvgTdg0v4RSIYgqdZR5XXKA2ndk7TvWm4ZxO1dByE92JBBUiRI3HgRWds9lbUIcx0bMdBJMhhruACBp5VdcDwAtM+pZmgkwoGgiYUASep600pVwS66La08kio99IOkVBtcYtl4U+MaEA5TDQdjBPSpi45HlQQSAD7GQDPqD8qtNJk0+xeZAimW0JBIFVtjitp2K5oOo1BAOU94AnQxFSxj1A0ZYiZkbeNVa6FT7DKhIoi2SCNvSoY4hbZ8sqWgGAehmCPHY0cXwZM67bzFF2OhVJD6b1JzGdRURiN519KLbvQu+tKSCJie3X/AKn/AGL+tQOC4XO8nYfn0qd21YnEa/wD9akdmLPdzeJNeFiQ1Zlo+4994XpsXHlqi/s2QBVZxniy2RtLn4V/9zeXlU7HYkIpJ2Akjx8B7msQEuXrhd/xH5eArsxJqCPDymAsWTliPZFfj8ZduNme4x8gYA9ANBWg7H9pGRxavMWQ6AkyVPTU9KcOHqBGWqrHYEqdBp9RXJrd3Z6aWXxE4JV4Zt+1/COYnNQd5d46j/qsHFendm8XzcOpO8QZ8RoazHEeIWbdxk5C90kdP7U8eCklO6NvTc1iRTwdN0Z/h/763/WPzr0fDLEt4HT3rEfbFu3rIW2Ehxt11reqn1H1FdOQpakn4PK9fbliQbVbcHXpnQ7+tdREgjWuruPBH3lLggEiQdR0PQ+GlYm32cs3LrXDihcd7kPGi50HwoA0AwNZn2rdYskKckBogeWm9ZK32LZAeXeiRJzJml+W1tm32IYafy1MuBwddg8R2NQIAlwSNgVEfDaXoR/pz7mmcS4Ahe3ca9la3bCT3QI2JOwBIJjwO1FsdjSVHMuK2WY7swDcZ4EnwbL7VVfsIHPOMsvFsqQRE/AATBMwU386Ft1yU990yTb7JhYy3YI0+GQR3Nxmn8A2Ip3/AIij2wrOdFy5somMjoCJ8nn1FXP2+0LYY3ECnTNmAXoIB67iiHiFkLIuqR4hhG8HX10rbTAy1SKnBdm0tXOYHJbMDsOjXDE+fMPyrSLcI1Ajxmo9i6GnKRoYMHY9QaNVKCXBLk3yHu3gwg/SqbjOAV7VxXIVWy6wJEEHXx2+tWUhekj8qDj7a3EuElEBiSdNh+Izr+lTJUio7szy4Kwbi3UyrkUjKUBGrBi2h3kb1BxfDMMUcc49/mSYk/emSIJjQ7elWdvgwMAXUOcSAGGo8R4ioWI7L29zfUDzYawYP10rnb7o2r5BcQwFi5kJvZSgIXIkfFlk6neAR/uNF4RwrCWDq+bQABh8MFiCBtPe6+FF/wDHk/1kBWCQWGg8TrpUhuzqt3g85gII1Gn504/bcT+5XjBWWCh8RKqotiBlJQMrQSCdSVAkRTbvZ+w4a2brCRCEfEi5naAZ7wIcrB6AUQ9kCCO/5jwqZb4G4YNmEiqUX4E2vJbNj7arlzaj5/Wi4biCt8B1jXxqvbg4clpgkR707h+AZLhZiJiBFaq1tRm6oins7mUJziEUEKAOkyA2sNHp61M4Zwg2mLZ5zfEMoA+J2hQD3RL/AE86sGSkmn7UbsWuXZTXOAnKV5uma4yjKNGfNJOveADMI03odns3ltxzIbXXLtNw3CBrI1PQz71oMtJlJ6GKPbiPWyiwPZ8IUZnzMuWDl8M/UknXP9Kt3sd7fSQdJXprMHva+PlRl38hTM+5pqCXArb5F3NMJk1xMCnDQT1/zWqYkZDtlpiB/QP1q64CgFpI8Ko+1/8A6gf0j9au+DP90vpXi1/2ZH1mZl/52F+9ELtNc7qgtlBJY+2iiqHC3VB+7uyeoNaDjmFFx8p1CgVUJwQLMTqZNRiu5M4IKootreIlZqqx1243wge9WGFTQrVVxDhTvEGIPz8qyW5b2RpOweKabltvJh+R/SqzjfDrr37jKhILaUTshYa3fEncH/4qFjuL3uY8XCBmMekmnOS9un5PR9Lji+7JwrjsbgsE9u/aLrEuI+Yr0Yj6GR715vgMU737Wdi3fG5869HVttPEGujIV9Wk4/X1LXDXzT4+451MyOtdTBdy6V1eifPEu3b6mkuvJAFJiLs6CmtovnQkT8HXW/CKzPCuA8t7Q5isVF2RP8byCg6Rsa0WGtkCSZrIr2fxFtWNu4CzxJzQygXSxRDHwsrEdIPXXRS62Lj9xOIdni1m3ba6i8lLSBpgd11a4fKQix6Go2I7Ki7H3koXcv1LqxBClvEMoM+Ap2N7MYh7boxVsyCMzEnOAo7xy9FBE/zVIxvBMSSxRlth2korEARbRFbNEEypO3XrUp77xLf3J3BcI1iyttmzvJLN/EzEkn61PD+VZu9wbGAXFEEMdCbrZ/xd6RAGpTQDad60eFDBFDfFlE69Y119a6MOXVGE492GS5O9VfFsFmRwMokoQSTBykNDeAMRNWDCoHErBdLkDUx+I6wPDZfarkrQo7MpcBwZlYM1y2Vz8xo1Pw3F5az+D7yfY6a023woqqAXLZNsnIGPcgm4SDpp8Y/40/D8JukGI10iah3uA3ejaTrrtXLXwbW/JIscFyFQHtPkDRm3Yty9GI2y5JBE65fCtFwW+LFlbbMpKk7HoWJGp1MTv13rPW+CXBHeHzFHvcFc65vrRFU7oHvyzVNjrRiSsdNRSryzoGE7jUTWE/YF4wQ+gMxNWWFwN1Xzk9Npq9UvAtKNRmtzGceO4rmCnUMI8tazN3hzSWBnXaauOCWSkl9Ax2qtUrJaRPGX+L6UUInjrUXEIs906Ulm3J0rXogk3cuywfelFohdTFLCoKitdLNqalWxiNoN5mh0+7cJPlXKQekee9WIS2JknYUMmT5US4sCBtQzpSGjI9sGH2gf0D9andmMTKFeqn6HX+9Qe2A+/H9A/M1B4Ti+XcB6HQ+/WvAxZ6My2fbRwHjemxS5Ss0eIu/esD412IaFMeFA4k/3gb+IflpUPGY/J0J9Kc9pM8iG6D4NwurSfOKs0YGs/h+J7d0/KrG1jczABSPGRFZltPss7aBXz7QpmqduFWNziB8xT+OYvLbyA9659FG/zMCs8anEmopJqz1vTcvOUXNSouEw1pL9nl3M8uJ201EVvh18xIrzPhP7+3/Wv516aHjzg/SuzINPVS8HlevwcZwTd7c/yPS3mANdQbjEHTalr0Nz58mJby70igEzQMc7ZGKDMQpyjaTBgSdN4rDYq9jsJZKMxYw7Iy98s5VSFObWA+fQeKgVLlQRhZvXM6Vi7XB8XbByMXYjQyJtLzSzW020ZTM7yNTtEnD3Me+cENbBKwTyzAl82Uxse4dR1OtBS5xFTlKkjMCGHL1GW3nVhGonmREbCk5X0y0q7Q61axwVs2d2y908xFEQAQR/HMmdvOm2uH40oMzuCOmcAkcxyZIn8BQb9K13K0E7U7rVaETrZh/snEHBD59bcNFxQC0IQRDaEkNsBvvUuxw/Fs7Zi6oSsd9SQAxzQQZ1XL4dfU7ExFDdutCgg1MqcBYuLati6czhRnMzJjX60C/hwc4IkECA0FTp0XprVzcXz3qm41Ze5ZuomYv3cuwG4nL19Z9q11UqIS3KnB8Mu2wFVIBsBMylQFcTLbgneZFQ7nCLhFvLbClEUXBnEX4dWImdQYYy0SWg6TRf2fiBcJFt4zSZYT+9VoBzQ4iYkLAEa0XiWDxL3uagYKoChJALBgwdoBjSV/4msLTNVaI7cMuBwzWFe2MxFoFdMwTvZSck6MI6A+ZqJd4DioBRwCqh1GY/vASuUn+EJpPvRuCYHFrfs80kpaRkPfBmQCGYTv8Ah/2nxrX5AdvSDV4cdS3JlKnsZe/wa4FNpB3c1sh5EAIoBBG8kjw61Ctdn8SrIZz27a2+6W1YAszoSd4LSJ0IAFbRRH5EGnKOo9Kv2Y0T7jMk/Db8XFFsRdUqIZRk7xIZgT57LPpWrtjuwd650jWnAwZq4wSIlKxmejJdyjQb0x7etNuJrViTaEZ6cNBPU01bdOIkzsBQAxVMVzHpSs07bCuC6eH50WMaszNOz+/+dfGkY9BXG30qWNGQ7Zn78az3B+tUcVe9s0i+P6B+Zqs4fh87gedfN5pXjuj9C9PxFDJxlLijRYbD82wv8QGnyquA3BFarB2MqxQ8bwZLneHdbxH9q75YOqKrk+U99a34M9aw+um1T3GhaD3QSfQChrw64GgGRMDQ/wCCtRgeGxbZWAOYQR7azWEcJ3TNniqkzDW+KWiS72czHxI0HQUQ8XtDawv0/tUDiWDa1cZWWNdB5dNetQ65J4koyaPq8LKYLgmrr7suLePFy9aARUhxt1rfRtOkiD6ivM+Ej763/Wv516e2k/OvQ9Pk5ar+D5r1+EYTgo8UKjaaikpl0611ejsfP2Ex9thbcSxbKcsZcwMfhnQHwrG2bmLQ5lW+VAf8JOdgi5e5clk1B6wTtvWs4wtw2LrLIcW2K5dTmynLHiZis0cTjbKrPfFzUZs75CEXuFonvNJ20jSs5dFQ4EsY/GkqxW7GxXlHUC7GaMoObIQenXTSp3CMZi2uhLqMFySfuwqqcqnVtZObMND7aSarCcY4hbtQ1k5s7QWRm7vfKkkRqSFWOgg6yKPiuNYpCCwhn5gChGOUK9tQzDNqNTr57VCdeSn42GYPDY2zZt3Mzl2CrcWGuMsBiXg5pYnKO6Ig7dQt5uIm5buQcoJzBVAGXJazECdWzF4B2g+5LfH8S2Qcogm0WI5baPyy0Az/ABDLBitBwm/eZCLoGYNEhSoIgEGCT4xv0qopPixSk1yZm5xHiDczJbYQVyB7YG7MrCYEgSjddjqafbucRKgkZWKmYCnLHMgQdNSEMx+KtmtoAU/Sr0/JOoxyYrHO5UoVGUa5F0bPbDEHY903DudukRU24mIOHYEkXSB+EAAyZIjyia0DLFU3Gbt02rxtk5kAKgLBJGuXMfimI02mnTXYKW5StbxMKusqZY+NRr1rFZ9zFCsXMfPf5ggo2nUXbtsskf8A41DL6Gj2nxiiYcsVuhZlu8buW2WkQkKZ03ANY8vs0BHC4oSZPpWvsWwVUHeNayrPiURQ5u50DIYDTcIYZWV1BBYr0IymTqK4tj+YVAcW+Zy5Pgzczmz/ACqcnrVxlp4TJcbNfyPPQdKQ4fwMVlhjMWWuM4dLd393CluWEcCCB3lzpqeu/hUjAC6zW2Y38v3mYZ2IIX92RoDB6SBPnWixGydCNE1rUhY96EQwGhOlVXZm7iZf7QrTo69YVt7cxoVgaedX6CSf4SKuM7RDVMiQ3h+VEGaeo9qlLh/OacVp6xUReUdtK5sN56dBUhgAJNMuMTttStjoDyQo1poQbgfOiW4zb6edPVYJ86dgDAGhAiKIBSck7TpRGgDepY0ZbtJwg3bwYsAAoHmdTUvB4JEUALsNzvV0LYO9LbQagxXP/wAeOpy7O2WdxZYaw72RCt3BRQ460Z7UQYFR8Z92ruROVSY8YE1poRza2EUr+EDTbzqTZvfTesuvHWU2w9kjmNqZMKhCgPttmYDWNialYTi7m7y2RQOY1uQTPdt551HtUfSXbRY8b4XbxCnQBwO63Uf9V5/xPhV2yTmXT+IfD869KJj5Ux7WcQRoRqIn51ljZSOJuelk/WMTLrTzHwebcGcc63/UPzFem5hpPht5eNQ7XD7QIItoCP5R7EadKmARvpH5U8tlvZu2Y+pZ9ZuaklVD0YAQRNdQg0adOnpXV06TzbE43imFi6UBzBGy5RJkKSIHyrKDj+JtLDpmusSGVpFtYVSio2mbOG311DCDEDWcZv8AKs3HQ95bbESJ1AkGKx2G7UXlzI45usqSUAAFtGKh1GXNLGBpAGtZy6KhwGt9qcRzLivhigQNLQxXunK31ZPaaKvaK4wW5yrY0hnZW7v33LmRsoAzkT79aTFdqrlslmtjKVbIhY65XcSWy6EhNtvWomE7Sm42It3rYa2Li5S0AZWNoQNNcmbMSSNx7Rq+StPdEnBdr7jn92pJRyIDakKzCJ1IMAbdd6M3aTEqyq1gEkwSMwDaros9YJPXb5Gt8Scrh+Tb7j2bjFFiBlKZTJjxOnnVbw/tRdKIGt5yVQuSQIlbMhVC663JgnpVPbli28A27dXTnhLZKhCIDRLIWa3JPxCAPPXSrDFdpLylZQQ1yBo05M6rmkmCYJbTp7mqrDdrVtFhbw9pe4HnOQNUdgjELo/ciPE1o+z/AB/7TcZCgAyBgQxJ3ggggEQaSl1YSj3RBtdp7zM6JbUwwCkq0RFwmQDv3AOnxbbVP4hibvIe4mjrbV8oBzTGZl13kAir424qq4xi2Fq7ldFKgZSSdJ6sIMeuvia0SashOzILi8e+YS6MMjLK6Hm3UKKRH4FDqfU1ZcB4jiXxJF0OiE3QVK90FVtRDRqJLEHrNRLfG7zXrac1ssXCT90pOV7YAzwVcQx+GJ9qNxPjd/lkW3HMVsRIgEqFD8okdB8HrWS/k0fijYF/ymkTX89axGA7S33vy4yWl5QaRoCWZLxJOwzACaY/GMUc7K7ZUFxlIC5SBiHRS2klcgHw6mtfcRHts3HL3j18jThbny0qg47xO/a5wtiQtlWB07pLuCYjvaAaVUft6/8AeFr2QotwouVfvGW86KkESZCqNNdaJYtC0G7RB86co6Vjsdx28EKq0XFuXsywJVFtOyGPAHJr1mrPgVzElS94kgxkzBM2qgtOTSJ2601K3QNUXYNCfEbg0a14GlNjWavsjdke62YCPEU4WyBHj9KPywutID1iiwB8vQCn9fSmq0kmhkGdN5pjscH3O1N5cjNGtOCyZjTrRMnQHSkwAsSYIpyWiTJowQCmXLtAFfxvENat5ljcCSCQoJ1YgdKrMDxi5cJD2yfuw0KpBVj+FpP+dJpcRxe+4uPYRTbtzqxOa5lMOEGwGhAJOpG0a1XPxZnxdm5bYtaIW3AMAm5ba6CR4gKn/KspOnZrHgTC8bvM6A21YEgEhIkGCVAJ/DJGk7axRcZxZ1uuECgKwkshBXNlGY697fWNNhJ1rTBcxOnhWY4zxS9cGTDEqFuLbN0D4nLZci790bs3kQNZhONK7BO2Ev8AGL+UHIqiFaIM6oWKid2nYVpbRBUGSCdQNJonr5GnBY+f51aXkzbsYqz6ESPEGnqu09dD60pEDzB89qcxGog+IiqbEIkRruNKWmMx8TXUqYWiSuH/AIqHcRNsojfYfOnNezabeYj9RS27QHdY6ef1qd+xJ+AV+2G0yj5A+hpowyxlIE9dAdKOCF6zG1IU+Z+lOw3BBRuANNB/aK7k9SAJ6UaPpt/em5o1IJP5UWBU/wDjOHIYclYYy2rCd4kztqRG2tWS4cJ8IUe0dI39BT2DHWR+VIV/mE+O0/pQNs4s3qDTWUZdp8RXFG3GnqPnRYjXfxpiQAYZZ1UR4Rt/aniwAZgeBMa+WtGUfI03PrSuxjGtDqAZ0NIAI2EbVxnr6H9K7LqPOnQWNudPPemJaXWQPMwJ9aKATpGn5Gn5JM+x9adiI4t/igEjQ+JHrRUSJnY9KLP03ob3I9KXIDoXppSMSIg701rfgZBphzRHWnQWITtm6b0ZoYb6VwtayfcU4L4aCk2MAlrTwiiIsa9TTyRv0FML9YmiwHDwHvTXcDQCTXOdgPenkCI60ADdTGulDd1jbUU42pGs6UXlDoBTEVmOxluymdoC9B1JOygbkk9BvWN4Zg4t2lYG0WxrkgNBXMrlYboQpAqXjbGJv3ExVk6JeKqDlyLaByuwB/ESp1GsaUvE+CnG4NBrF3El8yjUKXcK2v8ALlrGb1OjdbdmgW1bto9m0/3pVnANwtck6Z4YkkTHlVVwu7bf7ClvZFZ2HUFEyEN4MHYzPUGhW+z1jCZFVLt+7dLAM1zK2iywLSDl0mBNQOC8JtnGXEu4JEhRORs4zEsxLPoQSI3/AFobbFtTN9IB9PDWQaUv5EHb1HTrUPB8PtWv3SKk6GBEx0Pj1+dSt4gdN/TpWpk2PXWD7H9JpoOh6xtHh4U42Z2/qH60QiCDoJ0IkUrEByncdda6jJdCyD4/50rqVjFt2pEgZaRxmaDqOtSSs6T8vYVHtrrlneRP61KYvgd3R+H6T9OnvTCx3A1P6flXEZAY6H9YpQIMa6id/wDPCmKxp6MPpSz7k0hGggwCdvD0pSY0GlMY3lHqYpeWOhonKHnTSvhRY6GmRvqKcGA2k/KB50nMOlNbTbT5eH0oEISPbyGvzArmURqIG2sf2p5txEdaaoneSdpmmANFM67HT36US2o+f508efp/3QhdzGNp+fzosKCO8b6T+dNBJJ+Xv401bmY5T1Ez5ikWJmNwZ8dPOgGcH6+GjD9aUASR+EiktXcwzR1iKJMHL0oYWNWwdwZinw00rGNv0rrzles+1J2Pg4j+IxTHYnQDTxpjDNvr/n/dEfUA+BimHINRO8FRt50qdfXTSlEyYOnhrXIN260xA4b4QP70ZRA86aTHvSs0aAUmCFyMfKmta8TSqTOhjzpGEgnqP7xRuMyeCXFG39k5TWwCytfPw5M5K8sfjYqd9lPyrS2LK21CqDlUBVA2AEAfSnWMR3isaDxP/XlRLhhhFCjQOVlJ2nAVLd7Ui1dRzB2BJR5I2AVyf9tD7N2s1zE3wIW5dhTM5lRBbDeEEhjWhyAkqRoaS3oB6HT02pPmx6tqFW3PrsYHXxp7QOus7Dx6gnpNCczoY1H6+dcWOsaaCd9frH0odkj3IjQ+fn5imlPi2111+tIR3o/mP+fWutL8J31igQ17ZaCIIjeuo9tokeBrqB0f/9k=" alt=""/>
            <div className="UKButtonGroup"></div>
          </div>
        </div>
        {/* Show Data diri  */}
        <div className="ShowDataDiri">
          <div className="DataDiriTerakhir">
            <span>
              {" "}
              <i class="fas fa-exclamation-circle"></i>
            </span>{" "}
            <p>Pernyataan</p>
          </div>

          <div className="Datadiri">
            <p>
              Saya menyatakan bahwa informasi yang tertera dalam formulir ini
              adalah benar. Saya setuju untuk menyesuaikan data Polis sesuai
              dengan informasi yang tercantum dalam formulir ini.
            </p>
            <br />
            <p>
              Apabila data yang saya berikan tidak benar maka saya bertanggung
              jawab penuh atas kesalahan tersebut.
            </p>
            <hr/>
            <div className="SetujuValidator">
            <input type="checkbox"/><p>Ya, Saya Menyetujuai pernyataan di atas.</p>
            </div>

          </div>
        </div>
        {/* btn Lanjut Dan back  */}

        <div className="ButtonGroupNav">
          <button className="button2">
            {" "}
            <i class="far fa-arrow-alt-circle-left"></i> Kembali{" "}
          </button>
          <button className="button1">
            Lanjutkan <i class="far fa-arrow-alt-circle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
