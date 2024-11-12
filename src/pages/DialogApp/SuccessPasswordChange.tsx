import InfoDialog from 'components/organisms/Modals/InfoDialog';
import {  LOGIN_ROUTE, STORE_ROUTE } from 'router/routes';
import { useNavigate } from 'react-router-dom';
import { STORE_CONFIG } from 'store_constants/stores_config';

const SuccessPasswordChange = ({ isOpen, string }) => {
    const navigate = useNavigate();
    const { REQUIRED_REGISTRATION,  STORE_CODE } = STORE_CONFIG;
    if (!isOpen) return null;

    return (
        <>
            <InfoDialog
                variant="success"
                link={null}
                string={string}
                onClose={() => {
                    if (REQUIRED_REGISTRATION) {
                        navigate(LOGIN_ROUTE?.root(STORE_CODE, 'login'));
                    }  else navigate(STORE_ROUTE?.root(STORE_CODE));
                }}
                title={null}
                fullWidth
                onSubmit={() => {
                    if (REQUIRED_REGISTRATION) {
                        navigate(LOGIN_ROUTE?.root(STORE_CODE, 'login'));
                    } 
                     else navigate(STORE_ROUTE?.root(STORE_CODE));
                }}
                description={string?.password_changed}
                closeAvailable
                component="success request"
                content={null}
            />
        </>
    );
};

export default SuccessPasswordChange;
