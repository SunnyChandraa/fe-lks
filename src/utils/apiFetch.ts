// import type { AxiosResponse, Method, ResponseType } from 'axios'
// import axios from 'axios'
// import { ref, type ComputedRef, type Ref, isRef } from 'vue'

// export type MaybeRefOrComputed<T> = Ref<T> | ComputedRef<T>

// export const useHttp = <Response = any, Formatted = any>({
//   url = import.meta.env.VITE_BASE_URL,
//   variables,
//   token,
//   params = {},
//   method = 'GET',
//   beforeExecute = () => true,
//   onComplete = () => true,
//   formatter = () => true,
//   onError = () => false,
//   onFinally = () => false,
//   useFormData = false,
//   responseType,
//   download
// }: {
//   /** */
//   url?: MaybeRefOrComputed<string> | string
//   variables?: MaybeRefOrComputed<Record<any, any>> | Record<any, any>
//   /**
//    * Sama dengan `params` di Axios, yaitu untuk menambahkan query string \
//    * untuk dinamis dan reactivity bisa menggunakan `computed` atau `ref`.
//    *
//    * ### Contoh Pemakaian:
//    * @example
//    * ```
//    * // Contoh penggunaan dengan objek biasa
//    * useHttp({ params: { userId: 123, status: 'active' } });
//    * // URL hasil konversi: /endpoint?userId=123&status=active
//    *
//    * // Contoh penggunaan dengan computed atau ref (Vue 3)
//    * const userId = ref(123);
//    * const userStatus = computed(() => 'active');
//    * useHttp({ params: { userId, status: userStatus } });
//    * // URL hasil konversi: /endpoint?userId=123&status=active
//    * ```
//    *
//    * @param params - Objek yang berisi pasangan kunci-nilai untuk parameter request.
//    */
//   params?: MaybeRefOrComputed<Record<any, any>> | Record<any, any>
//   /**
//    * Token untuk autentikasi request HTTP.
//    * Ini adalah salah satu parameter dari method `useHttp`.
//    * Pastikan memasukkan token dengan awalan "Bearer" untuk format yang benar.
//    * Jika parameter ini tidak diisi, maka token default akan diambil dari
//    * sesi user yang sedang login.
//    *
//    * ### Contoh Pemakaian:
//    * @example
//    * ```
//    * const token = `Bearer ${yourTokenString}`;
//    * useHttp({ token });
//    * ```
//    *
//    * @param token - Token autentikasi dalam format string.
//    */
//   token?: string
//   method?: Method
//   beforeExecute?: () => boolean
//   /**
//    * Callback yang dipanggil setelah request selesai dilaksanakan tanpa error.\
//    * Param `data` merupakan response dari Axios yang telah sukses.\
//    * Gunakan `data` untuk mengakses response yang diperoleh.
//    *
//    * ### Contoh Pemakaian:
//    * ```
//    * onComplete(data) {
//    *   console.log('Request selesai!', data);
//    * }
//    * ```
//    *
//    * @param data - Response dari Axios yang berisi data dan informasi lainnya dari request.
//    */
//   onComplete?: (axiosResponse: AxiosResponse<Response, any>) => void
//   /**
//    * Fungsi `formatter` digunakan untuk mengubah format data response.
//    * Parameter `data` merupakan referensi (`Ref`) ke tipe `Formatted`,
//    * yang merupakan generic type kedua dari `useHttp`. Tipe `Formatted`
//    * adalah ekspektasi tipe data setelah dilakukan pemformatan oleh fungsi ini.
//    * Parameter `value` adalah response dari Axios atau `null` jika tidak ada data.
//    * `useHttp` sendiri memiliki dua generic types: `Response` untuk tipe response dari endpoint,
//    * dan `Formatted` untuk tipe data yang diharapkan setelah pemformatan.
//    *
//    * ### Contoh Pemakaian:
//    * @example
//    * ```
//    * // Contoh penggunaan formatter dalam useHttp
//    * const useHttp = <Response = any, Formatted = any> => {
//    *   ...
//    *   formatter(data, value) {
//    *     // Ubah format data di sini
//    *     data.value = value?.data; // Contoh penggunaan
//    *   },
//    *   ...
//    * };
//    * ```
//    *
//    * @param data - Referensi ke data yang sudah diformat.
//    * @param value - Response dari Axios atau `null`.
//    */
//   formatter?: (data: Ref<Formatted>, axiosResponse: AxiosResponse<Response, any> | null) => void
//   /**
//    *
//    * ## 👉 Contoh :
//    * > ```ts
//    * const toast = useToast()
//    * onError(data, errorMessage) {
//    *   if (errorMessage) {
//    *     toast.error(errorMessage);
//    *   }
//    * },
//    * ```
//    */
//   onError?: (data: any, errorMessage?: string | null) => void
//   /**
//    * ## ✏️ Fungsi
//    * > Dijalankan setelah query selesai tidak peduli **error** atau **sukses** nya
//    */
//   onFinally?: () => void
//   useFormData?: boolean
//   responseType?: ResponseType
//   download?: boolean
// }) => {
//     return await
// }