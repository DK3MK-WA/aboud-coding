"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gemini = void 0;
// dark man :)
const _0x14e36f = _0x171f;
(function (_0x587b99, _0x4380c2) { const _0x270d26 = _0x171f, _0x56f35b = _0x587b99(); while (!![]) {
    try {
        const _0x11877c = -parseInt(_0x270d26(0x11a)) / 0x1 * (-parseInt(_0x270d26(0x121)) / 0x2) + -parseInt(_0x270d26(0x123)) / 0x3 + parseInt(_0x270d26(0x11d)) / 0x4 * (parseInt(_0x270d26(0x12e)) / 0x5) + -parseInt(_0x270d26(0x128)) / 0x6 + parseInt(_0x270d26(0x12f)) / 0x7 * (parseInt(_0x270d26(0x120)) / 0x8) + parseInt(_0x270d26(0x131)) / 0x9 * (-parseInt(_0x270d26(0x11f)) / 0xa) + parseInt(_0x270d26(0x124)) / 0xb * (parseInt(_0x270d26(0x125)) / 0xc);
        if (_0x11877c === _0x4380c2)
            break;
        else
            _0x56f35b['push'](_0x56f35b['shift']());
    }
    catch (_0x4a2c7d) {
        _0x56f35b['push'](_0x56f35b['shift']());
    }
} }(_0x1d4f, 0x8f0f4));
function _0x1d4f() { const _0x4b40ea = ['Error\x20downloading\x20or\x20converting\x20image:', '119781qhKvDC', '43sAhYDm', 'gemini-pro', 'binary', '4dPbciO', 'from', '230DlFrWU', '710440FXQtJJ', '11912AIcluT', 'AIzaSyD9vdWzZbTbRr9owEkYtzpI4eQLg9iOBSQ', '2384490MSAGSO', '1877403qqwlUV', '36wBGTsT', 'Error\x20generating\x20content', 'data', '2097762kMVpcM', 'getGenerativeModel', 'base64', 'dark\x20man', 'error', 'arraybuffer', '5453995uOoeHY', '14emjQYl']; _0x1d4f = function () { return _0x4b40ea; }; return _0x1d4f(); }
const generative_ai_1 = require("@google/generative-ai");
const axios_1 = require("axios");
const geminiApiKey = _0x14e36f(0x122), genAI = new generative_ai_1.GoogleGenerativeAI(geminiApiKey);
function _0x171f(_0x424a1e, _0x57b0f4) { const _0x1d4fa3 = _0x1d4f(); return _0x171f = function (_0x171f0a, _0x3cf968) { _0x171f0a = _0x171f0a - 0x11a; let _0x41a94f = _0x1d4fa3[_0x171f0a]; return _0x41a94f; }, _0x171f(_0x424a1e, _0x57b0f4); }
function gemini(_0x2772d6, _0x2facf2) {
    return __awaiter(this, void 0, void 0, function* () { const _0x17f473 = _0x14e36f; try {
        let _0x1f6e15 = genAI[_0x17f473(0x129)]({ 'model': _0x17f473(0x11b) }), _0x4e1091 = '';
        if (_0x2facf2)
            try {
                const _0x2420c4 = yield axios_1.default['get'](_0x2facf2, { 'responseType': _0x17f473(0x12d) }), _0xa2f9d0 = Buffer[_0x17f473(0x11e)](_0x2420c4[_0x17f473(0x127)], _0x17f473(0x11c))['toString'](_0x17f473(0x12a));
                _0x4e1091 = { 'inlineData': { 'data': _0xa2f9d0, 'mimeType': 'image/png' } }, _0x1f6e15 = genAI[_0x17f473(0x129)]({ 'model': 'gemini-pro-vision' });
            }
            catch (_0x46f943) {
                console['error'](_0x17f473(0x130), _0x46f943);
            }
        const _0x1c0921 = yield _0x1f6e15['generateContent']([_0x2772d6, _0x4e1091]), _0x232b8d = _0x1c0921['response'], _0x5dcecc = yield _0x232b8d['text'](), _0xc497ad = { 'status': 0xc8, 'creator': _0x17f473(0x12b), 'text': _0x5dcecc };
        return _0xc497ad;
    }
    catch (_0x55e613) {
        return console[_0x17f473(0x12c)]('Error\x20generating\x20content:', _0x55e613), { 'status': 0x1f4, 'creator': 'dark\x20man', 'text': _0x17f473(0x126) };
    } });
}
exports.gemini = gemini;
