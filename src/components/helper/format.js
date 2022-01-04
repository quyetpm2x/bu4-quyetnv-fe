export const formatActivity = (action) => {
    if(action === 1) {
        return `Issued documents`;
    } else if(action === 2) {
        return `Revoked documents`;
    } else if(action === 3) {
        return `Deployed contract`;
    }
  };

export const formatBatchStatus = (status) => {
    if(status === 1) {
        return `Pending`;
    } else if(status === 2) {
        return `Issued`;
    } else if(status === 3) {
        return `Revoke`;
    }
};