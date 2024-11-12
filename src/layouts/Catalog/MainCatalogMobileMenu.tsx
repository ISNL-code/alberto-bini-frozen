import { Box } from '@mui/material';
import MobileNavButton from 'components/atoms/Buttons/MobileNavButton';
import GridViewIcon from '@mui/icons-material/GridView';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProfileMenu from 'components/molecules/ToolsButtons/ProfileMenu';
import { useEffect, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { STORE_CONFIG } from 'store_constants/stores_config';
import {  STORE_ROUTE } from 'router/routes';

const MobileMenu = ({
    appXPadding,
    string,
    auth,
    isShown,
    withFavorites,
    withCart,
    cart,
    favorites,
    headerHeight,
    user,
    menuHeight,
    handleOpenDialog,
}) => {
    const {  STORE_CODE } = STORE_CONFIG;
    const WINDOW_WIDTH = useWindowWidth();
    const [position, setPosition] = useState(0);

    useEffect(() => {
        setPosition(0);
    }, [WINDOW_WIDTH]);

    if (isShown)
        return (
            <Box
                px={appXPadding}
                sx={{
                    height: menuHeight,
                    position: 'fixed',
                    left: position,
                    bottom: position,
                    width: '100%',
                    background: '#000',
                    zIndex: 4000,
                }}
            >
                <Box
                    mt={0.5}
                    sx={{
                        height: menuHeight,
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-around',
                        gap: 2,
                    }}
                >
                    <MobileNavButton
                        path={STORE_ROUTE?.root(STORE_CODE)}
                        title={string?.catalog}
                        icon={p => <GridViewIcon {...p} />}
                        childPath={['product']}
                    />
                    {withFavorites && (
                        <MobileNavButton
                            path={STORE_ROUTE?.favorites(STORE_CODE)}
                            title={string?.favorites}
                            icon={p => <FavoriteIcon {...p} />}
                            badgeCount={favorites?.favoriteItems?.length}
                        />
                    )}
                    {withCart && (
                        <MobileNavButton
                            path={STORE_ROUTE?.cart(STORE_CODE)}
                            title={string?.cart}
                            icon={p => <ShoppingCartIcon {...p} />}
                            badgeCount={cart?.cartItems?.length}
                        />
                    )}

                    <ProfileMenu
                        auth={auth}
                        string={string}
                        headerHeight={headerHeight}
                        footerMenuHeight={menuHeight}
                        user={user}
                        handleOpenDialog={handleOpenDialog}
                        childPath={['orders', 'profile', 'info', 'contacts']}
                    />
                </Box>
            </Box>
        );
    return null;
};

export default MobileMenu;
