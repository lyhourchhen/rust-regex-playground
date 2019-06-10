
const __exports = {};
let wasm;

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

let passStringToWasm;
if (typeof cachedTextEncoder.encodeInto === 'function') {
    passStringToWasm = function(arg) {


        let size = arg.length;
        let ptr = wasm.__wbindgen_malloc(size);
        let offset = 0;
        {
            const mem = getUint8Memory();
            for (; offset < arg.length; offset++) {
                const code = arg.charCodeAt(offset);
                if (code > 0x7F) break;
                mem[ptr + offset] = code;
            }
        }

        if (offset !== arg.length) {
            arg = arg.slice(offset);
            ptr = wasm.__wbindgen_realloc(ptr, size, size = offset + arg.length * 3);
            const view = getUint8Memory().subarray(ptr + offset, ptr + size);
            const ret = cachedTextEncoder.encodeInto(arg, view);

            offset += ret.written;
        }
        WASM_VECTOR_LEN = offset;
        return ptr;
    };
} else {
    passStringToWasm = function(arg) {


        let size = arg.length;
        let ptr = wasm.__wbindgen_malloc(size);
        let offset = 0;
        {
            const mem = getUint8Memory();
            for (; offset < arg.length; offset++) {
                const code = arg.charCodeAt(offset);
                if (code > 0x7F) break;
                mem[ptr + offset] = code;
            }
        }

        if (offset !== arg.length) {
            const buf = cachedTextEncoder.encode(arg.slice(offset));
            ptr = wasm.__wbindgen_realloc(ptr, size, size = offset + buf.length);
            getUint8Memory().set(buf, ptr + offset);
            offset += buf.length;
        }
        WASM_VECTOR_LEN = offset;
        return ptr;
    };
}

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8');

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
    if (cachedGlobalArgumentPtr === null) {
        cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
    }
    return cachedGlobalArgumentPtr;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}
/**
* @returns {any}
*/
export function get_metadata() {
    return takeObject(wasm.get_metadata());
}
__exports.get_metadata = get_metadata

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function __wbg_new_acdbe9c25dc35c37() {
    return addHeapObject(new Array());
}
__exports.__wbg_new_acdbe9c25dc35c37 = __wbg_new_acdbe9c25dc35c37

function __wbg_push_60b55c9bdc824202(arg0, arg1) {
    return getObject(arg0).push(getObject(arg1));
}
__exports.__wbg_push_60b55c9bdc824202 = __wbg_push_60b55c9bdc824202

function __wbg_new_1b8e8daea7ea040d(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Error(varg0));
}
__exports.__wbg_new_1b8e8daea7ea040d = __wbg_new_1b8e8daea7ea040d

function __wbg_new_68180085d411e1be() {
    return addHeapObject(new Object());
}
__exports.__wbg_new_68180085d411e1be = __wbg_new_68180085d411e1be

function handleError(exnptr, e) {
    const view = getUint32Memory();
    view[exnptr / 4] = 1;
    view[exnptr / 4 + 1] = addHeapObject(e);
}

function __wbg_set_8866dbb36cf947cb(arg0, arg1, arg2, exnptr) {
    try {
        return Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    } catch (e) {
        handleError(exnptr, e);
    }
}
__exports.__wbg_set_8866dbb36cf947cb = __wbg_set_8866dbb36cf947cb

function __wbindgen_string_new(p, l) { return addHeapObject(getStringFromWasm(p, l)); }
__exports.__wbindgen_string_new = __wbindgen_string_new

function __wbindgen_number_new(i) { return addHeapObject(i); }
__exports.__wbindgen_number_new = __wbindgen_number_new

function __wbindgen_debug_string(i, len_ptr) {
    const debug_str =
    val => {
        // primitive types
        const type = typeof val;
        if (type == 'number' || type == 'boolean' || val == null) {
            return  `${val}`;
        }
        if (type == 'string') {
            return `"${val}"`;
        }
        if (type == 'symbol') {
            const description = val.description;
            if (description == null) {
                return 'Symbol';
            } else {
                return `Symbol(${description})`;
            }
        }
        if (type == 'function') {
            const name = val.name;
            if (typeof name == 'string' && name.length > 0) {
                return `Function(${name})`;
            } else {
                return 'Function';
            }
        }
        // objects
        if (Array.isArray(val)) {
            const length = val.length;
            let debug = '[';
            if (length > 0) {
                debug += debug_str(val[0]);
            }
            for(let i = 1; i < length; i++) {
                debug += ', ' + debug_str(val[i]);
            }
            debug += ']';
            return debug;
        }
        // Test for built-in
        const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
        let className;
        if (builtInMatches.length > 1) {
            className = builtInMatches[1];
        } else {
            // Failed to match the standard '[object ClassName]'
            return toString.call(val);
        }
        if (className == 'Object') {
            // we're a user defined class or Object
            // JSON.stringify avoids problems with cycles, and is generally much
            // easier than looping through ownProperties of `val`.
            try {
                return 'Object(' + JSON.stringify(val) + ')';
            } catch (_) {
                return 'Object';
            }
        }
        // errors
        if (val instanceof Error) {
        return `${val.name}: ${val.message}
        ${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}
;
const toString = Object.prototype.toString;
const val = getObject(i);
const debug = debug_str(val);
const ptr = passStringToWasm(debug);
getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;
return ptr;
}
__exports.__wbindgen_debug_string = __wbindgen_debug_string

function __wbindgen_rethrow(idx) { throw takeObject(idx); }
__exports.__wbindgen_rethrow = __wbindgen_rethrow

function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}
__exports.__wbindgen_throw = __wbindgen_throw

function freeRRegExp(ptr) {

    wasm.__wbg_rregexp_free(ptr);
}
/**
*/
export class RRegExp {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeRRegExp(ptr);
    }

    /**
    * @param {string} re
    * @returns {}
    */
    constructor(re) {
        const ptr0 = passStringToWasm(re);
        const len0 = WASM_VECTOR_LEN;
        try {
            this.ptr = wasm.rregexp_new(ptr0, len0);

        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
    /**
    * @param {string} text
    * @returns {boolean}
    */
    is_match(text) {
        const ptr0 = passStringToWasm(text);
        const len0 = WASM_VECTOR_LEN;
        try {
            return (wasm.rregexp_is_match(this.ptr, ptr0, len0)) !== 0;

        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
    /**
    * @param {string} text
    * @param {number} start
    * @returns {boolean}
    */
    is_match_at(text, start) {
        const ptr0 = passStringToWasm(text);
        const len0 = WASM_VECTOR_LEN;
        try {
            return (wasm.rregexp_is_match_at(this.ptr, ptr0, len0, start)) !== 0;

        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
    /**
    * @param {string} text
    * @returns {any}
    */
    find(text) {
        const ptr0 = passStringToWasm(text);
        const len0 = WASM_VECTOR_LEN;
        try {
            return takeObject(wasm.rregexp_find(this.ptr, ptr0, len0));

        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
    /**
    * @param {string} text
    * @param {number} start
    * @returns {any}
    */
    find_at(text, start) {
        const ptr0 = passStringToWasm(text);
        const len0 = WASM_VECTOR_LEN;
        try {
            return takeObject(wasm.rregexp_find_at(this.ptr, ptr0, len0, start));

        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
    /**
    * @param {string} text
    * @returns {any}
    */
    find_all(text) {
        const ptr0 = passStringToWasm(text);
        const len0 = WASM_VECTOR_LEN;
        try {
            return takeObject(wasm.rregexp_find_all(this.ptr, ptr0, len0));

        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
    /**
    * @param {string} text
    * @param {string} rep
    * @returns {string}
    */
    replace(text, rep) {
        const ptr0 = passStringToWasm(text);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm(rep);
        const len1 = WASM_VECTOR_LEN;
        const retptr = globalArgumentPtr();
        try {
            wasm.rregexp_replace(retptr, this.ptr, ptr0, len0, ptr1, len1);
            const mem = getUint32Memory();
            const rustptr = mem[retptr / 4];
            const rustlen = mem[retptr / 4 + 1];

            const realRet = getStringFromWasm(rustptr, rustlen).slice();
            wasm.__wbindgen_free(rustptr, rustlen * 1);
            return realRet;


        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);
            wasm.__wbindgen_free(ptr1, len1 * 1);

        }

    }
    /**
    * @param {string} text
    * @param {number} limit
    * @param {string} rep
    * @returns {string}
    */
    replacen(text, limit, rep) {
        const ptr0 = passStringToWasm(text);
        const len0 = WASM_VECTOR_LEN;
        const ptr2 = passStringToWasm(rep);
        const len2 = WASM_VECTOR_LEN;
        const retptr = globalArgumentPtr();
        try {
            wasm.rregexp_replacen(retptr, this.ptr, ptr0, len0, limit, ptr2, len2);
            const mem = getUint32Memory();
            const rustptr = mem[retptr / 4];
            const rustlen = mem[retptr / 4 + 1];

            const realRet = getStringFromWasm(rustptr, rustlen).slice();
            wasm.__wbindgen_free(rustptr, rustlen * 1);
            return realRet;


        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);
            wasm.__wbindgen_free(ptr2, len2 * 1);

        }

    }
    /**
    * @param {string} text
    * @param {string} rep
    * @returns {string}
    */
    replace_all(text, rep) {
        const ptr0 = passStringToWasm(text);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm(rep);
        const len1 = WASM_VECTOR_LEN;
        const retptr = globalArgumentPtr();
        try {
            wasm.rregexp_replace_all(retptr, this.ptr, ptr0, len0, ptr1, len1);
            const mem = getUint32Memory();
            const rustptr = mem[retptr / 4];
            const rustlen = mem[retptr / 4 + 1];

            const realRet = getStringFromWasm(rustptr, rustlen).slice();
            wasm.__wbindgen_free(rustptr, rustlen * 1);
            return realRet;


        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);
            wasm.__wbindgen_free(ptr1, len1 * 1);

        }

    }
    /**
    * @param {string} text
    * @returns {any}
    */
    split(text) {
        const ptr0 = passStringToWasm(text);
        const len0 = WASM_VECTOR_LEN;
        try {
            return takeObject(wasm.rregexp_split(this.ptr, ptr0, len0));

        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
    /**
    * @param {string} text
    * @param {number} limit
    * @returns {any}
    */
    splitn(text, limit) {
        const ptr0 = passStringToWasm(text);
        const len0 = WASM_VECTOR_LEN;
        try {
            return takeObject(wasm.rregexp_splitn(this.ptr, ptr0, len0, limit));

        } finally {
            wasm.__wbindgen_free(ptr0, len0 * 1);

        }

    }
    /**
    * @returns {any}
    */
    syntax() {
        return takeObject(wasm.rregexp_syntax(this.ptr));
    }
}

function __wbindgen_object_drop_ref(i) { dropObject(i); }
__exports.__wbindgen_object_drop_ref = __wbindgen_object_drop_ref

function init(module) {
    let result;
    const imports = { './index': __exports };

    if (module instanceof URL || typeof module === 'string' || module instanceof Request) {

        const response = fetch(module);
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            result = WebAssembly.instantiateStreaming(response, imports)
            .catch(e => {
                console.warn("`WebAssembly.instantiateStreaming` failed. Assuming this is because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                return response
                .then(r => r.arrayBuffer())
                .then(bytes => WebAssembly.instantiate(bytes, imports));
            });
        } else {
            result = response
            .then(r => r.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes, imports));
        }
    } else {

        result = WebAssembly.instantiate(module, imports)
        .then(result => {
            if (result instanceof WebAssembly.Instance) {
                return { instance: result, module };
            } else {
                return result;
            }
        });
    }
    return result.then(({instance, module}) => {
        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;

        return wasm;
    });
}

export default init;

