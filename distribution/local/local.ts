import http from 'http';
import {serialize, deserialize} from '../util/serialization';
import {getNID, getSID, getID} from '../util/id';

const node = global.config;

/*

Service  Description                           Methods
status   statusrmation about the current node  get
routes   A mapping from names to functions     get, put
comm     A message communication interface     send

*/

