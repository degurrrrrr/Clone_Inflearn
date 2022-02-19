export const nicknameCheck = ({nickname}) => {
  const _checkNick = /^(?=.*[a-zA-Z]{0,30})(?=.*[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{0,30})(?=.*[0-9]{0,30}).{3,10}$/.test(nickname);

  if (!_checkNick) {
    window.alert("닉네임이 형식에 맞지 않습니다.\n다시 한 번 확인해주세요.");
    return;
  }
}

export const pwCheck = (password, pwConfirm) => {
  const pwCheck= /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-_]{0,20}).{4,30}$/.test(password, pwConfirm);
  //영문,숫자 필수 포함 + 특수문자 0개부터 20개

  if (!pwCheck) {
    window.alert("비밀번호가 형식에 맞지 않습니다.\n다시 한 번 확인해주세요.");
    return;
  }
};