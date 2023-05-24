import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { User } from '../../types/User';

type UserInputtableFields = Optional<User, 'id'>;
export type UserModelType = Model<User, UserInputtableFields>;
type UserSequelizeModelCreator = ModelDefined<User, UserInputtableFields>;

const UserModel: UserSequelizeModelCreator = db.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  tableName: 'users',
  timestamps: false,
  underscored: true,
});

export default UserModel;