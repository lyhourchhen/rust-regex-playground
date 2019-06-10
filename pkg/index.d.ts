/* tslint:disable */
/**
* @returns {any} 
*/
export function get_metadata(): any;
/**
*/
export class RRegExp {
  free(): void;
/**
* @param {string} re 
* @returns {} 
*/
  constructor(re: string);
/**
* @param {string} text 
* @returns {boolean} 
*/
  is_match(text: string): boolean;
/**
* @param {string} text 
* @param {number} start 
* @returns {boolean} 
*/
  is_match_at(text: string, start: number): boolean;
/**
* @param {string} text 
* @returns {any} 
*/
  find(text: string): any;
/**
* @param {string} text 
* @param {number} start 
* @returns {any} 
*/
  find_at(text: string, start: number): any;
/**
* @param {string} text 
* @returns {any} 
*/
  find_all(text: string): any;
/**
* @param {string} text 
* @param {string} rep 
* @returns {string} 
*/
  replace(text: string, rep: string): string;
/**
* @param {string} text 
* @param {number} limit 
* @param {string} rep 
* @returns {string} 
*/
  replacen(text: string, limit: number, rep: string): string;
/**
* @param {string} text 
* @param {string} rep 
* @returns {string} 
*/
  replace_all(text: string, rep: string): string;
/**
* @param {string} text 
* @returns {any} 
*/
  split(text: string): any;
/**
* @param {string} text 
* @param {number} limit 
* @returns {any} 
*/
  splitn(text: string, limit: number): any;
/**
* @returns {any} 
*/
  syntax(): any;
}

/**
* If `module_or_path` is {RequestInfo}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {RequestInfo | BufferSource | WebAssembly.Module} module_or_path
*
* @returns {Promise<any>}
*/
export default function init (module_or_path: RequestInfo | BufferSource | WebAssembly.Module): Promise<any>;
        