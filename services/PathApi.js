
export const BASE_URL = 'https://api-web-ban-hang.onrender.com'

export const API_GET_PATHS = {
    lay_ds_ao: `${BASE_URL}/api/products/`,
    lay_ds_ao_all: `${BASE_URL}/api/products`,

    lay_ds_do_nike_nam: `${BASE_URL}/api/products/ds-ao-da-banh-nike-nam?`,
    lay_ds_do_nike_nu: `${BASE_URL}/api/products/ds-ao-da-banh-nike-nu?`,

    lay_ds_do_adidas_nam: `${BASE_URL}/api/products/ds-ao-da-banh-adidas-nam?`,
    lay_ds_do_adidas_nu: `${BASE_URL}/api/products/ds-ao-da-banh-adidas-nu?`,

    lay_ds_do_puma_nam: `${BASE_URL}/api/products/ds-ao-da-banh-puma-nam?`,
    lay_ds_do_puma_nu: `${BASE_URL}/api/products/ds-ao-da-banh-puma-nu?`,

    lay_ds_loc: `${BASE_URL}/api/products/filter?`,
    // --------------------

    lay_ds_san_pham_theo_ten: `${BASE_URL}/api/products/ds-san-pham?`,
    lay_thong_tin_san_pham: `${BASE_URL}/api/products/infor-product/`,
    tim_kiem_san_pham: `${BASE_URL}/api/products/search?name=`,
    danh_gia_san_pham: `${BASE_URL}/api/comment`,

    chi_tiet_don_hang: `${BASE_URL}/api/order-details/`,
    lich_su_mua_hang: `${BASE_URL}/api/orders/all`,
    lich_su_mua_hang_phone: `${BASE_URL}/api/orders?phoneNumbers=`,
    lich_su_mua_hang_status: `${BASE_URL}/api/orders/status?status=`,
    lay_don_hang: `${BASE_URL}/api/orders/`,
}


export const API_POST_PATHS = {
    tao_don_hang: `${BASE_URL}/api/create-order`
}

export const API_AUTH = {
    login: `${BASE_URL}/api/authentication/login-user`,
    register: `${BASE_URL}/api/register`
}
