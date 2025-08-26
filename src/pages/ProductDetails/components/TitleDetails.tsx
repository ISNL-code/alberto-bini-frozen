import { Box, Divider, Typography, IconButton } from "@mui/material";
import PromoTags from "components/atoms/PromoTags/PromoTags";
import SaleTag from "components/atoms/PromoTags/SaleTag";
import { STORE_CONFIG } from "store_constants/stores_config";
import { StoreType } from "store_constants/types";
import {
  ImageInterface,
  ProductDataInterface,
  ProductVariantInterface,
} from "types/app_models";
import { useOutletContext } from "react-router-dom";
import {
  CatalogContextInterface,
  HomeContextInterface,
} from "types/outlet_context_models";
import { DialogWindowType } from "layouts/hooks/useFormsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

interface Props {
  productDetails: ProductDataInterface;
  selectedVariant: ProductVariantInterface;
  videoUrl: ImageInterface;
}

const TitleDetails = ({ productDetails, selectedVariant, videoUrl }: Props) => {
  const { OPTIONS } = STORE_CONFIG;
  const { STORE_TYPE } = OPTIONS;
  const {
    handleOpenDialog,
    handleSetDialogState,
  }: HomeContextInterface | CatalogContextInterface = useOutletContext();

  return (
    <>
      <Box
        mb={1}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 0.75,
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>{productDetails?.name}</Typography>
          {videoUrl && (
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleOpenDialog(DialogWindowType?.VIDEO); // нужно добавить такой тип
                handleSetDialogState({
                  videoUrl: videoUrl?.imageUrl, // передаём именно ссылку на mp4
                });
              }}
              size="small"
              sx={{
                ml: "auto",
                borderRadius: 2,
              }}
            >
              <YouTubeIcon
                color="primary"
                fontSize="small"
                sx={{ fontSize: 48 }}
              />
            </IconButton>
          )}
        </Box>
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {productDetails?.promoTags.map((el) => (
            <PromoTags
              key={el.id}
              value={el.name}
              disabled={true}
              code={el?.code}
            />
          ))}
          <Box>
            {STORE_TYPE === StoreType.sales && (
              <SaleTag
                price={productDetails?.originalPrice}
                discountPrice={selectedVariant?.price}
              />
            )}
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default TitleDetails;
