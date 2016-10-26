/*   copyright 2016 - Rajendra Prashad (rprashad@xogrp.com)
*    This program is free software: you can redistribute it and/or modify
*    it under the terms of the GNU General Public License as published by
*    the Free Software Foundation, either version 3 of the License, or
*    (at your option) any later version.
*
*    This program is distributed in the hope that it will be useful,
*    but WITHOUT ANY WARRANTY; without even the implied warranty of
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*    GNU General Public License for more details.
*    You should have received a copy of the GNU General Public License
*    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/


function hashprimer(){};

hashprimer.prototype.set = function(hash, value, keys, func) {
  while (keys.length > 0) {
    var key = keys.shift();
    if (!hash.hasOwnProperty(key)) {
      hash[key] = {};
    }
    value = this.set(hash[key], value, keys, func);
    if (!Array.isArray(value) && typeof(value) == 'object') {
      hash[key] = Object.assign(hash[key], value);
    }
    else {
      hash[key] = value;
    }
    return hash;
  }
  if (typeof(func) == 'undefined') {
    return value;
  }
  else {
    return func(hash, value);
  }
};

hashprimer.prototype.increment = function(hash, value) {
  if (typeof(hash) != 'number') {
    hash = 0;
  }

  if (typeof(value) == 'number') {
    hash += value;
  }
  else {
    hash++;
  }

 return hash;
};


hashprimer.prototype.array = function(hash, value) {
  if (!Array.isArray(hash)) {
    hash = [];
  }
  hash.push(value);
  return hash;
};

module.exports = hashprimer;
