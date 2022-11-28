import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { useEffect, useState } from 'react';

import { getFollowers, getModalFollow } from '../../../../utils/Users.utils';
import LinkTag from './FollowersModal.styles';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  userID: string;
}

function FollowersModal({ isOpen, handleClose, userID }: ModalProps) {
  const [followers, setFollowers] = useState<string[]>();
  const [displayUsers, setDisplayUsers] = useState<
    { firstName: string; surname: string; profilePicture: string; userID: string }[]
  >([]);
  useEffect(() => {
    if (isOpen) {
      getFollowers(setFollowers, userID);
    }
  }, [isOpen, userID]);
  useEffect(() => {
    if (followers?.length) {
      getModalFollow({ userIDS: followers, setDisplayUsers });
    }
  }, [followers]);
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {followers?.length ? (
            <div>
              {displayUsers?.length ? (
                displayUsers.map((user) => (
                  <div key={`${user.firstName} ${user.surname}`}>
                    <LinkTag
                      onClick={() => {
                        setDisplayUsers([]);
                        handleClose();
                      }}
                      to={`/profile/${user.userID}`}
                    >
                      {user.firstName} {user.surname}
                    </LinkTag>
                    <p>{user.profilePicture}</p>
                  </div>
                ))
              ) : (
                <p>loading</p>
              )}
            </div>
          ) : (
            <p>you have no followers</p>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default FollowersModal;
