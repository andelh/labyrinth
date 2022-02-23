import { motion } from "framer-motion";
import { EASING } from "lib/constants";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function MasonGallery({ gallery }) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter={20}>
        {gallery.map((item, index) => (
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 * index, ease: EASING, duration: 1 }}
            viewport={{
              amount: "some",
              once: true,
            }}
            key={index}
            src={item.sourceUrl}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
