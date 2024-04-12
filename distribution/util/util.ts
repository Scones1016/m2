import * as serialization from './serialization';
import * as id from './id';
import * as wire from './wire';

export default {
  serialize: serialization.serialize,
  deserialize: serialization.deserialize,
  id,
  wire,
};