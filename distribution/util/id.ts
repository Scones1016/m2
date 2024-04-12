import crypto from 'crypto';
import {serialize} from '../util/serialization';

// The ID is the SHA256 hash of the JSON representation of the object
function getID(obj: any): string {
  const hash = crypto.createHash('sha256');
  hash.update(serialize(obj));
  return hash.digest('hex');
}

// The NID is the SHA256 hash of the JSON representation of the node
function getNID(node: any): string {
  const hash = crypto.createHash('sha256');
  hash.update(serialize(node));
  return hash.digest('hex');
}

// The SID is the first 5 characters of the NID
function getSID(node: any): string {
  return getNID(node).substring(0, 5);
}

export { getNID, getSID, getID };