import { Box, Button, Typography } from "@mui/material";
import DetailsSection from "components/atoms/Sections/DetailsSection";
import SizesIndicatorButton from "components/atoms/SizesIndicatorButton/SizesIndicatorButton";
import { useOutletContext } from "react-router-dom";
import StraightenIcon from "@mui/icons-material/Straighten";
import { useDevice } from "hooks/useDevice";
import { ProductDataInterface } from "types/app_models";
import { STORE_CONFIG } from "store_constants/stores_config";
import { Color } from "constants/colors";
import { DialogWindowType } from "layouts/hooks/useFormsApp";
import { CatalogContextInterface } from "types/outlet_context_models";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

interface Props {
  productDetails: ProductDataInterface;
  isShown: boolean;
}

const SizesDetails = ({ productDetails, isShown }: Props) => {
  const { OPTIONS } = STORE_CONFIG;
  const { PLAN_OPTIONS } = OPTIONS;
  const {
    string,
    handleOpenDialog,
    handleSetDialogState,
  }: CatalogContextInterface = useOutletContext();
  const { sm } = useDevice();

  if (isShown)
    return (
      <>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <DetailsSection label={string?.available_sizes}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 0.5,
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {productDetails?.productSizes?.length ? (
                  <Box
                    sx={{
                      width: "fit-content",
                      overflow: "hidden",
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    {productDetails?.productSizes?.map(({ code, id, name }) => (
                      <SizesIndicatorButton
                        key={id}
                        size={sm ? 34 : 38}
                        selected={false}
                        disabled={true}
                        label={name || code}
                        table
                      />
                    ))}
                  </Box>
                ) : (
                  <Typography variant="h4" sx={{ color: "red" }}>
                    {string?.no_available_sizes}
                  </Typography>
                )}
              </Box>
              {PLAN_OPTIONS?.tableSizes && productDetails?.table_size_img && (
                <Button
                  onClick={() => {
                    handleOpenDialog(DialogWindowType?.TABLE_SIZE);
                    handleSetDialogState({
                      imageUrl: productDetails?.table_size_img?.imageUrl,
                      availableSizes: productDetails?.productSizes?.map(
                        ({ code, name }) => {
                          return { name, code };
                        }
                      ),
                    });
                  }}
                  size="small"
                  sx={{
                    border: `2px solid ${Color?.PRIMARY}`,
                    borderRadius: "8px",
                    px: 1,
                    height: "fit-content",
                    minWidth: "fit-content",
                  }}
                  startIcon={
                    <StraightenIcon
                      color="primary"
                      fontSize="small"
                      sx={{ fontSize: 18 }}
                    />
                  }
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: Color?.PRIMARY,
                      textTransform: "uppercase",
                      fontSize: 12,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {string?.size_chart}
                  </Typography>
                </Button>
              )}
            </Box>
          </DetailsSection>

          <Box mt={2} display="flex" flexDirection="column" gap={1.2}>
            {/* Інформація про вибір розміру */}
            <Box
              p={1.5}
              display="flex"
              alignItems="center"
              bgcolor="#e8f5e9"
              border="1px solid #c8e6c9"
              borderRadius={2}
            >
              <WarningAmberIcon sx={{ color: "#43a047", mr: 1 }} />
              <Typography
                sx={{ fontSize: 14, color: "#2e7d32", fontWeight: 500 }}
              >
                {string?.size_selection_is_only_available_during_checkout}
              </Typography>
            </Box>

            {/* Інформація про більшу ціну для великих розмірів */}
            <Box
              p={1.5}
              display="flex"
              alignItems="center"
              bgcolor="#fff3e0"
              border="1px solid #ffe0b2"
              borderRadius={2}
            >
              <WarningAmberIcon sx={{ color: "#f57c00", mr: 1 }} />
              <Typography
                sx={{ fontSize: 14, color: "#e65100", fontWeight: 500 }}
              >
                {string?.larger_sizes_have_higher_price}
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    );
  return null;
};

export default SizesDetails;
