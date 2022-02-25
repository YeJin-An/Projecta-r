function NoticeTable() {
  return (
    <>
      <div className="mt-4 mr-3">
        <table className="flex place-content-around gap-4">
          <th className="mb-1">번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </table>
      </div>
      <hr className="text-blank-400 border-b-2 border-300 mb-1 mt-1" />
    </>
  );
}

export default NoticeTable;
