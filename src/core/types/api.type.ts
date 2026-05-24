// Định nghĩa cấu trúc chuẩn mà Backend sẽ trả về cho mọi API
export interface BaseResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

// Định nghĩa dữ liệu phân trang (Dùng chung cho cả list User, list Hóa đơn...)
export interface PaginatedData<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Ví dụ áp dụng:
// import { BaseResponse, PaginatedData } from '@/core/types/api.type'
// type UserListResponse = BaseResponse<PaginatedData<User>>
