const initialLoad = async (db, syncPaths, dispatch) => {
  const result = await db.allDocs({
    include_docs: true,
    update_seq: true
  });
  syncPaths.forEach(path => {
    if (path.actions.load) {
      dispatch({
        type: path.actions.load,
        [path.name]: result.rows.map(r => r.doc).filter(path.filter)
      });
    }
  });
  return result;
};

export default initialLoad;
