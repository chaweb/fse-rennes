import { mergeProps, useSSRContext } from 'vue';
import { _ as _export_sfc, b as useState } from './server.mjs';
import { ssrRenderAttrs } from 'vue/server-renderer';
import 'ofetch';
import './app.config-f3ff7543.mjs';
import 'ufo';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import './config.mjs';
import 'destr';
import 'scule';

const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))} data-v-a28b46bc><article class="content__article" data-v-a28b46bc> not available </article><div class="content__network" data-v-a28b46bc><p data-v-a28b46bc>FSE <br data-v-a28b46bc><a href="https://www.instagram.com/fse_rennes/" id="insta" data-v-a28b46bc>instagram</a><br data-v-a28b46bc><a href="https://twitter.com/fse_rennes/" id="twitter" data-v-a28b46bc>twitter</a><br data-v-a28b46bc><a href="https://www.facebook.com/FSE.Rennes" id="facebook" data-v-a28b46bc>facebook</a></p><p data-v-a28b46bc>CSR <br data-v-a28b46bc><a href="https://www.instagram.com/csr_rennes/" id="insta" data-v-a28b46bc>instagram</a><br data-v-a28b46bc><a href="https://twitter.com/csr_rennes/" id="twitter" data-v-a28b46bc>twitter</a></p><p data-v-a28b46bc>national <br data-v-a28b46bc><a href="https://fse-national.fr" id="web" data-v-a28b46bc>site official</a><br data-v-a28b46bc><a href="https://www.instagram.com/fse_natio/" id="insta" data-v-a28b46bc>insta</a><br data-v-a28b46bc><a href="https://twitter.com/fse_natio/" id="twitter" data-v-a28b46bc>twitter</a><br data-v-a28b46bc><a href="https://www.facebook.com/FSE.natio/" id="facebook" data-v-a28b46bc>facebook</a><br data-v-a28b46bc><a href="https://discord.gg/rdbjyKYSdg" id="discord" data-v-a28b46bc>discord</a></p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a28b46bc"]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-cc2c582f.mjs.map
