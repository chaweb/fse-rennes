import __nuxt_component_0 from './Icon-7dda3d09.mjs';
import { _ as __nuxt_component_0$1 } from './app.config-f3ff7543.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './fseRennes-dfc19140.mjs';
import { _ as _export_sfc } from './server.mjs';
import './config-9ea32d96.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'ufo';
import 'hookable';
import 'unctx';
import 'h3';
import 'ofetch';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import './config.mjs';
import 'destr';
import 'scule';
import './paths.mjs';

function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon = __nuxt_component_0;
  const _component_nuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content" }, _attrs))} data-v-706f8499><main data-v-706f8499><img${ssrRenderAttr("src", _imports_0)} width="200" data-v-706f8499><h1 data-v-706f8499>FSE de Rennes</h1><h2 data-v-706f8499>Nos r\xE9seaux en une page! <br data-v-706f8499> Un syndicat fait par des \xE9tudiant.es pour les \xE9tudiant.es.</h2><div class="grid" data-v-706f8499><h4 data-v-706f8499><span data-v-706f8499>FSE Rennes</span><div data-v-706f8499><a href="mailto:rennes.fse@gmail.com" data-v-706f8499>`);
  _push(ssrRenderComponent(_component_icon, {
    class: "mail",
    name: "mdi:email",
    size: "36"
  }, null, _parent));
  _push(`<div data-v-706f8499>mail</div></a><a href="https://www.instagram.com/fse_rennes/" data-v-706f8499>`);
  _push(ssrRenderComponent(_component_icon, {
    class: "instagram",
    name: "mdi:instagram",
    size: "36"
  }, null, _parent));
  _push(`<div data-v-706f8499>instagram</div></a><a href="https://twitter.com/fse_rennes/" data-v-706f8499>`);
  _push(ssrRenderComponent(_component_icon, {
    class: "twitter",
    name: "mdi:twitter",
    size: "36"
  }, null, _parent));
  _push(`<div data-v-706f8499>twitter</div></a><a href="https://www.facebook.com/FSE.Rennes" data-v-706f8499>`);
  _push(ssrRenderComponent(_component_icon, {
    class: "facebook",
    name: "mdi:facebook",
    size: "36"
  }, null, _parent));
  _push(`<div data-v-706f8499>facebook</div></a></div></h4><h4 data-v-706f8499><span data-v-706f8499>CSR Beaulieu/Mirabeau</span><div data-v-706f8499><a href="https://www.instagram.com/csr_rennes/" data-v-706f8499>`);
  _push(ssrRenderComponent(_component_icon, {
    class: "instagram",
    name: "mdi:instagram",
    size: "36"
  }, null, _parent));
  _push(`<div data-v-706f8499>instagram</div></a><a href="https://twitter.com/csr_rennes/" data-v-706f8499>`);
  _push(ssrRenderComponent(_component_icon, {
    class: "twitter",
    name: "mdi:twitter",
    size: "36"
  }, null, _parent));
  _push(`<div data-v-706f8499>twitter</div></a>`);
  _push(ssrRenderComponent(_component_nuxtLink, { to: "/whatsapp" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          class: "whatsapp",
          name: "mdi:whatsapp",
          size: "36"
        }, null, _parent2, _scopeId));
        _push2(`<div data-v-706f8499${_scopeId}>whatsapp</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            class: "whatsapp",
            name: "mdi:whatsapp",
            size: "36"
          }),
          createVNode("div", null, "whatsapp")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="https://discord.com/invite/ja2xhaXGN8" data-v-706f8499>`);
  _push(ssrRenderComponent(_component_icon, {
    class: "discord",
    name: "mdi:discord",
    size: "36"
  }, null, _parent));
  _push(`<div data-v-706f8499>discord</div></a></div></h4><h4 data-v-706f8499><span data-v-706f8499>FSE national</span><div data-v-706f8499><a href="https://fse-national.fr/" data-v-706f8499>`);
  _push(ssrRenderComponent(_component_icon, {
    class: "lien",
    name: "ph:link-fill",
    size: "36"
  }, null, _parent));
  _push(`<div data-v-706f8499>fse-national.fr</div></a><a href="https://www.instagram.com/fse_natio/" data-v-706f8499>`);
  _push(ssrRenderComponent(_component_icon, {
    class: "instagram",
    name: "mdi:instagram",
    size: "36"
  }, null, _parent));
  _push(`<div data-v-706f8499>instagram</div></a><a href="https://twitter.com/fse_natio/" data-v-706f8499>`);
  _push(ssrRenderComponent(_component_icon, {
    class: "twitter",
    name: "mdi:twitter",
    size: "36"
  }, null, _parent));
  _push(`<div data-v-706f8499>twitter</div></a><a href="https://www.facebook.com/FSE.natio/" data-v-706f8499>`);
  _push(ssrRenderComponent(_component_icon, {
    class: "facebook",
    name: "mdi:facebook",
    size: "36"
  }, null, _parent));
  _push(`<div data-v-706f8499>facebook</div></a><a href="https://discord.gg/rdbjyKYSdg" data-v-706f8499>`);
  _push(ssrRenderComponent(_component_icon, {
    class: "discord",
    name: "mdi:discord",
    size: "36"
  }, null, _parent));
  _push(`<div data-v-706f8499>discord</div></a></div></h4></div></main></div>`);
}
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/links.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const links = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", ssrRender], ["__scopeId", "data-v-706f8499"]]);

export { links as default };
//# sourceMappingURL=links-25685dd3.mjs.map
