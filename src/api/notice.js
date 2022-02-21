import { useRequest } from './base';

function useNoticeList(manual = false) {
  const {
    data: noticeList,
    loading,
    error,
    errorMessages,
    request,
  } = useRequest('/notice/api/notices/', [], manual);
  return { noticeList, loading, error, errorMessages, request };
}

function useNotice(id, manual = false) {
  const {
    data: notice,
    loading,
    error,
    errorMessages,
    request,
  } = useRequest(`/notice/api/notices/${id}/`, null, manual);
  return { notice, loading, error, errorMessages, request };
}

export { useNoticeList, useNotice };
