const db = require('../db/db');

// 사용자가 이미 해당 포코로를 보유 중인지 확인하는 함수
const hasUserPokoro = async (user_id, pokoro_name) => {
  try {
    const query = 'SELECT COUNT(*) AS count FROM user_pokoro WHERE user_id = ? AND pokoro_name = ?';
    const [rows] = await db.execute(query, [user_id, pokoro_name]);
    return rows[0].count > 0;
  } catch (error) {
    throw new Error('포코로 중복 확인 중 오류 발생: ' + error.message);
  }
};

// 사용자의 레벨을 가져오는 함수
const getUserLevel = async (user_id) => {
  try {
    const query = 'SELECT level FROM user WHERE id = ?';
    const [rows] = await db.execute(query, [user_id]);
    return rows[0];  // 사용자의 레벨 반환
  } catch (error) {
    throw new Error('사용자 레벨을 가져오는 중 오류 발생: ' + error.message);
  }
};

// 사용자의 레벨에 맞는 포코로를 찾는 함수
const getPokoroByLevel = async (level) => {
  const query = `
        SELECT * FROM guidebook 
        WHERE level_required <= ?
        ORDER BY level_required DESC
        LIMIT 1
    `;
  const [rows] = await db.execute(query, [level]);  // level 이하의 포코로 중 가장 높은 레벨을 찾음
  return rows[0];  // 결과가 없으면 undefined 반환
};

// 사용자가 포코로를 얻었을 때 user_pokoro 테이블에 삽입하는 함수
const insertUserPokoro = async (user_id, pokoro_name) => {
  try {
    const query = 'INSERT INTO user_pokoro (user_id, pokoro_name, date_obtained) VALUES (?, ?, NOW())';
    await db.execute(query, [user_id, pokoro_name]);
  } catch (error) {
    throw new Error('사용자 포코로 삽입 중 오류 발생: ' + error.message);
  }
};

// 사용자가 얻은 포코로 목록을 조회하는 함수
const getUserPokoros = async (user_id) => {
  try {
    const query = 'SELECT * FROM user_pokoro WHERE user_id = ? ORDER BY date_obtained DESC';
    const [rows] = await db.execute(query, [user_id]);
    return rows;  // 사용자가 얻은 포코로 목록 반환
  } catch (error) {
    throw new Error('사용자 포코로 목록을 가져오는 중 오류 발생: ' + error.message);
  }
};

module.exports = {
  hasUserPokoro,
  getUserLevel,
  getPokoroByLevel,
  insertUserPokoro,
  getUserPokoros
};