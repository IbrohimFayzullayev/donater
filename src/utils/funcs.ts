export const thousandSeperate = (data: number | string | undefined): string => {
    return data?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") || ""
}