export const NAV_ITEMS = [
  {
    id: 'san-pham',
    label: 'Sản phẩm',
    path: '/san-pham',
    children: [
      { id: 'do-an', label: 'Đồ ăn', path: '/san-pham/do-an' },
      { id: 'nuoc-uong', label: 'Nước uống', path: '/san-pham/nuoc-uong' },
      { id: 'hang-tieu-dung', label: 'Hàng tiêu dùng', path: '/san-pham/hang-tieu-dung' },
      { id: 'cafe-gs25', label: 'Cafe GS25', path: '/san-pham/cafe-gs25' },
    ],
  },
  {
    id: 'hang-doc-quyen',
    label: 'Hàng độc quyền',
    path: '/hang-doc-quyen',
    children: [
      { id: 'youus', label: 'Youus', path: '/hang-doc-quyen/youus' },
      { id: 'moomoossi', label: 'Moomoossi', path: '/hang-doc-quyen/moomoossi' },
    ],
  },
  {
    id: 'thanh-vien',
    label: 'Thành viên',
    path: '/thanh-vien',
  },
  {
    id: 'doi-tac',
    label: 'Đối tác',
    path: '/doi-tac',
  },
  {
    id: 'thong-tin',
    label: 'Thông tin',
    children: [
      { id: 've-gs25', label: 'Về GS25', path: '/ve-gs25' },
      { id: 'lien-he', label: 'Liên hệ', path: '/lien-he' },
      { id: 'tin-tuc', label: 'Tin tức', path: '/tin-tuc' },
    ],
  },
  {
    id: 'tuyen-dung',
    label: 'Tuyển dụng',
    path: '/tuyen-dung',
  },
]

export function isNavActive(item, pathname) {
  const match = (path) =>
    Boolean(path) && (pathname === path || pathname.startsWith(`${path}/`))

  if (match(item.path)) return true
  return item.children?.some((child) => match(child.path)) ?? false
}
