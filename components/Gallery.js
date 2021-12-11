import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { images } from "../constants";

const Thumbnail = ({ id, i }) => (
  <Link href={`/image/${i}`}>
    <a className={"cursor-pointer"}>
      <motion.div
        layoutId={`image-${i}`}
        transition={{
          duration: 3,
        }}
      >
        <Image
          src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=300`}
          width={300}
          height={300}
          layout={"responsive"}
          objectFit={"cover"}
        />
      </motion.div>
    </a>
  </Link>
);

const Gallery = () => (
  <div className="grid grid-cols-4 gap-4">
    {images.map((id, i) => (
      <Thumbnail key={id} id={id} i={i} />
    ))}
  </div>
);

export default Gallery;
