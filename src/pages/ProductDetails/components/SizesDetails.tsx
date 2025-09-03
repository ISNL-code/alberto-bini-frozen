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
import { StoreType } from "store_constants/types";

interface Props {
  productDetails: ProductDataInterface;
  isShown: boolean;
}

const SizesDetails = ({ productDetails, isShown }: Props) => {
  const { OPTIONS } = STORE_CONFIG;
  const { PLAN_OPTIONS, STORE_TYPE } = OPTIONS;
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

          {(STORE_TYPE === StoreType?.sales && (
            <Box
              mt={1}
              p={1.5}
              display="flex"
              alignItems="center"
              bgcolor="#fdecea"
              border="1px solid #f5c6cb"
              borderRadius={1}
            >
              <WarningAmberIcon sx={{ color: "#d32f2f", mr: 1 }} />
              <Typography
                sx={{ fontSize: 14, color: "#d32f2f", fontWeight: 500 }}
              >
                {string?.manager_check_size}
              </Typography>
            </Box>
          )) || (
            <Box my={0.5} ml={1}>
              <Typography sx={{ fontSize: 14, color: "red" }}>
                {string?.size_selection_is_only_available_during_checkout}
              </Typography>
            </Box>
          )}
        </Box>
      </>
    );
  return null;
};

export default SizesDetails;
